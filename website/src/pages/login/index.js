import StyledLogin from "./styles.js";
import { Background } from "../register/styles.js";
import { Link } from "react-router-dom";

export default function Login() {
    return(
        <StyledLogin className='container wh100v'>
            <Background className='container-column w50 h100'>
                <img src='/img/withu-logo.png'/>
                <h1>Bem vindo(a) ao...</h1>
                <p className='conteudo'>Sempre com você. O problema apareceu, conte conosco</p>
            </Background>
            <div className='container-column w50 h100 padding'>
                <h2 className='uppercase login'>login</h2>
                <p className="desc">- Comece aqui sua aventura!</p>
                <form className='container-column' action=''>
                    <label className='obrigatory' htmlFor=''>E-Mail</label>
                    <input type='text' />
                    <label htmlFor='' className='obrigatory'>Senha</label>
                    <input type='text' />
                </form>
                <button>Login</button>
                <div className='container jc-between converter'>
                    <p>Novo usuário?</p>
                    <Link to='/cadastro'> <span> Login </span> </Link>
                </div>
            </div>
        </StyledLogin>
     )
}