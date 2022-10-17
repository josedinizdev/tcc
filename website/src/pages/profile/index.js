import React from 'react';
import storage from 'local-storage';
import StyledProfile from './styles.js';
import { Link, Navigate } from 'react-router-dom';

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
        <StyledProfile>
            
                <h1>
                    Bem vindo de volta!! 
                </h1>
                <div>
                    <h4> David Ribeiro </h4>
                    <p>Sou profissional da categoria Web,trabalho na aréa a mais de 6 meses,procuro resolver tudo ao meu alcance.
                    </p>
                </div>
             
                {/* <div> 
                    <Link to = '/conversas'> Conversas </Link>
                </div>  */}
                
                
                {/* <div> 
                    <Link to = '/'> Pesquisar Usuarios </Link>
                </div>  */}


                {/* <div> 
                    <Link to = '/servicos'> Meus Serviços </Link>
                </div>  */}


                <div>
                    <h3> 
                        Novas Mensagens 
                    </h3>
                <div>
                    <h4> José</h4>
                    <p> Manda as fotos do projet...</p>
                </div>
                <div>
                    <h4> David </h4>
                    <p> Finalizando Projeto!</p>
                </div>


                <div> 
                    <h3> 
                        Notificações
                    </h3>

                    <div> 
                        <h4> Análise de sistema</h4>
                        <p>Seu serviço foi aceito!</p>
                    </div>

                    <div> 
                        <h4> Análise de sistema </h4>
                        <p> Seu serviço foi recusado! </p> 
                    </div>

                    <div> 
                        <h4> João Vitor </h4>
                        <p> Se ofereceu para seu serviço Site de Padoca </p>
                    </div>
                </div>


                </div>


            <div style={{ height: '4rem' }} />
        <div className='profile__background-color'>
            <button onClick={click} id='desconectar'>Encerrar sessão</button>
        </div>
    </StyledProfile>
    )
}