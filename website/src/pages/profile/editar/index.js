import { useState, useEffect } from "react";
import { DetalhesUsuario } from "../../../api/user";
import storage from 'local-storage';
import { useNavigate, Link } from "react-router-dom";
import StyledEditarPerfil from "./styles";
import ProfileCard from '../../../components/profile/index.js';
import User from '../../../assets/images/perfil.png'

export default function EditarPerfil() {
    const [dados, setDados] = useState({});
    const [perfil, setPerfil] = useState(0)
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [genero, setGenero] = useState('');
    const [id, setId] = useState(0);

    const navigate = useNavigate();

    function cancelar() {
        navigate('/perfil');
    }

    function alterarPerfilClick() {
        
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
                        <button className="pointer" onClick={cancelar}> Cancelar </button>
                        <button className="b1E4F6F cFFFFFF pointer" onClick={alterarPerfilClick}> Finalizar </button>
                    </nav>

                    <div className="container jc-center">
                        <img src={User} alt='' />
                        <span className="container pointer c1E4F6F al-end"> Alterar foto de perfil </span>
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

                        <div className="marg-top1r">
                            <Link to='/perfil/editar/profissional' className="b1E4F6F cFFFFFF pointer profissional"> Tornar-se Profissional </Link>
                        </div>
                    </form>

                </div>
            </section>
        </StyledEditarPerfil>
    )
}