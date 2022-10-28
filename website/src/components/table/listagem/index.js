import '../styles.js'
import RemoverIcon from '../../../assets/images/remover-icon.png'

export default function ListarServicosTable(props) {
    return(
        <tr className="container jc-between al-center">
            <div className="container-column"> 
                <td className='titulo'> {props.titulo} </td>
                <td> {props.categoria} </td>
            </div>

            <td> <span className='pointer'> Ver mais detalhes >> </span> </td>
            <td className='pointer'> <img src={RemoverIcon} alt='' /> </td>
            <div className="container-column"> 
                <td className='titulo'> {props.data} </td>
                <td> {props.usuario} </td>
            </div>
        </tr>
    )
}