import { Link } from 'react-router-dom'
import '../styles.scss'
import User from '../../../assets/images/perfil.png'
import ProfileCard from '../../../components/profile'
import TableCard from '../../../components/table'
import { useEffect, useState } from 'react'
import { DetalhesUsuario } from '../../../api/user.js';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom'

export default function AdmHistoricoPage() {
    const [dados, setDados] = useState({});
    const navigate = useNavigate()
    const [perfil, setPerfil] = useState(0);

    useEffect(_ => {
        if (!storage('worker'))
            navigate('/perfil/editar');
    }, [])

    useEffect(_ => {
        try {
            let resp;
            if (!storage('usuario-logado'))
                navigate('/login');
            else
                resp = storage('usuario-logado');
            setPerfil(resp.id)
        } catch (err) {
            navigate('/login')
        }
    }, [])

    useEffect(_ => {
        async function requisicao() {
            const resp = await DetalhesUsuario(perfil)
            setDados(resp);
        }
        requisicao();
    }, [perfil])

    function click(e) {
        switch (e.target.id) {
            case 'desconectar':
                storage.remove('usuario-logado')
                storage.remove('worker')
                navigate('/')
                break;
            default:
                break;
        }
    }
    return(
        <main className="container wh100v b5551E3 jc-center al-center">
            <section className="container cinza-card resolutionAdm">
                <ProfileCard userProfile={User}
                    desconectar={e => click(e)}
                    nome={dados.nome}
                    habilidades={dados.habilidades}
                />
                 <div className='linha'/> { /* Linha */ }
                 
                <TableCard h1='Histórico' his={true} />
            </section>
        </main>
    )
}