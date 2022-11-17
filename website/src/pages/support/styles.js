import styled from "styled-components";

const StyledSuporte = styled.main`
width: 100%;
height: 100vh;
background-color: #EF7601;

section:nth-child(1) {
    width: 50%;
    background-color: #242424;

    h1 {
        font-size: 2.4rem;
        padding: 1rem;
        margin: 3rem;
    }
} 


section:nth-child(2) {
    background: url("/img/estudando-background.png") no-repeat 100%;
    background-size: auto 100%;
    opacity: .9;
    width: 50%;

    input, textarea {
        border-radius: .4rem;
        box-shadow: 3px 3px 16px #c9c9c9;
        font-size: 1rem;

        flex-wrap: wrap;
        width: 100%;
        margin: .5rem 0;
        padding: .6rem;
    }

    input {
        height: 3rem;
    }

    textarea {
        height: 15rem;
        margin: 2   rem 0;
        overflow-y: scroll;
    }

    .envolvido {
        width: 60%;
    }

    ::placeholder {
        color: #888;
    }


    .width {
        width: 75%;
    }

    button {
        border-radius: .8rem;
        padding: .6rem 2.4rem;
        font-size: 1.1rem;
    }
}
`;

export default StyledSuporte;
