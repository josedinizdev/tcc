import { Link } from 'react-router-dom'
import '../styles.scss'
import User from '../../../assets/images/perfil.png'
import ProfileCard from '../../../components/profile'
import TableCard from '../../../components/table'


export default function AdmHistoricoPage() {
    return(
        <main className="container wh100v b5551E3 jc-center al-center">
            <section className="container cinza-card resolutionAdm">
                <ProfileCard userProfile={User}
                             nome='David Douglas'
                             cargo='Desenvolvedor Sênior'
                             habilidades='   Designer UX/UL   Desenvolvedor de Software   Desenvolvedor Web   HTML & CSS Avançado'/>

                 <div className='linha'/> { /* Linha */ }
                 
                <TableCard h1='Histórico'/>
            </section>
        </main>
    )
}