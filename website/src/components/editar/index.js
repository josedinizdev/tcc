import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import storage from 'local-storage';
import styled from 'styled-components';
import { obterCategorias } from '../../api/categorias';
import { AtualizarServico, VerDetalhes } from '../../api/servicos';
import { delay } from '../../services';

const StyledEditar = styled.div`
    top: 0;
    left: 0;
`;

export default function Editar(props) {
    const [catDisp, setCatDisp] = useState([]);
    const [servico, setServico] = useState(0);
    const [local, setLocal] = useState(0);
    const [categorias, setCategorias] = useState([]);
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState(0);
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
        async function definirCategorias() {
            const resp = await obterCategorias();
            setCatDisp(resp.data);
        }
        definirCategorias();
    }, []);

    function cadastrar() {
        if (logado)
            AtualizarServico(
                servico,
                local,
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

    async function DefinirDetalhes() {
        const resp = await VerDetalhes(props.id);
        let categoriasAr = [];
        let newResp = [];
        for (let i = 0; i < resp.length; i++) {
            categoriasAr.push(resp[i].c_id);
            newResp.push(resp[0]);
        }
        let define = newResp[0];
        setServico(define.s_id);
        setLocal(define.l_id);
        setTitulo(define.titulo);
        setDescricao(define.descricao)
        setIdeias(define.ideias)
        setRequisitos(define.requisitos)
        setEstado(define.estado)
        setCidade(define.cidade)
        setEndereco(define.endereco)
        setNumero(define.numero)
        setCep(define.cep)
        setComplemento(define.complemento)
        setCategorias(categoriasAr);
    }

    useEffect(_ => {
        DefinirDetalhes();
    }, []);

    useEffect(_ => {
        if (storage('usuario-logado')) {
            const usuarioLogado = storage('usuario-logado')
            setLogado(true);
            setUsuario(usuarioLogado.id); 
        };
    }, {});

    return (
        <StyledEditar className='fixed container jc-center al-center wh100'>
            <div id='editar' className='overlay' onClick={props.close} />
            <div className='content container-column'>
                <div id='editar' className="modal__close" onClick={props.close} />
                <select onChange={e => {
                    let newArray = categorias;
                    newArray.push(Number(e.target.value));
                    setCategorias(newArray);
                    setUpdated(!updated)
                }}>
                    <option value=''>Selecione</option>
                    {catDisp.map(item => <option key={item.id} value={item.id}>{item.categoria}</option>)}
                </select>
                {catDisp && (
                    <ul className='container'>{categorias.map(item => <li>{catDisp[item - 1].categoria}</li>)}</ul>
                )}
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
                <button onClick={cadastrar}>Atualizar</button>
            </div>
        </StyledEditar>
    )
}