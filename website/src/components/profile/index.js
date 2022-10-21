import User from '../../assets/images/perfil.png'
import '../../pages/admin/styles.scss'

export default function ProfileCard(props) {
    return(
        <article className="container-column"> 
            <div className="container">  { /* Nome, Perfil e cargo */ }
                <img className='user' src={User} alt="perfil" />

                <div className="container-column  wrap">
                    <h2> {props.nome} </h2>
                    <p> {props.cargo} </p>
                </div>
            </div>  { /* Nome, Perfil e cargo */ }

            <div className="container-column wrap max10">
                <h2> Habilidade </h2>
                <p className='habilidades'>
                    {props.habilidades}
                </p>
            </div>
        </article> 
    )
} 