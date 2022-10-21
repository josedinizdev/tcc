import '../styles.js'

export default function ListarUsuarios(props) {
    return(
        <div className='container jc-between al-center sombra-card card pad1r'>
            <div className='container'>
                <img src={props.img} alt='' />

                <div className='desc'>
                    <h2> {props.nome} </h2> 
                    <p> {props.descricao} </p> 
                </div>
            </div>

            <button className='al-center contatar cFFFFFF'> Contatar </button>
        </div>
    )
}