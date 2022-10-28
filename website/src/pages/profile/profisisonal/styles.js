import styled from "styled-components";

const StyledProfissional = styled.section`
width: 100%;

.w80 {
    width: 80%;
}

.finalizar{
    border-radius: .6rem;
}

label {
    font-family: 'inria-regular';
    font-size: 1.4rem;
    font: bold;
    width: 100%;
    margin: .6rem 0;
    width: 15rem;
}

input, textarea {
    padding: .4rem;
    border: 1px solid #242424;
    border-radius: .4rem;
    width: 25%;
    margin-bottom: 1rem;
}

textarea {
    max-height: 10rem;
    height: 12rem;
    width: 15rem;
    margin-left: 1rem;
}
`;

export default StyledProfissional;