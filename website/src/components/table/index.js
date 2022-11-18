import StyledTable from "./styles";
import LupaIcon from '../../assets/images/lupa-icon.png'
import ListarServicosTable from "./listagem";
import { useEffect, useState } from 'react'
import { ServicosAplicados, ServicosAplicadosHis } from '../../api/servicos.js'
import storage from "local-storage";
import Detalhes from "../detalhes";

export default function TableCard(props) {
    const [log, setLog] = useState()
    const [user, setUser] = useState(0)
    const [pesquisar, setPesquisar] = useState('')
    const [servicos, setServicos] = useState([])
    const [historico, setHistorico] = useState(false)
    const [detalhes, setDetalhes] = useState(false);
    const [currentPos, setCurrentPos] = useState();

    useEffect(_ => {
        if (storage('usuario-logado')) {
            const usuario = storage('usuario-logado').id
            setLog(true);
            setUser(usuario);
            console.log(usuario)
        }
    }, {});

    function verDetalhes(id) {
        setCurrentPos(id);
        setDetalhes(true);
    }

    useEffect(() => {
        async function ExibirListagem() {
            const worker = storage('worker').id
            let resp;
            if (props.his)
                resp = await ServicosAplicadosHis(worker)
            else
                resp = await ServicosAplicados(worker);
            if (resp.length > 0) {
                let newResp = [];
                for (let i = 0; i < resp.length; i++) {
                    let category = false;
                    if (newResp.length > 1)
                        for (let j = 0; j < newResp.length && !category; j++)
                            if (newResp[j].id === resp[i].id) {
                                category = true;
                                newResp[j].categorias.push(resp[i].categoria);
                            }
                    if (!category)
                        newResp.push({ id: resp[i].id, titulo: resp[i].titulo, data: resp[i].data, categorias: [resp[i].categoria] });
                }
                console.log('new')
                console.log(newResp)
                setServicos(newResp);
            }
        }
        ExibirListagem();
    }, []);

    function click(e) {
        switch (e.target.id) {
            case 'detalhes':
                setDetalhes(!detalhes);
                break;
            default:
                break;
        }
    }

    return(
        <StyledTable className="container-column">
            <nav className="container card-branco jc-between"> 
                <h1> {props.h1} </h1>
                <div className="container"> 
                    <input type='text'  placeholder="Pesquisar"/>
                    <button className="b7370FF pointer"> 
                        <img src={LupaIcon} alt='' />
                    </button>
                </div>
            </nav>
            {detalhes && (<Detalhes close={e => click(e)} id={currentPos} and={true} />)}
            <table className="card-branco"> 
                <tbody className="container-column">
                    {servicos && (
                        <div>
                            {servicos.map((item, index) => (
                                <ListarServicosTable
                                    detalhes={verDetalhes}
                                    id={item.id}
                                    titulo={item.titulo}
                                categoria={item.categoria}
                                data={item.data}
                                usuario={item.usuario} />
                            ))}
                        </div>
                    )}
                </tbody>
            </table>
        </StyledTable>
    )
}