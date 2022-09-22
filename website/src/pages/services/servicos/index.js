import StyledServices from "./styles";
import { StyledListar } from "./styles";
import ListarCardServicos from "../../../components/view/ListarServicos/index.js";
import ListarCardProfissionais from "../../../components/view/ListarProfissionais/index.js";
import { Link } from 'react-router-dom'
import './styles.js'

export default function Services() {
    return(
        <StyledServices containe>
            <section className="container">
                <div className="header-img-background">
                    <div className="container-column header-img-background">
                        <h1 className="code-bold cFFFFFF margin60"> - bem vindo(a) </h1>
                        <img className="margin60 withu-logo-header" src="/img/logo-white.png" />
                        <h2 className="code-regular cFFFFFF margin60"> Sempre com você, o problema apareceu, conte conosco  </h2>
                    </div>
                </div>
            </section>

            <section className="container-column al-center">
                <div className="container background-filters background-transparent">
                    <button> <Link to='/servicos/cadastro'> Criar </Link> </button>
                    <select>
                        <option> Gerenciar </option>
                    </select>
                    <input type='text' placeholder="Pesquisar"/> 
                </div>
            </section>

            <StyledListar className="container background-orange">
                <div className="container jc-between background-orange"> 
                    <div className="container-column background-transparent services-listar">
                        <ListarCardServicos titulo='Prestação de serviço' categoria='Desenvolvimento Web' publicacao='26/08/2022 12:50'/>
                    </div>

                    <div className="container background-transparent perfis-listar">
                        <div className="container-column">
                        
                            <div className="container jc-between al-center pesquisar-profissionais">
                                <h1 className="inria-bold c1E4F6F"> Pessoas </h1>
                                <input type='text' placeholder="Pesquisar"/> 
                            </div>

                            <div> 
                                <ListarCardProfissionais img='/img/services-background.svg' nome='David Douglas' cargo='Desenvolvedor Web' habilidades=' Desenvolvedor Web Designer UX/Ul Banco de dados' /> 
                            </div>
                        </div>
                        
                    </div>
                </div>


            </StyledListar>
        </StyledServices>
    )
}

