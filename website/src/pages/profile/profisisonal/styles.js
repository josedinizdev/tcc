import styled from "styled-components";

const StyledProfissional = styled.section`

button{
    padding: 1rem 2.5rem;
    border-radius: .6rem;
}

section {
    width: 95%;
    height: 84vh;
}

form {
    width: 100%;
    padding: 2rem;
}

label {
    font-family: 'inria-regular';
    font-size: 1.4rem;
    font: bold;
    width: 100%;
    margin: 1rem 0;
    width: 13rem;
}

.estado {
    width: 10rem;
}

input, textarea {
    font-size: 1.1rem;
    padding: .4rem;
    border: 1px solid #242424;
    border-radius: .4rem;
    margin-bottom: 1rem;
    width: 25rem;
}

textarea {
    max-height: 10rem;
    height: 12rem;
}

.desc {
    height: 100%;
}

.botaoTamanho {
    height: 40%;
}
`;

export default StyledProfissional;