import styled from "styled-components";

const StyledEditarPerfil = styled.main`
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
        width: 20rem;
    }

    input, textarea {
        padding: .4rem;
        border: 1px solid #242424;
        border-radius: .4rem;
        margin-right: 1rem;
        width: 100%;
    }

    textarea {
        max-height: 10rem;
        height: 10rem;
    }

    .container-editar {
        padding: 1rem 2rem;
        height: 70vh;
        width: 100%;
    }
    .linha {
        margin: 1rem 1rem;
    }

    article button {
        border-radius: .4rem;
        font-size: 1rem;
        padding: 1rem 2rem;
        margin: 0 .5rem;
    }

    

    .alterar-img {
        margin: 0;
        background: none;
    }
`;

export default StyledEditarPerfil;