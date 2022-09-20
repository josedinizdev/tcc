import './styles.js'
import StyledHeaderBar from './styles.js'

export default function HeaderBar() {
    return(
        <StyledHeaderBar>
            <body className='container jc-between al-center'>
                <div>
                    <img src='/img/withu-logo.png' alt='' />
                    <im classname='withu-logo' src='/img/logo-white.png' alt=''/>
                </div>

                <div>
                    <a href='/a'> Página Inicial </a>
                    <a href='/b'> Serviços </a>
                    <a href='/c'> Suporte </a>
                    <a href='/d'> Sobre </a>
                    <a href='/e'> Perfil </a>

                </div>
            </body> 

            <div>

            </div>
        </StyledHeaderBar>
    )   
}