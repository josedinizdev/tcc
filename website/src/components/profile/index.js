import FerramentasIcon from '../../assets/images/ferramentas-icon.png'
import HistoricoIcon from '../../assets/images/historico-icon.png'
import ContatoIcon from '../../assets/images/contato-icon.png'
import SairIcon from '../../assets/images/sair-icon.png'
import NavAdm from './nav'
import NavNormal from './navNormal'
import LupaIcon from '../../assets/images/lupa-icon.png'
import StyledProfile from './styles'
import EditIcon from '../../assets/images/editar-icon.png'
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
                <NavNormal link1='Conversas'
                    link2='Pesquisar Usuários'
                    link3='Meus Serviços'
                    icon1={HistoricoIcon}
                    icon2={LupaIcon}
                    icon3={FerramentasIcon} />
            )}
            {!props.normal && (
                <NavAdm link1='Administrar Serviços'
                    link2='Histórico'
                    link3='Voltar'
                    icon1={FerramentasIcon}
                    icon2={HistoricoIcon}
                    icon3={ContatoIcon} />
            )}
            <nav className='container jc-start al-end card-branco nav-linkar'>
                <button id='desconectar' onClick={props.desconectar} className='container pointer al-center jc-start'> 
                    <img src={SairIcon} alt='' />
                    Encerrar Sessão
                </button>
            </nav>
        </StyledProfile>
    )   
} 