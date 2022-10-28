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
        <StyledContatos className="container b5551E3 al-center jc-center">
            <section className='container contato-page pad1r' >
                <div>
                    <ProfileCard userProfile={User}
                                nome='David Douglas'
                                cargo='Desenvolvedor Sênior'
                                habilidades='   Designer UX/UL   Desenvolvedor de Software   Desenvolvedor Web   HTML & CSS Avançado'/>
                </div>

                <div className='linha'> </div>

                <div className='container-column card-branco contatos'>
                    <h1> Contatos </h1>
                </div>
            </section>
        </StyledContatos>
    )
}


{/* <ProfileCard userProfile={User}
                             nome='David Douglas'
                             cargo='Desenvolvedor Sênior'
                             habilidades='   Designer UX/UL   Desenvolvedor de Software   Desenvolvedor Web   HTML & CSS Avançado'/> */}