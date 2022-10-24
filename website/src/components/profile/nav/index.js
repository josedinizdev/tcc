import { Link } from 'react-router-dom'
import '../styles.js'

export default function NavAdm(props) {
    return(
        <nav className='container-column card-branco'>
            <div>
                <Link to='/perfil/adm/andamento' className='container pointer al-center jc-start nav-linkar'> 
                    <img src={props.icon1} alt='' />
                    {props.link1}
                </Link>
            </div>

            <div>
                <Link to='/perfil/adm/historico' className='container pointer al-center jc-start nav-linkar'> 
                    <img src={props.icon2} alt='' />
                    {props.link2}
                </Link>
            </div>

            <div>
                <Link to='/perfil' className='container pointer al-center jc-start nav-linkar'> 
                    <img src={props.icon3} alt='' />
                    {props.link3}
                </Link>
            </div>
        </nav>
    )
}