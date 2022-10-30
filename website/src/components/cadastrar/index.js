import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import storage from 'local-storage';
import styled from 'styled-components';
import { obterCategorias } from '../../api/categorias';
import { CadastrarServico } from '../../api/servicos';
import { delay } from '../../services';
import './styles.scss'
import { toast, ToastContainer } from 'react-toastify'
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
        try {
            if (logado) {
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
                toast('Serviço cadastrado com sucesso!');
            }
        } catch (err) {
            toast(err.message)
        }
    };

    useEffect(_ => {
        if (storage('usuario-logado')) {
            const usuarioLogado = storage('usuario-logado');
            setLogado(true);
            setUsuario(usuarioLogado.id);
        };
    }, {});

    useEffect(_ => {
        async function definirCategorias() {
            const resp = await obterCategorias();
            setCatDisp(resp.data);
            console.log(resp)
        }   
        definirCategorias();
        console.log(catDisp)
    }, []);

    return (
        <StyledCadastrar className='fixed z4 container jc-center al-center wh100'>
            <div id='close-cadastro' className='cadastrar__overlay absolute z1 wh100' onClick={props.close} />
            <div className='cadastrar__content relative z2 container-column cadastrar'>
                <div id='close-cadastro' onClick={props.close}>x</div>
                <div className='container jc-between al-center'> {/* Titulo, categoria e botão */}
                    <div className='container-column'> {/* Título e categoria */}
                    <div className='container-column'>
                            <label> Título </label>
                            <input  className='iMedio' placeholder='Ex.: Manunteção de Máquina' value={titulo} onChange={e => setTitulo(e.target.value)} type="text" />
                        </div>
                        <div>
                            <label className='container-column'> Categoria </label>
                            <select className='iMedio' onChange={e => {
                                let newArray = categorias;
                                let canAdd = true;
                                for (let i = 0; i < newArray.length; i++)
                                    if (catDisp[e.target.value] === newArray[i])
                                        canAdd = false;
                                if (canAdd || isNaN(Number(e.target.value))) {
                                    newArray.push(Number(e.target.value));
                                    setCategorias(newArray);
                                    setUpdated(!updated)
                                }
                            }}>
                                <option value="">Selecione uma categoria</option>
                                {catDisp.map((item, index) => <option key={item.id} value={index}>{item.categoria}</option>)}
                            </select>
                            {categorias.length >= 1 && (<ul className='container'>{categorias.map((item, index) => <li className='container'  key={item}>{catDisp[item].categoria}<div style={{marginLeft:'0.5rem', color: '#ff0000'}} onClick={_ => {
                                let newArray = categorias;
                                newArray.splice(index, 1)
                                setCategorias(newArray);
                                setUpdated(!updated);
                            }}>x</div></li>)}</ul>)}
                        </div>
                    </div>
                    <button className='pointer' onClick={_ => cadastrar()}>Cadastrar</button>
                </div>
                <div className='container jc-between textareaDiv    '>
                    <div className='container-column inputDiv'>
                        <label> Descrição </label>
                        <textarea placeholder='Ex.: Uma máquina com intel celeron e...  para...' value={descricao} onChange={e => setDescricao(e.target.value)} type="text" />                
                    </div>

                    <div className='container-column inputDiv'>
                        <label> Ideías </label>
                        <textarea placeholder='Ex.: Fique limpa e quero uma decoração...' value={ideias} onChange={e => setIdeias(e.target.value)} type="text" />
                    </div>

                    <div className='container-column inputDiv'>
                        <label> Requisitos </label>
                        <textarea placeholder='Ex.: Precisa ter ensino...' value={requisitos} onChange={e => setRequisitos(e.target.value)} type="text" />
                    </div>
                </div>
                <div className='container jc-between al-end'>
                    <div className='container-column lEsquerdo'>
                        <div className='container-column'>
                            <label> Estado </label>
                            <input placeholder='Ex.: São Paulo' value={estado} onChange={e =>  setEstado(e.target.value)} type="text" />
                        </div>

                        <div className='container-column'>
                            <label> Cidade </label>
                            <input placeholder='Ex.: São Paulo' value={cidade} onChange={e => setCidade(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className='container-column lMeio'>
                        <div className='container-column'>
                            <label> Endereço </label>
                            <input  placeholder='Ex.: Rua 25 de Março'  value={endereco} onChange={e => setEndereco(e.target.value)} type="text" />
                        </div>

                        <div className='container-column'>
                            <label> Número </label>
                            <input placeholder='Ex.: 124' value={numero} onChange={e => setNumero(Number(e.target.value))} type="number" />
                        </div>
                    </div>

                    <div className='container-column lDireito'>
                        <div className='container-column'>
                            <label> CEP </label>
                            <input placeholder='Ex.: 04826-190' value={cep} onChange={e => setCep(e.target.value)} type="text" />
                        </div>

                        <div className='container-column'>
                            <label> Complemento </label>
                            <input placeholder='Ex.: Casa' value={complemento} onChange={e => setComplemento(e.target.value)} type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </StyledCadastrar>
    )
}