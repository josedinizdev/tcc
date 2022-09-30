import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledView = styled.div`
    .view__nav {
        background-color: #242424;
        top: 0;
        padding: 0 1rem;
        li {
            margin-right: 1.2rem;
            height: fit-content;
        }
        a {
            font-size: 1.2rem;
            color: #fff;
            height: fit-content;
        }
    }
`;

export default function View(props) {
    return (
        <StyledView className='relative container-column wh100'>
            <div className='view__nav fixed container w100 jc-between z5'>
                <div><img src='/img/withu-logo.png' /></div>
                <div className='h100'>
                    <nav className='container h100'>
                        <ul className='container h100 al-center'>
                            <li><Link to='/'>Página Inicial</Link></li>
                            <li><Link to='/servicos'>Serviços</Link></li>
                            <li><Link to='/support'>Suporte</Link></li>
                            <li><Link to='/sobre'>Sobre</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/cadastro'>Cadastrar</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div>{props.children}</div>
        </StyledView>
    )
}