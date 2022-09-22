import { Link } from 'react-router-dom'
import './styles.js'
import StyledCadastrarServico from './styles.js'

export default function CadastrarServic() {
    return(
        <StyledCadastrarServico className='container-column wh100v jc-center al-center'> {/* Section Principal */}
            <Link to='/servicos'>
                <div className='container jc-start'>
                    <img src='/img/setinha-voltar.png'/>
                    <h2> Voltar </h2>
                </div>
            </Link>
            <form className='background'> {/* Formulario-Background */}
                <div className='container jc-between al-center'> {/* Faixa1 */}
                    <div className='container-column'> {/* Titulo E Categoria */}
                        <input className='titulo-categoria' type='text' placeholder='Título' />
                        <select className='titulo-categoria'> 
                            <option> Categoria </option>
                        </select>
                    </div>

                    <button className='cFFFFFF'> Publicar </button>
                </div>

                <div className='container jc-between w50v'> {/* Faixa2 */}
                    <div className='container'> {/* lado Esquerdo */}
                        <input className='descricao' type='text' placeholder='Descricao' />
                    </div>

                    <div className='container jc-between'> {/* Lado direito */}
                        <div className='container-column' > {/* Ideias E Endereço  */}
                            <input className='publicar-requisitos' type='text' placeholder='Ideias' />
                            <input className='endereco-cep' type='text' />
                        </div>

                        <div className='container-column requisitos-margin'> {/* Requisitos E CEP */}
                            <input className='publicar-requisitos' type='text' placeholder='Requisitos' />
                            <input className='endereco-cep' type='text' />
                        </div>
                    </div>
                </div>
            </form>
        </StyledCadastrarServico>
    )
}