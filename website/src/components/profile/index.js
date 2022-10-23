import FerramentasIcon from '../../assets/images/ferramentas-icon.png'
import HistoricoIcon from '../../assets/images/historico-icon.png'
import ContatoIcon from '../../assets/images/contato-icon.png'
import SairIcon from '../../assets/images/sair-icon.png'
import NavAdm from './nav'
import NavNormal from './navNormal'
import StyledProfile from './styles'
import { Link } from 'react-router-dom'

export default function ProfileCard(props) {
    return(
        <StyledProfile>
            <article className='container-column card-branco pad1r'>
                <div className='container'>
                    <img src={props.userProfile} alt=''/>
                    <div>
                        <h2> {props.nome} </h2>
                        <p> {props.cargo}</p>
                    </div>
                </div>
                <h2> Sobre </h2>
                <p>{props.habilidades}</p>
                <Link to='/perfil/editar'>Editar Perfil</Link>
            </article>
            {props.normal && (
                <NavNormal link1='Página Inicial'
                    link2='Pesquisar Usuários'
                    link3='Administrar Serviços'
                    icon1={FerramentasIcon}
                    icon2={HistoricoIcon}
                    icon3={ContatoIcon} />
            )}
            {!props.normal && (
                <NavAdm link1='Administrar Serviços'
                    link2='Histórico'
                    link3='Voltar'
                    icon1={FerramentasIcon}
                    icon2={HistoricoIcon}
                    icon3={ContatoIcon} />
            )}
            <nav className='container jc-end al-end card-branco'>
                <button id='desconectar' onClick={props.desconectar} className='container pointer al-center jc-start'> 
                    <img src={SairIcon} alt='' />
                    Encerrar Sessão
                </button>
            </nav>
        </StyledProfile>
    )   
} 