import StyledTable from "./styles";
import LupaIcon from '../../assets/images/lupa-icon.png'
import ListarServicosTable from "./listagem";

export default function TableCard(props) {
    return(
        <StyledTable className="container-column jc-center">
            <nav className="container al-center card-branco jc-between"> 
                <h1> {props.h1} </h1>

                <div className="container"> 
                    <input type='text'  placeholder="Pesquisar"/>
                    <button className="b7370FF pointer"> 
                        <img src={LupaIcon} alt='' />
                    </button>
                </div>
            </nav>

            <table className="card-branco"> 
                <tbody className="container-column">
                    <ListarServicosTable titulo='Prestação de serviço'
                                         categoria='Desenvolvimento Web'
                                         data='21/08/2022'
                                         usuario='David Douglas' />

                    <ListarServicosTable titulo='Contratação de serviço'
                                         categoria='Design de site'
                                         data='25/08/2022'
                                         usuario='Paulo Araújo' />
                </tbody>
            </table>
        </StyledTable>
    )
}