import { useState, useEffect } from "react";
import { ListarServico } from '../../../api/servicos.js';
import StyledServices, {
    List,
    CardServicoList,
} from "./styles";
import { Link } from 'react-router-dom' 

export default function Services() {
    const [servicos, setServicos] = useState([]);
    
    useEffect(() => {  
        async function ExibirListagem() {
            const resp = await ListarServico();
            setServicos(resp);      
        }
        ExibirListagem();
     }, [])

    return(
        <StyledServices className='container-column relative z1'>
            <div className="services__top container jc-between">
                <div className="services__title relative z2">
                    <p className="cFFFFFF"> - bem vindo(a) </p>
                    <img src="/img/logo-white.png" />
                    <h2 className='cFFFFFF'> Sempre com você, o problema apareceu, conte conosco  </h2>
                </div>
                <div className="services__img relative h100 z1">
                    <div className="services__background wh100 absolute" />
                    <div className="services__background-color absolute wh100" />
                </div>
            </div>
            <section className="container-column al-center">
                <div className="container background-filters background-transparent">
                    <Link className="pointer" to='/servicos/cadastro'>
                        <button>Criar</button>
                    </Link>
                    <select>
                        <option>  </option>
                    </select>
                    <input type='text' placeholder="Pesquisar" /> 
                </div>
            </section>
            <List className="container background-orange">
                <div className="container jc-between background-orange"> 
                    <div className="container-column background-transparent services-listar">
                        {servicos.map(item =>
                            <CardServicoList className='container-column'>
                                <ul className='container card al-center jc-between'>
                                    <div className='container-column'>
                                        <li> {item.servico} </li>
                                        <li>{item.descricao}</li>
                                    </div>
                                    <li> Veja mais detalhes </li>
                                    <li>{item.publicacao}</li>
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

