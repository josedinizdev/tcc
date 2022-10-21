import React from 'react';
import storage from 'local-storage';
import StyledProfile from './styles.js';
import { Link, Navigate } from 'react-router-dom';
import ProfileCard from '../../components/profile/index.js';
import User from '../../assets/images/perfil.png'



function click(e) {
    switch (e.target.value) {
        case 'desconectar':
            storage.remove('usuario-logado')
            Navigate('/')
            break;
        default:
            break;
    }
}

export default function Profile() {
    return(
        <StyledProfile className='container wh100 jc-center al-center bEF7601 '>
            <div className='container cinza-card '>
                    <ProfileCard userProfile={User}
                                    nome='David Douglas'
                                    cargo='Desenvolvedor Sênior'
                                    habilidades='   Designer UX/UL   Desenvolvedor de Software   Desenvolvedor Web   HTML & CSS Avançado'/>

                <div className='linha'/> { /* Linha */ }

                <section className='container-column'>
                    <h1> Bem-vindo de volta, David! </h1>

                    <article className='container jc-around al-center'>
                        <div className='container-colum card-branco notificacoes'>
                            <h2> Novas Mensagens </h2>
                        </div>

                        <div className='container-column card-branco notificacoes'> 
                            <h2> Notificações </h2>
                        </div>
                    </article>

                </section>
            </div>

            {/* <div style={{ height: '4rem' }} />
        <div className='profile__background-color'>
            <button onClick={click} id='desconectar'>Encerrar sessão</button>
        </div> */}
    </StyledProfile>
    )
}