import styled from "styled-components";

const StyledContatos = styled.main`
nav {
    width: 100%;
    padding: 0 1.2rem;
    

    h1 {
        font-family: 'inria-regular';
        font: bold;
        font-size: 2.1rem;
    }
    input {
        padding: .8rem 1.2rem;
        width: 12rem;
        border-top-left-radius: .4rem;
        border-bottom-left-radius: .4rem;
        box-shadow: 0px 4px 8px rgba(105, 105, 105, .8);
    }

    button {
        padding: 1rem;
    }

    .btn3rem {
        padding: .3rem;
    }

    img {
        height: 1.8rem;
        width: 1.8rem;
    }

    //

    .contatoCard{
        height: 16rem;
        width: 100%;
    }

    #setas {
        height: 2rem;
        width: 2rem;
    }

    .carrousel {
        background-color: #fff;
        height: 60vh;
    }

    .carrousel-card { 
        margin: 0 1rem;
        border: 5px solid #d9d9d9;
        padding: 1.5rem 1.2rem;

        .imgPerfil {
            width: 5rem;
            height: 5rem;
        }

        h2 {
            margin: 1rem 0;
            font-size: 1.6rem;
        }

        img {
            width: 1.5rem;
            height: 1.5rem;
        }

    }
}
`;

export default StyledContatos;