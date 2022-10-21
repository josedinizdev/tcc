import StyledFooter from './styles.js'
import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <StyledFooter className='container-column'>
            <section className='container jc-around'>
                <div className='container-column sobre'>
                    <h1> Sobre nós </h1>
                    <p> 
                        Withu foi criada em 26/08/2022  como uma ideia de ajudar os  pais  freelancers  da equipe, 
                        logo essa ideia se tornou algo mais, então decidimos  fundar uma empresa para ajudar melhor
                        a comunicação, divulgação e solicitação de serviços, onde todos podem começar ou continuar
                        seus projetos e pedidos de melhor maneira.
                    </p>
                </div>

                <div className='linha al-center'/>

                <div className='container al-center jc-around'>
                    <h2> Sempre com você, o problema apareceu, conte conosco </h2>
                    
                    <div className='container-column'>
                        <Link to='/https://www.facebook.com/profile.php?id=100087019570457'     className='container icon-contato jc-center al-center'>  <img src='/img/footer/facebook-icon.svg' alt='facebook' />  </Link>
                        <Link to='/https://twitter.com/WithuEnterprise'                         className='container icon-contato jc-center al-center'>  <img src='/img/footer/instagram-icon.svg' alt='instagram' />  </Link>
                        <Link to='/'                                                            className='container icon-contato jc-center al-center'>  <img src='/img/footer/twitter-icon.svg' alt='twitter' />  </Link>
                        <Link to='/https://www.linkedin.com/in/withu-enterprise-092391254/'         className='container icon-contato jc-center al-center'>  <img src='/img/footer/linkedin-icon.svg' alt='linkedin'/>  </Link>
                    </div>
                </div>
            </section>

            <div className='linha jc-center'/>

            <section className='container jc-between'>
                <div className='container al-center'>
                    <img className='withu-logo' src='/img/withu-logo.png' alt='withu-logo' />

                    <div className='container-column'>
                        <h1> Contatos </h1>
                        <div className='container contato'> 
                            <img className='telefone-icon' src='/img/footer/telefone-icon.png' alt='telefone-icon' />
                            <p> (11) 4002-8922 </p>
                        </div> 
                        
                        <div className='container contato'> 
                            <img className='endereco-icon' src='/img/footer/endereco-icon.png' alt='local-icon' />
                            <p> 
                                Av. Coronel Octaviano de Freitas Costa, 463 - 
                                Socorro, São Paulo - SP, 04773-000 
                            </p>
                        </div>

                        <div className='container contato'> 
                            <img src='/img/footer/email-icon.png' alt='email-icon' />
                            <p>  enterprise.withu@outlook.com </p>
                        </div> 
                    </div>
                </div>

                <form className='container-column'>
                    <div className='container jc-between al-end'> 
                        <label className='cFFFFFF'> Deixe sua avaliação: </label>
                        <button className='cFFFFFF pointer'> Enviar </button>
                    </div>
                        <input className='cFFFFFF' type='textarea' />
                </form>
            </section>
        </StyledFooter>
    )
}