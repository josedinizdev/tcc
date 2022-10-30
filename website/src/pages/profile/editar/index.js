import { useState, useEffect } from "react";
import { DetalhesUsuario, EditarPerfil } from "../../../api/user";
import storage from 'local-storage';
import { useNavigate, Link } from "react-router-dom";
import StyledEditarPerfil from "./styles";
import ProfileCard from '../../../components/profile/index.js';
import User from '../../../assets/images/perfil.png'
import { toast } from "react-toastify";

export default function IEditarPerfil() {
    const [dados, setDados] = useState({});
    const [perfil, setPerfil] = useState(0)
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [genero, setGenero] = useState('');
    const [nascimento, setNascimento] = useState();
    const [id, setId] = useState(0);

    const navigate = useNavigate();

    function cancelar() {
        navigate('/perfil');
    }

    async function alterarPerfilClick() {
        try {
            let resp = await EditarPerfil({
                nome: nome,
                descricao: descricao,
                email: email,
                celular: telefone,
                genero: genero,
                nascimento: nascimento
            }, perfil)
            toast('Perfil Editado')
        } catch (err) {
            toast(err.message)
        }
    }

    useEffect(_ => {
        let resp;
        if (!storage('usuario-logado'))
            navigate('/login');
        else
            resp = storage('usuario-logado');
        setPerfil(resp.id)
    }, [])

    useEffect(_ => {
        async function requisicao() {
            const resp = await DetalhesUsuario(perfil)
            setDados(resp);
            setNome(resp.nome);
            setDescricao(resp.sobre);
            setEmail(resp.email);
            setTelefone(resp.celular);
            setGenero(resp.genero);
            console.log(resp.nascimento)
            let d = resp.nascimento
            console.log(d)
            d = d.slice(0, 10)
            console.log(d);
            setNascimento(d);
        }
        requisicao();
    }, [perfil])
    return(
        <StyledEditarPerfil className="container al-center jc-center bEF7601 wrap wh100v">
            <section className="container cinza-card jc-center">
                <ProfileCard userProfile={User}
                    nome={dados.nome}
                    habilidades={dados.sobre}
                    normal={true}
                /> 
                <div className="linha" /> 

                <div className="container-column container-editar card-branco ">
                    <nav className="container jc-end"> 
                        <button className="b1E4F6F cFFFFFF pointer" onClick={alterarPerfilClick}> Finalizar </button>
                    </nav>

                    <div className="container jc-center">
                        <img src={User} alt='' />
                        <span className="container c1E4F6F al-end"> 
                            Alterar foto de perfil 
                            <input className="editarFoto" type='file' />
                        </span>
                    </div>

                    <form className="container-column">
                        <div className="container-column al-center marg-right20r marg-top1r">
                            <label className="container jc-between"> Nome
                                <input className="input" type='text' value={nome} onChange={e => setNome(e.target.value)} />
                            </label>

                            <label className="container jc-between"> Descrição
                                <textarea value={descricao} onChange={e => setDescricao(e.target.value)} />
                            </label>
                        </div>

                        <div className="linha" />

                        <label className="container jc-between"> Email
                            <input className="input" type='text' value={email} onChange={e => setEmail(e.target.value)} />
                        </label>

                        <label className="container jc-between"> Telefone
                            <input className="input" type='text' value={telefone} onChange={e => setTelefone(e.target.value)} />
                        </label>

                        <label className="container jc-between"> Gênero
                            <input className="input" type='text' value={genero} onChange={e => setGenero(e.target.value)} />
                        </label>

                        <label className="container jc-between"> Data de Nascimento
                            <input className="input" type='date' value={nascimento} onChange={e => setNascimento(e.target.value)} />
                        </label>

                        <div className="marg-top2r">
                            <Link to='/perfil/editar/profissional' className="b1E4F6F cFFFFFF pointer profissional"> Tornar-se Profissional </Link>
                        </div>
                    </form>

                </div>
            </section>
        </StyledEditarPerfil>
    )
}