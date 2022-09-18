import StyledLogin, {
    BackgroundDiv
} from "./styles.js";
import { Link } from "react-router-dom";

export default function Login() {
    return(
        <StyledLogin className='container wh100v'>
            <BackgroundDiv className='container w50 h100'>
                <div className='container whf'>
                    <img className='login__logo' src='/img/withu-logo.png' alt=''/>
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
                        <input type='text' />
                        <label className='obrigatory' htmlFor=''>Senha</label>
                        <input type='text' />
                    </form>
                    <div>
                        <button className='login__button'>Login</button>
                        <div className='container'>
                            <p>Novo usuário? <Link to='/cadastro'><span>Login</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </StyledLogin>
     )
}