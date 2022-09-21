import styled from 'styled-components';

const StytledListarProfissionais = styled.div`
    .card { 
        background-color: #fff;
        width: auto;
        height: 100vh;

        padding: .2rem .8rem;
        border-radius: .3rem;
        margin: .4rem 2rem;
        box-sizing: border-box;
        height: auto;
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
        width: auto;
    }

    h2 {    
        font-size: 1.1rem;
        font-family: inria-regular;
        width: 70%;
    }

    button {
        display: flex;
        justify-content: flex-end;

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
        width: 60%;
    }


`;

export default StytledListarProfissionais;