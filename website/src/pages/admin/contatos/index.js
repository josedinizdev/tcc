import { Link } from 'react-router-dom'
import '../styles.scss'
import User from '../../../assets/images/perfil.png'
import ProfileCard from '../../../components/profile'
import LupaIcon from '../../../assets/images/lupa-icon.png'
import StyledContatos from './styles'
import ContatoCardCarrousel from '../../../components/profile/contatoCard'
import SetinhaEsquerda from '../../../assets/images/setinha-carrousel-contato.png'
import SetinhaDireita from '../../../assets/images/setinha-carrousel-contato2.png'
import { useState } from 'react'


export default function AdmContatosPage() {
    const [contatos, setContatos] = useState([]);

    return(
        <StyledContatos className="container wh100v b5551E3 jc-center al-center">
            <section className="container cinza-card">
                <ProfileCard userProfile={User}
                             nome='David Douglas'
                             cargo='Desenvolvedor Sênior'
                             habilidades='   Designer UX/UL   Desenvolvedor de Software   Desenvolvedor Web   HTML & CSS Avançado'/>

                 <div className='linha'/> { /* Linha */ }

                <nav className='container-column'>
                    <div className='container jc-between'> { /* bla bla bla */}
                        <h1> Contatos </h1>

                        <div className="container al-center"> 
                            <input type='text'  placeholder="Pesquisar"/>
                            <button className="b7370FF pointer btn3rem"> 
                                <img src={LupaIcon} alt='' />
                            </button>
                        </div>
                    </div>
                    
                    <div className='container carrousel'>
                        <div className='container contatoCard pad1r jc-center'>
                            <ContatoCardCarrousel userProfile={User} nome='David Ribeiro' />
                            <ContatoCardCarrousel userProfile={User} nome='David Ribeiro' />
                            <ContatoCardCarrousel userProfile={User} nome='David Ribeiro' />
                            <ContatoCardCarrousel userProfile={User} nome='David Ribeiro' />

                        </div>
                    </div>
                </nav>
            </section>
        </StyledContatos>
    )
}