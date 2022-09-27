import './styles.js'
import StyledHeaderBar from './styles.js'

 function HeaderBar() {
    return(
        <StyledHeaderBar>
            <body className='container jc-between al-center'>
                <div>
                    <img src='/img/withu-logo.png' alt='' />
                    <img src="/img/logo-white.png" />
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