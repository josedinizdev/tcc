import { Link } from 'react-router-dom'
import '../styles.scss'
import User from '../../../assets/images/perfil.png'
import EditIcon from '../../../assets/images/editar-icon.png'
import FerramentasIcon from '../../../assets/images/ferramentas-icon.png'
import HistoricoIcon from '../../../assets/images/historico-icon.png'
import ContatoIcon from '../../../assets/images/contato-icon.png'
import SairIcon from '../../../assets/images/sair-icon.png'


export default function AdmAndamentoPage() {
    return(
        <main className="container wh100v b5551E3 jc-center al-center">
            <section className="container cinza-card">
                <section className="container-column profile"> { /* Perfil */ }
                    <article className="container-column card-branco"> 
                        <div className="container jc-between">  { /* Nome, Perfil e cargo */ }
                            <img src={User} alt="perfil" />
                            <img className='container icon editar jc-end al-end' src={EditIcon} alt="editar" />

                            <div className="container-column">
                                <h2> David Ribeiro </h2>
                                <p> Programador Sênior</p>
                            </div>
                        </div>  { /* Nome, Perfil e cargo */ }

                        <div className="container-column habilidades">
                            <h2> Habilidade </h2>
                            <p>     
                                Designer UX/UL
                                Desenvolvedor de Software
                                Desenvolvedor Web
                                HTML & CSS Avançado
                            </p>
                        </div>
                    </article> 

                    <nav className="container-column">
                        <div className='card-branco  '>
                            <Link to='' className='container al-center'> 
                                <img className='icon ' src={FerramentasIcon} alt='' />
                                <p> Administrar Serviços </p>
                            </Link>

                            <Link to='' className='container al-center'> 
                                <img className='icon' src={HistoricoIcon} alt='' />
                                <p> Histórico </p>
                            </Link>

                            <Link to='' className='container al-center'> 
                                <img className='icon' src={ContatoIcon} alt='' />
                                <p> Contatos </p>
                            </Link>
                        </div>

                        <div >
                            <button className='container al-center jc-cente bFFFFFF'> 
                                <img className='icon' src={SairIcon} alt='' />
                                Encerrar Sessão
                            </button>
                        </div>
                    </nav>
                </section>

                <div c/> { /* Linha */ }
 
                <section className='container al-center servico'> { /* Serviços */ }
                    <nav className='container al-center card-branco jc-between'>
                        <h2> Projetos em Andamento </h2>
                        <div className='container'>
                            <input type='text' placeholder='Pesquisar' />
                            <img src='' alt='lupa'/>
                        </div>
                    </nav>
                </section>

            </section>
        </main>
    )
}