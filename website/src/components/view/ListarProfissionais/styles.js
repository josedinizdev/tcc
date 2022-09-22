import styled from 'styled-components';

const StytledListarProfissionais = styled.div`
    .card { 
        background-color: #fff;
        width: auto;
        height: auto;

        padding: .2rem .8rem;
        border-radius: .3rem;
        margin: .4rem 0 .4rem 2rem;
    }

    img {
        border: #242424 solid 2px;
        margin: .2rem 1rem 1rem 0;
        width: 4rem;
        height: 4rem;
        border-radius: 10rem;
    }

    h1, h2 {
        color: #242424;
    }

    h1 {
        font-size: 1.4rem;
        font-family: inria-bold;
        line-height: 2rem;
        width: 100%;
    }

    h2 {    
        font-size: 1.1rem;
        font-family: inria-regular;
        width: 100%;
    }

    button {
        background-color: #242424;
        color: #fff;
        font-family: inria-bold;
        font-size: 1.1rem;
        padding: .6rem 1rem;
        border-radius: .4rem;
        margin-top: 1rem;
    }

    .profissional {
        margin: .4rem 0 0 0;
    }

    .habilidades {
        width: 40%;
    }
`;

export default StytledListarProfissionais;