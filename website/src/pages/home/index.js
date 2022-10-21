import React from 'react';
import { Link } from 'react-router-dom';
import StyledHome from './styles';
import StyledJuntar from '../../components/juntarse/styles';

export default function Home() {
    return (
        <StyledHome>
            <header className='container'>  
                <div className='container-column header-black al-center jc-center'>
                    <div className='jc-start'>
                        <h2 className='cFFFFFF code-semibold'> - bem vindo(a) </h2>
                        <img src='/img/logo-white.png' alt='WITHU' />
                        <p className='cFFFFFF'> Sempre com você, o problema apareceu, conte conosco </p>
                    </div>
                </div>

                <div className='container-column header-img header-orange al-end jc-end'>
                    <div className='jc-start espacamento'>
                        <h2 className='cFFFFFF'> - introdução </h2>
                        <h1 className='cFFFFFF'> Empresa de freelancer para oferecer tudo que precisar </h1>
                        <p className='cFFFFFF p2'> Sempre oferecendo os melhores serviços para você e sua família. </p>
                    </div>
                </div>     
            </header>

            <section className='faixa1 container jc-center al-center'> {/* Faixa 1 */}  
                <div className='container cinza-card'>
                    <div className='container-column'> 
                        <h1 className='c1E4F6F'> Qualquer tipo de pergunta ou assunto </h1>
                        <p> 
                            Estamos sempre abertos a sugestões e perguntas, independente de sua dúvida, 
                            vamos ter comprometimento em atender o que você precisa.
                        </p>
                        <div> <button className='botao-contato pointer'> Entre em contato </button> </div>
                    </div>

                    <div className='container-column'> 
                        <h1 className='c1E4F6F w70'> A Empresa que prioriza o cliente e sua satisfação </h1>
                        <p className='w60'> 
                        Vamos sempre estar em busca de oferecer nossos melhores serviços, 
                        e estamos sempre abertos a sugestões.
                        </p>
                        <div> <button className='pointer'> Envie uma avaliação </button> </div>
                    </div>
                </div>
            </section>


            <section className='container w100 faixa2'> {/* Faixa 2 */} 
                    <div className='trabalho-juntar'>
                            <h2 className='cFFFFFF'> - conheça mais </h2>
                            <h1> Em busca de trabalhar com o que quiser? </h1>
                            <p className='cFFFFFF'> Aqui você pode começar diretamente da sua casa! </p>

                            <div className='container jc-end al-end'> 
                                <Link to='/perfil'> <button className='cFFFFFF'> Junte-se </button> </Link>
                            </div>
                        </div>

                        <div className='img' /> 
            </section>

            <section className='container w100 faixa4 bEF7601 jc-center al-center'> {/* Faixa 4 */} 
                <div className='container-column cinza-card'> {/* Background-Card */}
                    
                    <div className='container-column'> {/* Titulo */}
                        <h2> - valores </h2>
                        <h1> O maior do mercado </h1>
                    </div>

                    <div className='container jc-around'> {/* Confiabilidade, Qualidade e Valores */}

                        <div className='container-column al-center'> {/* Confiabilidade */}
                            <span> 1 </span> 

                            <div className='container al-center'> {/* Confiabilidade e Verificado */}
                                <h1 className='uppercase'> Confiabilidade </h1>           
                                <img src='/img/verificado.png' alt='verificado' />
                            </div>

                            <p> Estamos sempre garantindo que seu serviço seja feita corretamente </p>
                        </div>

                        <div className='container-column al-center'> {/* Qualidade */}
                            <span> 2 </span> 

                            <div className='container al-center'> {/* Qualidade e Verificado */}
                                <h1 className='uppercase'> Qualidade </h1>                 
                                <img src='/img/verificado.png' alt='verificado' />
                            </div>
                            
                            <p> Todos os nossos serviços são oferecidos de maneira simples e com qualidade única </p>
                        </div>

                        <div className='container-column al-center'> {/* Valores */}
                            <span> 3 </span> 

                            <div className='container al-center'> {/* Valores e Verificado */}
                                <h1 className='uppercase'> Valores </h1>
                                <img src='/img/verificado.png' alt='verificado' />
                            </div>
                            
                            <p> Realizamos doações a empresas e organizações que procuram melhoras mundiais </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className='container w100 faixa6 bEF7601 al-center jc-center'> {/* Faixa 6 */}
                <div className='container-column cinza-card'>
                    <h2> - liderança </h2>

                    <div className='container jc-around'>
                        <div className='container-column jc-center al-center'>
                            <img src='/img/diretores/diretor-ceo.png' alt='CEO' />
                            <h3> José Diniz </h3> 
                            <p> Diretor Executivo (CEO) </p>
                        </div>

                        <div className='container-column jc-center al-center'>
                            <img src='/img/diretores/diretor-coo.png' alt='COO' />
                            <h3> David Ribeiro </h3> 
                            <p> Diretor de Operações (COO) </p>
                        </div>

                        <div className='container-column jc-center al-center'>
                            <img src='/img/diretores/diretor-cmo.png' alt='CMO' />
                            <h3> João Silva </h3> 
                            <p> Diretor de TI (CMO) </p>
                        </div>

                        <div className='container-column jc-center al-center'>
                            <img src='/img/diretores/diretora-cio.png' alt='CIO' />
                            <h3> Camilly Costa </h3> 
                            <p> Diretora de Marketing (CIO) </p>
                        </div>
                    </div>
                </div>
            </section>  
        </StyledHome>
    )
};