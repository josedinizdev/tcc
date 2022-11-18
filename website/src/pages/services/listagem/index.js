import { useState, useEffect } from "react";
import { ListarServico, PesquisarServicoTitulo } from '../../../api/servicos.js';
import Cadastrar from "../../../components/cadastrar/index.js";
import Detalhes from "../../../components/detalhes/index.js";
import StyledServices, {
    List,
    CardServicoList,
} from "./styles";
import { Link } from 'react-router-dom' 
import { ToastContainer } from "react-toastify";
import { obterCategorias } from "../../../api/categorias.js";

export default function Services() {
    const [servicos, setServicos] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [cadastro, setCadastro] = useState(false);
    const [detalhes, setDetalhes] = useState(false);
    const [currentPos, setCurrentPos] = useState();
    const [catDisp, setCatDisp] = useState([{id: 0, categoria: ''}]);
    const [categoria, setCategoria] = useState('');
    
    useEffect(() => {
        async function ExibirListagem() {
            const resp = await ListarServico({nome: filtro, categoria: categoria});
            let newResp = [];
            console.log(newResp)
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

    async function pesquisar() {
        const req = { nome: filtro, categoria: categoria }
        const resp = await ListarServico(req);
        console.log(resp)
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
        else if (e.target.id === 'close-cadastro')
            setCadastro(false);
    }

    useEffect(_ => {
        async function definirCategorias() {
            const resp = await obterCategorias();
            setCatDisp(resp.data);
        }   
        definirCategorias();
    }, []);

    return(
        <StyledServices className='container-column relative z1'>
            <div className="services__background">
                <div className="services">
                    <ToastContainer className='toast'/>
                    <h1 className="services__title "> - bem vindo(a) </h1>
                    <img src="/img/logo-white.png" alt='withu' className="services__img" />
                    <p className="services__slogan"> Sempre com você, o problema apareceu, conte conosco </p>
                    <div>
                        <section className="container-column al-center">
                            <div className="container background-filters background-transparent">
                                <button id="cadastrar" onClick={click} className="pointer">Criar</button>
                                <button><Link to='/servicos/usuario'>Gerenciar</Link></button>
                                <select className='iMedio' onChange={e => {
                                        const req = catDisp[e.target.value].categoria
                                        setCategoria(req);
                                    }}>
                                    <option value=''>Selecione</option>
                                    {catDisp.map((item, index) => <option key={index} value={index} >{item.categoria}</option>)}
                                </select>
                                <div>
                                    <input type='text' placeholder="Pesquisar" value={filtro} onChange={e => setFiltro(e.target.value)} /> 
                                    <button className="pointer" onClick={pesquisar}>pesquisar</button>
                                </div>
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
                        {servicos.map((item, index) =>
                            <CardServicoList key={item.id} className='container-column'>
                                <ul className='container card al-center jc-between'>
                                    <div className='container-column'>
                                        <li> {item.titulo} </li>
                                        <div className="container">
                                                {item.categorias.map((categoria, index) => <li key={categoria.id} style={{marginRight: '.4rem'}}>{categoria}</li>)} 
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
