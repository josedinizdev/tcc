import React from 'react';
import StyledAbout from './styles'
import EstudandoBackground from '../../assets/images/estudando-background.png'

export default function Sobre() {
    return(
        <StyledAbout className='container-column wh100v'>
             <header className='container'>  
                <div className='container-column header-black jc-center al-center w50p b242424 '>
                    <div className='jc-start lEsquerdo-margin'>
                        <h2 className='cFFFFFF code-semibold'> - bem vindo(a) </h2>
                        <img className='withu' src='/img/logo-white.png' alt='WITHU' />
                        <p className='cFFFFFF'> Sempre com você, o problema apareceu, conte conosco </p>
                    </div>
                </div>

                <div className='container w50p'>
                    <img className='background' src={EstudandoBackground} alt='background'/>
                </div>
            </header>

            <section className='container al-center jc-center'>
                <div className='container cinza-card jc-between'>
                    <p> 
                        Withu foi criada em 26/08/2022  como uma ideia de ajudar os  pais  freelancers  da equipe,
                        logo essa ideia se tornou algo mais, então decidimos  fundar uma empresa para ajudar melhor
                        a comunicação, divulgação e solicitação de serviços, onde todos podem começar ou continuar seus
                        projetos e pedidos de melhor maneira. 
                    </p>
                    <p className='texto2'> 
                        O primeiro a  busca levar o melhor desenvolvimento dos freelancers e de seus projetos, assim como
                         melhorara busca de serviços foi o membro de liderança José Diogo. 
                    </p>
                </div>
            </section>
        </StyledAbout>
    )
}