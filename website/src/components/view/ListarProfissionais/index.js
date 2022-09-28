import StytledListarProfissionais from './styles.js';

  export function ListarCardProfissionais(props) {
    return(
        <StytledListarProfissionais className='container-column jc-center'>
                <div className='container-column card'>
                    <div className='container'>
                        <img src={props.img} />
                        <div className='container-column profissional'>
                            <h1> {props.nome} </h1>
                            <h2> {props.cargo} </h2>
                        </div>
                    </div>

                    <div> 
                        <h1> Habilidades </h1>
                        <p className='habilidades'> {props.habilidades} </p>
                    </div>

                    <div className='container jc-end'>
                        <button className='container'> Enviar mensagem </button>
                    </div>
                </div>
        </StytledListarProfissionais>
    );
};
