import storage from 'local-storage';
import { useNavigate } from 'react-router-dom'
import User from '../../../assets/images/perfil.png'
import ProfileCard from '../../../components/profile'
import TableCard from '../../../components/table'
import { useEffect } from 'react'
    
export default function AdmAndamentoPage() {
    const navigate = useNavigate()

    useEffect(_ => {
        if (!storage('worker'))
            navigate('/perfil/editar');
    }, [])

    return(
        <main className="container wh100v b5551E3 jc-center al-center">
            <section className="container cinza-card resolutionAdm">
                <ProfileCard userProfile={User}
                             nome='David Douglas'
                             cargo='Desenvolvedor Sênior'
                             habilidades='   Designer UX/UL   Desenvolvedor de Software   Desenvolvedor Web   HTML & CSS Avançado'/>
                 <div className='linha'/>
                <TableCard h1='Projetos em Andamento'/>
            </section>
        </main>
    )
}