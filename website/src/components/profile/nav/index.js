import '../styles.js'

export default function NavAdm(props) {
    return(
        <nav className='container-column card-branco'>
            <div>
                <button className='container pointer al-center jc-start'> 
                    <img src={props.icon1} alt='' />
                    {props.link1}
                </button>
            </div>

            <div>
                <button className='container pointer al-center jc-start'> 
                    <img src={props.icon2} alt='' />
                    {props.link2}
                </button>
            </div>

            <div>
                <button className='container pointer al-center jc-start'> 
                    <img src={props.icon3} alt='' />
                    {props.link3}
                </button>
            </div>
        </nav>
    )
}