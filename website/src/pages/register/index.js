import { useState, useEffect } from 'react';
import StyledRegister, {
    BackgroundDiv
} from "./styles.js";
import { Link } from "react-router-dom";
import Toast from "../../components/toast/index.js";
import { delay } from '../../services.js';

export default function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [nasc, setNasc] = useState();
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const [err, setErr] = useState('');

    useEffect(_ => {
        delay(5000).then(_ => setErr(''))
    }, [err])

    return(
        <StyledRegister className='container wh100v'>
            <BackgroundDiv className='container w50 h100'>
                <div className='container whf'>
                    <Link to='/'> <img className='register__logo' src='/img/withu-logo.png' alt=''/> </Link>
                </div>
                <div className="container-column">
                    <h1 className='cFFFFFF'>Seja bem vindo(a) á WITHU</h1>
                    <p className='cFFFFFF subtitle-h1'>Sempre com você. O problema apareceu, conte conosco</p>
                </div>
            </BackgroundDiv>
            <div className='container-column w50 h100 al-center h100'>
                <div className="container-column jc-between h100">
                    <div className='container-column'>
                        <h2 className='uppercase code-bold'>cadastrar</h2>
                        <p className='code-semibold'>- Comece aqui sua aventura!</p>
                    </div>
                    <form className='container-column register__form' action=''>
                        <label className='obrigatory' htmlFor=''>Nome completo</label>
                        <input value={nome} onChange={e => setNome(e.target.value)} type='text' />
                        <label className='obrigatory' htmlFor=''>E-Mail</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type='text' />
                        <label className='obrigatory' htmlFor=''>Data de nascimento</label>
                        <input value={nasc} onChange={e => setNasc(e.target.value)} type='date' />
                        <label className='obrigatory' htmlFor=''>Senha</label>
                        <input value={senha} onChange={e => setSenha(e.target.value)} type='password' />
                        <label className='obrigatory' htmlFor=''>Confirmar senha</label>
                        <input value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} type='password' />
                    </form>
                    <div>
                        <button className='register__button'>Cadastrar</button>
                        <div className='container'>
                            <p>Já possui um login? <Link to='/login'><span className="blue">Login</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
            {err !== '' &&(<Toast err={err}></Toast>)}
        </StyledRegister>
     )
}