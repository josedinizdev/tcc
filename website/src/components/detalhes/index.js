import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { VerDetalhes } from '../../api/servicos';
import './styles.scss'
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
                <p>{servicos.titulo}</p>
                <p>{servicos.descricao}</p>
                <p>{servicos.ideias}</p>
                <p>{servicos.requisitos}</p>
                <p>{servicos.data}</p>
                <p>{servicos.usuario}</p>
                <p>{servicos.estado}</p>
                <p>{servicos.cidade}</p>
                <p>{servicos.endereco}</p>
                <p>{servicos.numero}</p>
                <p>{servicos.cep}</p>
                <p>{servicos.complemento}</p>
                <div className='container'>
                    {categorias.map(item => <p>{item}</p>)}
                </div>
            </div>
        </StyledDetalhes>
    )
}