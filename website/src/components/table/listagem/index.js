import '../styles.js';
import ConcluirIcon from '../../../assets/images/concluir-icon.svg'
import { Concluir } from '../../../api/servicos.js';

export default function ListarServicosTable(props) {
    return(
        <tr className="container jc-between al-center">
            <div className="container-column"> 
                <td className='titulo'> {props.titulo} </td>
                <td> {props.categoria} </td>
            </div>
                <td> <span className='pointer' onClick={_ => props.detalhes(props.id)}> Ver mais detalhes >> </span> </td>
            <td className='pointer'> <img src={ConcluirIcon} onClick={async _ => {
                await Concluir(props.id)
                window.location.reload(true)
            }} alt='concluirIcon' /> </td>
            <div className="container-column"> 
                <td className='titulo'> {props.data} </td>
                <td> {props.usuario} </td>
            </div>
        </tr>
    )
}