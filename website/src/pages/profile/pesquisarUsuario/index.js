import { useState, useEffect } from "react";
import StyledPesquisarUsuario from "./styles";
import ProfileCard from "../../../components/profile";
import User from '../../../assets/images/perfil.png'
import ListarUsuarios from "./listarUsuario";
import { Link, useNavigate } from "react-router-dom";
import { DetalhesUsuario } from '../../../api/user.js';
import { Usuarios } from "../../../api/user.js";
import storage from 'local-storage';

export default function BuscarUsuarioPage() {
    const navigate = useNavigate();
    const [perfil, setPerfil] = useState(0);
    const [dados, setDados] = useState({});
    const [usuarios, setUsuarios] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    
    function click(e) {
        switch (e.target.id) {
            case 'desconectar':
                storage.remove('usuario-logado')
                navigate('/')
                break;
            default:
                break;
        }
    }
    
    useEffect(_ => {
        let resp;
        if (!storage('usuario-logado'))
            navigate('/login');
        else
            resp = storage('usuario-logado');
        setPerfil(resp.id)
    }, [])

    useEffect(_ => {
        async function requisicao() {
            const resp = await DetalhesUsuario(perfil)
            setDados(resp);
        }
        requisicao();
    }, [perfil])

    useEffect(_ => {
        async function requisicao() {
            const resp = await Usuarios();
            setUsuarios(resp);
        }
        requisicao()
    }, [])

    return(
        <StyledPesquisarUsuario className="wh100v container bEF7601 wrap jc-center al-center">
            <section className="container cinza-card    ">
                {dados && (
                    <ProfileCard userProfile={User}
                        desconectar={e => click(e)}
                        nome={dados.nome}
                        habilidades={dados.sobre}
                        normal={true}
                    />
                )}
                <div className="linha" />
                <nav className="container-column">
                    <div className="container jc-end">
                        <input type='text' placeholder='Pesquisar' />
                    </div>
                    <div className="linha"/>
                    <div className="card-branco listar">
                        {usuarios.map(item => 
                            <ListarUsuarios img={User}
                                id={item.id}
                                nome={item.nome}
                                descricao={item.sobre}
                            />
                        )}
                    </div>
                </nav>
            </section>
        </StyledPesquisarUsuario>
    )
}