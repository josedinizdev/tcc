import { useState, useEffect } from "react";
import { DetalhesUsuario } from "../../../api/user";
import storage from 'local-storage';
import { useNavigate, Link } from "react-router-dom";
import StyledEditarPerfil from "./styles";
import ProfileCard from '../../../components/profile/index.js';
import User from '../../../assets/images/perfil.png'
import StyledProfissional from "./styles";

export default function Profissional() {
    const [dados, setDados] = useState({});
    const [perfil, setPerfil] = useState(0)


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
        <StyledProfissional className="container jc-center al-center wh100v bEF7601">
            <section className="container  cinza-card">
                <ProfileCard userProfile={User}
                        nome={dados.nome}
                        habilidades={dados.sobre}
                        normal={true}
                /> 

                <div className="linha" /> 

                <form className="container-column card-branco pad1r w80">
                    <div className="container">
                        <label> CPF </label>
                        <input type='text' />
                    </div>

                    <div className="container">
                        <label> Data de Nascimento </label>
                        <input type='date' />
                    </div>

                    <div className="container">
                        <label> Email Profisisonal </label>
                        <input type='text' />
                    </div>

                    <div className="container">
                        <label> Estado </label>
                        <input type='text' />
                    </div>

                    <div className="container">
                        <label> Cargo </label>
                        <input type='text' />
                    </div>

                    <div className="container">
                        <label> Habilidades </label>
                        <textarea />
                    </div>

                    <div className="container js-end">
                        <button className="b1E4F6F cFFFFFF pointer pad1r finalizar"> Finalizar </button>
                    </div>

                </form>
            </section>
        </StyledProfissional>
    )
}