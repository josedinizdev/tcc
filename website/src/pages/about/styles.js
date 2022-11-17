import styled from 'styled-components';

const StyledAbout = styled.div`
width: 100%;
height: 100vh;
background-color: #EF7601;

header {
    width: 100% ;
    height: 50vh;

    .lEsquerdo-margin {
        margin-left: 2rem;
    }

    .b242424 {
        background-color: #242424;
    }

    .w50p {
        width: 50%;
    }

    .withu {
        height: 50%;
    }

    .background {
        background-color: #EF7601;
        width: 100%;
        height: 100%;
        opacity: .5;
    }

    p {
        font-family: 'inria-regular';
        font-size: 1.7rem;
        width: 80%;
        line-height: 2rem;
        font-weight: 400;
        margin-top: .8rem;
    } 
}

section {
    width: auto;
    height: 50vh;

    div {
        width: 70%;
    }

    p {
        font-family: 'inria-regular';
        font-size: 1.4rem;
        width: 30%;
    }

    .texto2 {
        margin-top: 10rem;
        display: flex;
        justify-self: flex-end;
        align-items: flex-end;
    }
}
`;

export default StyledAbout;