import StyledListarCardsServicos from '../ListarServicos/styles.js'

export default function ListarCardServicos(props) {
    return(
        <StyledListarCardsServicos className='container-column'>
                <div className='container card al-center jc-between'>
                    <div className='container-column'>
                        <h1> {props.titulo} </h1>
                        <h2> {props.categoria} </h2>
                    </div>

                    <a> Veja mais detalhes </a>

                    <p> {props.publicacao} </p>
                </div>
        </StyledListarCardsServicos>
    )
}