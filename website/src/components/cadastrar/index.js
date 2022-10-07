import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import storage from 'local-storage';
import styled from 'styled-components';
import { obterCategorias } from '../../api/categorias';
import { CadastrarServico } from '../../api/servicos';
import { delay } from '../../services';

const StyledCadastrar = styled.div`
    top: 0;
    left: 0;
`;

export default function Cadastrar(props) {
    const [catDisp, setCatDisp] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState();
    const [cep, setCep] = useState('');
    const [complemento, setComplemento] = useState('');
    const [logado, setLogado] = useState(false);
    const [usuario, setUsuario] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [ideias, setIdeias] = useState('');
    const [requisitos, setRequisitos] = useState('');
    const [updated, setUpdated] = useState(false);
    const navigate = useNavigate();

    useEffect(_ => {
        if (!storage('usuario-logado'))
            navigate('/login');
    }, {})

    function cadastrar() {
        if (logado)
            CadastrarServico(
                categorias,
                estado,
                cidade,
                endereco,
                numero,
                cep.replace(/\-/g, ''),
                complemento,
                usuario,
                titulo,
                descricao,
                ideias,
                requisitos
            );
        else
            navigate('/login')
    };

    useEffect(_ => {
        if (storage('usuario-logado')) {
            const usuarioLogado = storage('usuario-logado')
            setLogado(true);
            setUsuario(usuarioLogado.id); 
        };
    }, {});

    useEffect(_ => {
        async function definirCategorias() {
            const resp = await obterCategorias();
            setCatDisp(resp.data);
        }
        definirCategorias();
    }, []);

    return (
        <StyledCadastrar className='fixed container jc-center al-center wh100'>
            <div id='cadastrar' className='overlay' onClick={props.close} />
            <div className='content container-column'>
                <div id='cadastrar' className="modal__close" onClick={props.close} />
                <select onChange={e => {
                    let newArray = categorias;
                    newArray.push(e.target.value);
                    delay(1000).then(_ => setCategorias(newArray));
                    setUpdated(!updated);
                }}>
                    <option value=''>Selecione</option>
                    {catDisp.map(item => <option key={item.id} value={item.id}>{item.categoria}</option>)}
                </select>
                <ul className='container'>{categorias.map(item => <li>{catDisp[item - 1].categoria}</li>)}</ul>
                <input placeholder='Ex.: São Paulo' value={estado} onChange={e => setEstado(e.target.value)} type="text" />
                <input placeholder='Ex.: São Paulo' value={cidade} onChange={e => setCidade(e.target.value)} type="text" />
                <input placeholder='Ex.: Rua 25 de Março' value={endereco} onChange={e => setEndereco(e.target.value)} type="text" />
                <input placeholder='Ex.: 124' value={numero} onChange={e => setNumero(Number(e.target.value))} type="number" />
                <input placeholder='Ex.: 04826-190' value={cep} onChange={e => setCep(e.target.value)} type="text" />
                <input placeholder='Ex.: Casa' value={complemento} onChange={e => setComplemento(e.target.value)} type="text" />
                <input placeholder='Ex.: Manunteção de Máquina' value={titulo} onChange={e => setTitulo(e.target.value)} type="text" />
                <textarea placeholder='Ex.: Uma máquina com intel celeron e... para...' value={descricao} onChange={e => setDescricao(e.target.value)} type="text" />                
                <textarea placeholder='Ex.: Fique limpa e quero uma decoração...' value={ideias} onChange={e => setIdeias(e.target.value)} type="text" />
                <textarea placeholder='Ex.: Precisa ter ensino...' value={requisitos} onChange={e => setRequisitos(e.target.value)} type="text" />
                <button onClick={cadastrar}>Cadastrar</button>
            </div>
        </StyledCadastrar>
    )
}