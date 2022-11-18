import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import storage from 'local-storage';
import styled from 'styled-components';
import { obterCategorias } from '../../api/categorias';
import { AtualizarServico, VerDetalhes } from '../../api/servicos';
import { delay } from '../../services';
import '../cadastrar/styles.scss'

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
            console.log(resp);
        }
        definirCategorias();
    }, []);

    function cadastrar() {
        if (logado) {
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
            props.close()
        }
        else
            navigate('/login')
    };

    async function DefinirDetalhes() {
        const resp = await VerDetalhes(props.id);
        let categorias = catDisp;
        let categoriasAr = [];
        let newResp = [];
        for (let i = 0; i < resp.length; i++) {
            let pos = categorias.map(item => item.categoria).indexOf(resp[i].categoria)
            console.log(pos)
            if (pos > -1)
                categoriasAr.push(pos);
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
    }, [catDisp]);

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
            <div className='content container-column cadastrar editar'>
                <div id='editar' className="modal__close close-padding" onClick={props.close} />

                <div className='container jc-between al-center'> {/* Faixa 1 */}
                    <div className='container-column'>
                        <div className='container-column'>
                            <label> Título </label>
                            <input placeholder='Ex.: Manunteção de Máquina' value={titulo} onChange={e => setTitulo(e.target.value)} type="text" />
                        </div>

                        <div className='container-column'>
                            <label> Categoria </label>
                            <select className='iMedio' onChange={e => {
                                let newArray = categorias;
                                let canAdd = true;
                                for (let i = 0; i < newArray.length; i++)
                                    if (catDisp[e.target.value] === newArray[i])
                                        canAdd = false;
                                if (canAdd || isNaN(Number(e.target.value))) {
                                    newArray.push(Number(e.target.value) + 1);
                                    setCategorias(newArray);
                                    setUpdated(!updated)
                                }
                            }}>
                                <option value="">Selecione uma categoria</option>
                                {catDisp.map((item, index) => <option key={item.id} value={index}>{item.categoria}</option>)}
                            </select>
                            {categorias.length >= 1 && (<ul className='container'>{categorias.map((item, index) => <li className='container categoria'  key={item}>{catDisp[item].categoria}<div style={{marginLeft:'0.5rem', color: '#ffffff', cursor:'pointer'}} onClick={_ => {
                                let newArray = categorias;
                                newArray.splice(index, 1)
                                setCategorias(newArray);
                                setUpdated(!updated);
                            }}>x</div></li>)}</ul>)}
                        </div>
                    </div>
                    <button onClick={cadastrar}>Atualizar</button>
                </div>

                <div className='container jc-between textareaDiv'> {/* Faixa2 */}
                    <div className='container-column inputDiv'>
                        <label> Descrição </label>
                        <textarea placeholder='Ex.: Uma máquina com intel celeron e... para...' value={descricao} onChange={e => setDescricao(e.target.value)} type="text" />                
                    </div>

                    <div className='container-column inputDiv'>
                        <label> Ideias </label>
                        <textarea placeholder='Ex.: Fique limpa e quero uma decoração...' value={ideias} onChange={e => setIdeias(e.target.value)} type="text" />
                    </div>

                    <div className='container-column inputDiv'>
                        <label> Requisitos </label>
                        <textarea placeholder='Ex.: Precisa ter ensino...' value={requisitos} onChange={e => setRequisitos(e.target.value)} type="text" />
                    </div>
                </div>

                <div className='container jc-between al-end'> {/* Faixa3 */}
                    <div className='container-column lEsquerdo'>
                        <div className='container-column'> {/* Estado */}
                            <label> Estado </label>
                            <input placeholder='Ex.: São Paulo' value={estado} onChange={e => setEstado(e.target.value)} type="text" />
                        </div>
                        <div className='container-column'> {/* Cidade */}
                            <label> Cidade </label>
                            <input placeholder='Ex.: São Paulo' value={cidade} onChange={e => setCidade(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className='container-column lMeio'> 
                        <div className='container-column'> {/* Endereço */}
                            <label> Endereço </label>
                            <input placeholder='Ex.: Rua 25 de Março' value={endereco} onChange={e => setEndereco(e.target.value)} type="text" />
                        </div>
                        <div className='container-column'> {/* Número */}
                            <label> Número </label>
                            <input placeholder='Ex.: 124' value={numero} onChange={e => setNumero(Number(e.target.value))} type="number" />
                        </div>
                    </div>

                    <div className='container-column lDireito'>
                        <div className='container-column'> {/* CEP */}
                            <label> CEP </label>
                            <input placeholder='Ex.: 04826-190' value={cep} onChange={e => setCep(e.target.value)} type="text" />
                        </div>
                        <div className='container-column'> {/* Complemento */}
                            <label> Complemento </label>
                            <input placeholder='Ex.: Casa' value={complemento} onChange={e => setComplemento(e.target.value)} type="text" />
                        </div>
                    </div>
                </div>

            </div>
        </StyledEditar>
    )
}