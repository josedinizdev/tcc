import React, { useEffect, useState } from 'react';
import storage from 'local-storage';
import StyledProfile from './styles.js';
import { Link, useNavigate } from "react-router-dom";
import ProfileCard from '../../components/profile/index.js';
import User from '../../assets/images/perfil.png'
import { DetalhesUsuario } from '../../api/user.js';

export default function Profile() {
    const navigate = useNavigate();
    const [perfil, setPerfil] = useState(0);
    const [dados, setDados] = useState({});
    
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

    return(
        <StyledProfile className='container wh100 jc-center al-center bEF7601 '>
            {dados && (
                <div className='container cinza-card '>
                    <ProfileCard userProfile={User}
                        desconectar={e => click(e)}
                        nome={dados.nome}
                        habilidades={dados.sobre}
                        normal={true}
                    />
                    <div className='linha' />
                <section className='container-column'>
                    <h1> Bem-vindo de volta</h1>
                    <article className='container jc-around al-center height100'>
                        <div className='container-colum card-branco notificacoes'>
                            <h2> Novas Mensagens </h2>
                        </div>
                        <div className='container-column card-branco notificacoes'> 
                            <h2> Notificações </h2>
                        </div>
                    </article>
                </section>
            </div>
            )}
    </StyledProfile>
    )
}