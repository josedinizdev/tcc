import { useState, useEffect } from "react";
import { DetalhesUsuario } from "../../../api/user";
import storage from 'local-storage';
import { useNavigate } from "react-router-dom";
import StyledEditarPerfil from "./styles";
import ProfileCard from '../../../components/profile/index.js';
import User from '../../../assets/images/perfil.png'

export default function EditarPerfil() {
    const [dados, setDados] = useState({});
    const [perfil, setPerfil] = useState(0)
    const navigate = useNavigate();

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

                <article className="container-column container-editar card-branco ">
                    <nav className="container jc-end"> 
                        <button> Cancelar </button>
                        <button className="b1E4F6F cFFFFFF"> Finalizar </button>
                    </nav>

                    <div className="container">
                        <img src={User} alt='' />
                        <div className="container al-end">
                            <button className="alterar-img c1E4F6F"> Alterar foto de perfil </button>
                        </div>
                    </div>

                    <form className="container-column">
                        <label className="container jc-between"> Nome
                            <input type='text' />
                        </label>

                        <label className="container jc-between"> Descrição
                            <textarea />
                        </label>

                        <div className="linha" />

                        <label className="container jc-between"> Email
                            <input type='text' />
                        </label>

                        <label className="container jc-between"> Telefone
                            <input type='text' />
                        </label>

                        <label className="container jc-between"> Gênero
                            <input type='text' />
                        </label> 

                    </form>

                </article>
            </section>
        </StyledEditarPerfil>
    )
}