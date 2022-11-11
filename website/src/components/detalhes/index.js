import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { VerDetalhes } from '../../api/servicos';
import { Link } from 'react-router-dom'
import './styles.scss'
import Jose from '../../assets/images/diretor-ceo.png'
const StyledDetalhes = styled.div`
    top: 0;
    left: 0;
    
`;

export default function Detalhes(props) {
    const [servicos, setServicos] = useState({});
    const [categorias, setCategorias] = useState([]);

    async function DefinirDetalhes() {
        const resp = await VerDetalhes(props.id);
        let categoriasAr = [];
        let newResp = [];
        for (let i = 0; i < resp.length; i++) {
            categoriasAr.push(resp[i].categoria);
            newResp.push(resp[0]);
        }
        let define = newResp[0];
        setServicos(define);
        setCategorias(categoriasAr)
    }

    useEffect(_ => {
        DefinirDetalhes();
    }, []);

    return (
        <StyledDetalhes className='fixed container jc-center al-center wh100'>
            <div id='detalhes' className='overlay' onClick={props.close} />
            <div className='content container-column detalhesContainer'>
                <div id='detalhes' className="modal__close" onClick={props.close} />
                <div className='container detalhes jc-around'>
                    <div className='container-column w45'>
                        <h1>{servicos.titulo}</h1>
                        <p>{servicos.descricao}</p>
                    </div>

                    <div className='container-column wDireito'>
                        <p className='container jc-end data'>{servicos.data}</p>
                        <div className='container'>
                            <div className='card'>
                                <h2> IDEIA </h2> 
                                <p>{servicos.ideias}</p>
                            </div>
                            <div className='card'>
                                <h2> REQUISITOS </h2>
                                <p>{servicos.requisitos}</p>    
                            </div>
                        </div>

                        <div className='container usuario'>
                            { /* Imagem */}
                            <img src={Jose} alt='perfil'/>
                            <div className='container-column'>
                                <h1 className='username'>{servicos.usuario}</h1>
                                <Link className='visualizar' to='/perfil'> visualizar perfil >></Link>
                            </div>
                        </div>
                    </div>
                </div>
                

                {/* <p>{servicos.estado}</p>
                <p>{servicos.cidade}</p>
                <p>{servicos.endereco}</p>
                <p>{servicos.numero}</p>
                <p>{servicos.cep}</p>
                <p>{servicos.complemento}</p> */}
                <div className='container categoria'>
                    {categorias.map(item => <p className='pato'>{item}</p>)}
                </div>
            </div>
        </StyledDetalhes>
    )
}