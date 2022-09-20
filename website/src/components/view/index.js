import './styles.js'
import StyledHeaderBar from './styles.js'

export default function HeaderBar() {
    return(
        <StyledHeaderBar>
            <body className='container jc-between al-center'>
                <div>
                    <img src='/img/withu-logo.png' />
                    <im classname='withu-logo' src='/img/logo-white.png' />
                </div>

                <div>
                    <a href=''> Página Inicial </a>
                    <a href=''> Serviços </a>
                    <a href=''> Suporte </a>
                    <a href=''> Sobre </a>
                    <a href=''> Perfil </a>

                </div>
            </body> 

            <div>

            </div>
        </StyledHeaderBar>
    )   
}