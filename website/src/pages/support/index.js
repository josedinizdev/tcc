import StyledSuporte from "./styles"; 

export default function Suporte() {
    return(
        <StyledSuporte className="container">
            <section className="container">
                <div>
                    <h1 className="cFFFFFF"> Relate o erro no sistema ou um problema pessoal envolvendo o sistema </h1>
                </div>
            </section>

            <section className="container jc-center al-center">
                <div className="container-column width">
                    <input type='text' placeholder='Problema*' />
                    <textarea placeholder="Descreva um problema*" />

                    <div className="container jc-between">
                        <input className="envolvido" type='text' placeholder='Pessoa envolvida' />
                        <div className="container al-center">
                            <button className="cFFFFFF b1E4F6F pointer"> Relatar </button>
                        </div>
                    </div>
                </div>
            </section>  
        </StyledSuporte>
    )
}