import StyledServices from "./styles";
import './styles.js'

export default function Services() {
    return(
        <StyledServices className="container-column">
            <section className="container jc-between">
                <div>
                    <img className="img-background" src='img/background.png' alt=''/> 
                </div>

                <div className="container-column">

                    <div className="container-column">
                        <h1 className="uppercase code-bold cFFFFFF  "> - bem vindo(a) </h1>
                        <h2 className="cFFFFFF subtitle-h1"> Sempre com você, o problema apareceu, conte conosco </h2>
                    </div>

                    { /*}
                    <div className="container services-bar">
                        <div className="jc-between services-bar-items"> 
                            <button> Criar </button>
                            <select placeholder="Gerenciar"> 
                                <option> Gerenciar </option> 
                            </select>
                            <input type='text' placeholder="Pesquisar" />
                        </div>
                    </div> */} 
                    
                </div>
            </section>

            <section>

            </section>
        </StyledServices>
    )
}