import MensagemIcon from '../../../assets/images/historico-icon.png'
import PerfilIcon from '../../../assets/images/perfil-icon.png'
import DeletarIcon  from '../../../assets/images/deletar-icon.png'
import StyledContatoCard from './styles'


export default function ContatoCard(props) {
    return(
        <StyledContatoCard className='container al-center jc-between'>
            <div className='container al-center'>
                <img className='imgPerfil' src={props.userProfile} alt=''/>
                <h2> {props.nome} </h2>
            </div>

            <div className='container-column '>
                <img className='pointer' src={MensagemIcon} alt=''/>
                <img className='pointer' src={PerfilIcon} alt=''/>
                <img className='pointer' src={DeletarIcon} alt=''/>
            </div>
        </StyledContatoCard>
    )
}