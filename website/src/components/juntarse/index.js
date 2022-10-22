import StyledJuntar from "./styles";

export default function JuntarSe() {
    return(
        <StyledJuntar className="container w100 faixa2">
            <div className='trabalho-juntar'>
                <h2 className='cFFFFFF'> - conheça mais </h2>
                <h1> Em busca de trabalhar com o que quiser? </h1>
                <p className='cFFFFFF'> Aqui você pode começar diretamente da sua casa! </p>

                <div className='container jc-end al-end'> 
                    <button className='cFFFFFF pointer  '> Junte-se </button> 
                </div>
            </div>

            <div className='img' /> 
        </StyledJuntar>
    )
}