import { Link } from 'react-router-dom'
import '../styles.js'

export default function NavNormal(props) {
    return(
        <nav className='container-column card-branco'>
            <div>
                <Link to='/perfil' className='container pointer al-center jc-start'> 
                    <img src={props.icon1} alt='' />
                    {props.link1}
                </Link>
            </div>

            <div>
                <Link to='/perfil/pesquisa' className='container pointer al-center jc-start'> 
                    <img src={props.icon2} alt='' />
                    {props.link2}
                </Link>
            </div>

            <div>
                <Link to='/perfil/adm/andamento' className='container pointer al-center jc-start'> 
                    <img src={props.icon3} alt='' />
                    {props.link3}
                </Link>
            </div>
        </nav>
    )
}