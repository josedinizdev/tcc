import styled from "styled-components";

const StyledEditarPerfil = styled.main`

    section {
        height: 84vh;
        width: 95%;
    }
    
    img {
        width: 8rem;
        height: 8rem;
    }

    label {
        font-family: 'inria-regular';
        font-size: 1.4rem;
        font: bold;
        width: 100%;
        margin: .6rem 0;
        width: 30rem;
    }

    input, textarea {
        padding: .4rem;
        border: 1px solid #242424;
        border-radius: .4rem;
        width: 100%;
    }

    textarea {
        max-height: 10rem;
        height: 12rem;
        width: 25rem;
        margin-left: 1rem;
    }

    .container-editar {
        padding: 1rem 2rem;
        height: 100%;
        width: 100%;
    }

    .linha {
        margin: 1rem;
    }

    .editarFoto {
        visibility: hidden;
    }

    div button {
        border-radius: .4rem;
        font-size: 1rem;
        padding: 1rem 2rem;
        margin: 0 .5rem;
    }

    .input {
        margin-left: 1rem;
        width: 25rem;
    }

    .marg-top2r {
        margin-top: 2.5rem;
    }

    .marg-right20r {
        margin-right: 20rem;
    }

    .profissional {
        padding: .8rem 1rem;
        border-radius: .6rem;
    }
`;

export default StyledEditarPerfil;