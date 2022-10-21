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
            
               


            <div style={{ height: '4rem' }} />
        <div className='profile__background-color'>
            <button onClick={click} id='desconectar'>Encerrar sessão</button>
        </div>
    </StyledProfile>
    )
}