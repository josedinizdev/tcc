import '../../../pages/admin/contatos/styles.js'
import MensagemIcon from '../../../assets/images/historico-icon.png'
import PerfilIcon from '../../../assets/images/perfil-icon.png'
import DeletarIcon  from '../../../assets/images/deletar-icon.png'


export default function ContatoCardCarrousel(props) {
    return(
        <div className='container-column al-center carrousel-card'>
            <img className='imgPerfil' src={props.userProfile} alt=''/>
            <h2> {props.nome} </h2>

            <div className='container jc-between w100'>
                <img className='icon' src={MensagemIcon} alt=''/>
                <img className='icon' src={PerfilIcon} alt=''/>
                <img className='icon' src={DeletarIcon} alt=''/>
            </div>
        </div>
    )
}