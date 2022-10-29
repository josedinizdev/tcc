import styled from "styled-components";

const StyledPesquisarUsuario = styled.main `
    section {
        height: 84vh;
        width: 95%;
    }

    section nav, section nav div {
        width: 100%;
    }

    img {
        width: 5rem;
        height: 5rem;
    }   

    h1 {
        font-size: 2.3rem;
        font: bold;
    }

    h2 {
        font-size: 1.4rem;
    }

    p {
        font-size: 1rem;
    }

    input {
        margin: 1rem;
        border-right: 3rem solid #1E4F6F;
        width: 20rem;
    }

    input, select {
        border-right: 1.5rem solid #1E4F6F;
        padding: 1rem .4rem;
    }

    select {
        margin: 1rem;
        width: 10rem;
    }

    .desc {
        margin: 0 1rem;
        width: 40%;
        line-height: 1.3rem;
    }

    .contatar {
        background-color: #000;
        font-size: 1.1rem;
        padding: 1rem 1.4rem;
        border-radius: .4rem;
    }

    .listar {
        padding: 2rem;
        height: 100%;
        overflow-y: scroll;
    }

    .card:nth-child(1) {
        margin: 0;
    }

    .card {
        width: 80%;
        box-shadow: 0 10px 4px rgba(105, 105, 105, .8);
        margin: 2rem 0;
    }

    .linha {
        margin: 1rem;
    }
`;

export default StyledPesquisarUsuario;