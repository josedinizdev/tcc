import { useState, useEffect } from "react";
import { ListarServico, PesquisarServicoTitulo } from '../../../api/servicos.js';
import Cadastrar from "../../../components/cadastrar/index.js";
import Detalhes from "../../../components/detalhes/index.js";
import StyledServices, {
    List,
    CardServicoList,
} from "./styles";
import { Link } from 'react-router-dom' 

export default function Services() {
    const [servicos, setServicos] = useState([]);
    const [buscar, setBuscar] = useState('');
    const [cadastro, setCadastro] = useState(false);
    const [detalhes, setDetalhes] = useState(false);
    const [currentPos, setCurrentPos] = useState();
    
    useEffect(() => {
        async function ExibirListagem() {
            const resp = await ListarServico();
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
            setServicos(newResp);
        }
        ExibirListagem();
    }, [cadastro]);

    function verDetalhes(id) {
        setCurrentPos(id);
        setDetalhes(true);
    }
    
    function click(e) {
        switch (e.target.id) {
            case 'cadastrar':
                setCadastro(!cadastro)
                break;
            case 'detalhes':
                setDetalhes(!detalhes);
                break;
            default:
                break;
        }
        if (e.target.id === 'cadastrar')
            setCadastro(!cadastro);
        
    }

    async function buscarServico() {
        const filtrar = await PesquisarServicoTitulo(buscar);
        setBuscar(filtrar);
    }

    function verificarEnter(tecla) {
        if(tecla.key === 'Enter')
            buscarServico(buscar);
    }

    return(
        <StyledServices className='container-column relative z1'>
            <div className="services__background">
                <div className="services">
                    <h1 className="services__title "> - bem vindo(a) </h1>
                    <img src="/img/logo-white.png" alt='withu' className="services__img" />
                    <p className="services__slogan"> Sempre com você, o problema apareceu, conte conosco </p>
                    <div>
                        <section className="container-column al-center">
                            <div className="container background-filters background-transparent">
                                <button id="cadastrar" onClick={click} className="pointer">Criar</button>
                                <button><Link to='/servicos/usuario'>Gerenciar</Link></button>
                                <select>
                                    <option>  </option>
                                </select>
                                <input type='text' placeholder="Pesquisar" value={buscar} onKeyDown={verificarEnter}  onChange={e => setBuscar(e.target.value)}/> 
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            {cadastro && (<Cadastrar close={e => click(e)} />)}
            {detalhes && (<Detalhes close={e => click(e)} id={currentPos} />)}
            <List className="container background-orange">
                <div className="container jc-between background-orange"> 
                    <div className="container-column background-transparent services-listar">
                        {servicos.map(item =>
                            <CardServicoList key={item.id} className='container-column'>
                                <ul className='container card al-center jc-between'>
                                    <div className='container-column'>
                                        <li> {item.titulo} </li>
                                        <div className="container">
                                            {item.categorias.map(categoria => <li key={categoria} style={{marginRight: '.4rem'}}>{categoria}</li>)}
                                        </div>
                                    </div>
                                    <li onClick={_ => verDetalhes(item.id)} style={{cursor: "pointer"}}> Veja mais detalhes </li>
                                    <li>{item.data}</li>
                                </ul> 
                            </CardServicoList>
                        )}
                    </div>
                    <div className="container background-transparent perfis-listar">
                        <div className="container-column al-center">
                            <div className="container jc-between al-center pesquisar-profissionais">
                                <h1 className="inria-bold c1E4F6F"> Pessoas </h1>
                                <input type='text' placeholder="Pesquisar" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </List>
        </StyledServices>
    )
}
