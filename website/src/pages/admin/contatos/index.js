import User from '../../../assets/images/perfil.png'
import ProfileCard from '../../../components/profile'
import StyledContatos from './styles'
import ContatoCard from '../../../components/profile/contatoCard'

export default function AdmContatosPage() {
    return(
        <StyledContatos className="container wh100v b5551E3 al-center jc-center">
            <section className='container cinza-card resolutionAdm' >
                <div>
                    <ProfileCard userProfile={User}
                                nome='David Douglas'
                                cargo='Desenvolvedor Sênior'
                                habilidades='   Designer UX/UL   Desenvolvedor de Software   Desenvolvedor Web   HTML & CSS Avançado'/>
                </div>

                <div className='linha'> </div>

                <div className='container-column contatos-container'>
                    <div className='card-branco jc-center margin1r'>
                        <h1> Contatos </h1>
                    </div>

                    <div className='container al-center card-branco scroll'>
                        <div className='container containerCards'>
                            <ContatoCard userProfile={User}
                                            nome='Fábio Santana'/>
                            <ContatoCard userProfile={User}
                                            nome='Fábio Santana'/>
                                                                        <ContatoCard userProfile={User}
                                            nome='Fábio Santana'/>
                            <ContatoCard userProfile={User}
                                            nome='Fábio Santana'/>
                                                                        <ContatoCard userProfile={User}
                                            nome='Fábio Santana'/>
                            <ContatoCard userProfile={User}
                                            nome='Fábio Santana'/>
                                                                        <ContatoCard userProfile={User}
                                            nome='Fábio Santana'/>
                            <ContatoCard userProfile={User}
                                            nome='Fábio Santana'/>
                        </div>
                    </div>

                </div>
            </section>
        </StyledContatos>
    )
}


{/* <ProfileCard userProfile={User}
                             nome='David Douglas'
                             cargo='Desenvolvedor Sênior'
                             habilidades='   Designer UX/UL   Desenvolvedor de Software   Desenvolvedor Web   HTML & CSS Avançado'/> */}