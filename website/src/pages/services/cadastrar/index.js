import './styles.js'
import StyledCadastrarServico from './styles.js'

export default function CadastrarServic() {
    return(
        <StyledCadastrarServico className='background-transparent container jc-center al-center wh100'>
            <div>
                <div>
                    <input type='text' placeholder='Título'/>
                    <input type='text' placeholder='Categoria'/>
                </div>
                <button> Publicar</button>
            </div>

            <div>
                <div>
                    <input type='text' placeholder='Descrição'/>
                </div>

                <div>
                    <label> Ideias </label>
                    <input type='text' placeholder='Ideias'/>

                    <label> Endereço (opcional) </label>
                    <input type='text'/>
                </div>
                
                <div>
                    <label> Requisitos </label>
                    <input type='text' placeholder='Requisitos'/>

                    <label> CEP (opcional) </label>
                    <input type='text'/>
                </div>
            </div>
        </StyledCadastrarServico>
    )
}