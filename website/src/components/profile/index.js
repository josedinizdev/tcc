import FerramentasIcon from '../../assets/images/ferramentas-icon.png'
import HistoricoIcon from '../../assets/images/historico-icon.png'
import ContatoIcon from '../../assets/images/contato-icon.png'
import SairIcon from '../../assets/images/sair-icon.png'
import NavAdm from './nav'
import StyledProfile from './styles'

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

                <h2> Habilidades </h2>
                <p> Habilidades
                    {props.habilidades}
                 </p>
            </article>

            <NavAdm link1='Administrar Serviços'
                    link2='Histórico'
                    link3='Contatos'
                    
                    icon1={FerramentasIcon}
                    icon2={HistoricoIcon}
                    icon3={ContatoIcon} />

            <nav className='container jc-end al-end card-branco'>
                <button className='container pointer al-center jc-start'> 
                    <img src={SairIcon} alt='' />
                    Encerrar Sessão
                </button>
            </nav>
        </StyledProfile>
    )   
} 