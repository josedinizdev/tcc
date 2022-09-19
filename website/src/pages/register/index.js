import React from 'react';
import { Link } from 'react-router-dom';
import StyledRegister, { Background } from './styles';

export default function Register() {
    return (
        <StyledRegister className='container wh100v'>
            <Background className='container-column w50 h100'>
                <img src='/img/withu-logo.png' alt=''/>
                <h1>Bem vindo(a) ao...</h1>
                <p>Sempre com você. O problema apareceu, conte conosco</p>
            </Background>
            <div className='container-column w50 h100'>
                <h2 className='uppercase'>cadastrar</h2>
                <p>- Comece aqui sua aventura!</p>
                <form className='container-column' action=''>
                    <label className='obrigatory' htmlFor=''>Nome Usuário</label>
                    <input type='text' />
                    <label className='obrigatory' htmlFor=''>E-Mail</label>
                    <input type='text' />
                    <label htmlFor='' className='obrigatory'>Data de Nascimento</label>
                    <input type='date' />
                    <label htmlFor='' className='obrigatory'>Senha</label>
                    <input type='text' />
                    <label htmlFor='' className='obrigatory'>Confirmar senha</label>
                </form>
                <button>Cadastrar</button>
                <div className='container jc-between w100'>
                    <p>Já possui um login?</p>
                    <Link to='/login'> <span> Login </span> </Link>
                </div>
            </div>
        </StyledRegister>
    )
};

export {Background}