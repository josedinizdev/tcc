import StyledFooter from './styles.js'

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

                <div className='linha'/>

                <div className='container al-center jc-around'>
                    <h2> Sempre com você, o problema apareceu, conte conosco </h2>
                    
                    <div className='container-column'>
                        <img className='icon-contato' src='/img/footer/facebook-icon.svg' alt='facebook' />
                        <img className='icon-contato' src='/img/footer/instagram-icon.svg' alt='instagram' />
                        <img className='icon-contato' src='/img/footer/twitter-icon.svg' alt='twitter' />
                        <img className='icon-contato' src='/img/footer/linkedin-icon.svg' alt='linkedin' />
                    </div>
                </div>
            </section>

            {/* <section>
                <div>
                    <div>
                        <img src='' alt='withu-logo' />
                    </div>

                    <div>
                        <h1> Contatos </h1>
                        <div> 
                            <img src='' alt='telefone-icon' />
                            <p> (11) 4002-8922 </p>
                        </div> 
                        
                        <div> 
                            <img src='' alt='local-icon' />
                            <p> 
                                (11) Av. Coronel Octaviano de Freitas Costa, 463 - 
                                Socorro, São Paulo - SP, 04773-000 
                            </p>
                        </div>

                        <div> 
                            <img src='' alt='email-icon' />
                            <p>  withu@outlook.com </p>
                        </div> 
                    </div>
                </div>

                <div>
                    <form> 
                        <label> Deixe sua avaliação: </label>
                        <button> Enviar </button>
                        <input type='textarea' />
                    </form>
                </div>
            </section> */}
        </StyledFooter>
    )
}