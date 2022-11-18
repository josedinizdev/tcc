import { useState, useEffect } from "react";
import { beWorker, DetalhesUsuario } from "../../../api/user";
import storage from 'local-storage';
import { useNavigate, Link } from "react-router-dom";
import StyledEditarPerfil from "./styles";
import ProfileCard from '../../../components/profile/index.js';
import User from '../../../assets/images/perfil.png'
import StyledProfissional from "./styles";
import { toast } from "react-toastify";

export default function Profissional() {
    const [dados, setDados] = useState({});
    const [perfil, setPerfil] = useState(0)
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [estado, setEstado] = useState('');
    const [cargo, setCargo] = useState('');
    const [habilidades, setHabilidades] = useState('');

    const navigate = useNavigate();

    function click(e) {
        switch (e.target.id) {
            case 'desconectar':
                storage.remove('usuario-logado')
                storage.remove('worker')
                navigate('/')
                break;
            default:
                break;
        }
    }

    function cancelar() {
        navigate('/perfil');
    }

    async function worker() {
        try {
            const resp = beWorker({
                usuario: perfil,
                cpf: cpf,
                email: email,
                estado: estado,
                cargo: cargo,
                habilidade: habilidades
            })
            if (resp)
                toast('Usuario cadastrado')
            else
                throw new Error('Algo deu Errado')
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
        console.log('worker' + storage('worker'))
        if (storage('worker') !== null) {
            navigate('/perfil');
            toast('Você já é um worker')
        }
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
            <section className="container cinza-card">
                <ProfileCard userProfile={User}
                    desconectar={e => click(e)}
                    nome={dados.nome}
                    habilidades={dados.sobre}
                    normal={true}
                /> 
                <div className="linha" /> 

                <div className="container-column card-branco width100 pad1r">
                    <form className="container-column">
                        <div className="container">
                            <label> CPF </label>
                            <input type='text' value={cpf} onChange={e => setCpf(e.target.value)} />
                        </div>

                        <div className="container">
                            <label> Email Profisisonal </label>
                            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="container">
                            <label> Estado </label>
                            <input className="estado" type='text' value={estado} onChange={e => setEstado(e.target.value)} />
                        </div>
                        <div className="container-column jc-end desc">
                            <div className="container">
                                <label> Cargos </label>
                                <input type='text' value={cargo} onChange={e => setCargo(e.target.value)} />
                            </div>  

                            <div className="container">
                                <label> Habilidades </label>
                                <textarea value={habilidades} onChange={e => setHabilidades(e.target.value)} />
                            </div>
                        </div>
                    </form>
                    <div className="container al-end jc-end botaoTamanho">
                        <button onClick={worker} className="b1E4F6F cFFFFFF pointer"> Concluir </button>
                    </div>
                </div>
            </section>
        </StyledProfissional>
    )
}