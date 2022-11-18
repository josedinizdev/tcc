import { useState, useEffect, useRef } from "react";
import StyledLogin, {
    BackgroundDiv
} from "./styles.js";
import LoadingBar from 'react-top-loading-bar';
import storage from 'local-storage';
import { isWorker, LoginUsuario } from "../../api/user.js";
import { Link, useNavigate } from "react-router-dom";
import Toast from "../../components/toast/index.js";
import { delay } from '../../services.js';
import { toast } from "react-toastify";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregar, setCarregar] = useState(false);
    const navigate = useNavigate();
    const ref = useRef();

    useEffect(_ => {
        if (storage('usuario-logado'))
            navigate('/perfil');
    }, {})

    async function Logar() {
        ref.current.continuousStart();
        setCarregar(true);
        try {
            const resp = await LoginUsuario(email, senha);
            console.log(resp)
            storage('usuario-logado', resp)
            try {
                const worker = await isWorker(storage('usuario-logado').id)
                console.log(worker)
                if (typeof worker.id !== 'undefined')
                    storage('worker', worker)
            } catch (err) {
                console.log(err)
            }
            setTimeout(() => {
                navigate('/perfil');
                toast('Usuario logado!')
            }, 2000)
        }
        catch(err) {
            ref.current.complete()
            setCarregar(false)
            toast(err.message)
        }   
    }

    return(
        <StyledLogin className='container wh100v z1 relative'>
            <BackgroundDiv className='container w50 h100'>
                <div className='container whf'>
                    <Link to='/'> <img className='login__logo' src='/img/withu-logo.png' alt=''/> </Link>
                </div>
                <div className="container-column">
                    <h1 className='cFFFFFF'>Seja bem vindo(a) á WITHU</h1>
                    <p className='cFFFFFF subtitle-h1'>Sempre com você. O problema apareceu, conte conosco</p>
                </div>
            </BackgroundDiv>
            <div className='container-column w50 h100 al-center h100'>
                <div className="container-column jc-between h100">
                    <div className='container-column'>
                        <h2 className='uppercase code-bold'>login</h2>
                        <p className='code-semibold'>- Comece aqui sua aventura!</p>
                    </div>
                    <form className='container-column login__form' action=''>
                        <label className='obrigatory' htmlFor=''>E-Mail</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type='text' />
                        <label className='obrigatory' htmlFor=''>Senha</label>
                        <input value={senha} onChange={e => setSenha(e.target.value)} type='password' />
                    </form>
                    <div>
                        <button className='login__button' onClick={Logar} disabled={carregar}>Login </button>
                        <div className='container'>
                            <p>Novo usuário? <Link to='/cadastro'> <span className="blue">Cadastro</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <LoadingBar color="#456426" ref={ref} />
        </StyledLogin>
     )
}