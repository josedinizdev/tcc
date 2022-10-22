import styled from "styled-components";

const StyledJuntar = styled.section `
.faixa2 {
    width: 100%;
}

.trabalho-juntar {
    padding: 2rem 2rem 2rem 3rem;
    display: flex;
    flex-direction: column;
    background-color: #242424;
    width: 50%;
    height: 100%; 

    h2, h1, p {
        align-self: flex-start;
        justify-self: center;
    }
}


h1 {
    font-family: 'inria-regular';
    font-weight: bold;
    font-size: 2.4rem;
    width: 50%;
    line-height: 2.6rem;
    color: #EF7601;
}

h2  {
    font-size: 1.1rem;
    letter-spacing: 1px;
    font-weight: 600;
    margin-bottom: 1rem;
}   

p {
    font-family: 'inria-regular';
    font-size: 1.6rem;
    width: 40%;
    margin-top: 1rem;
}

button {
    font-family: 'inria-regular';
    font-size: 1.2rem;
    justify-self: flex-end;
    background-color: #FF9226;
    padding: .8rem 2.4rem;
    border-radius: .6rem;
    margin-top: 10rem;
}

.img {
    background-image: url('/img/top-image-background.png');
    background-size: 100% 100%;
    width: 50%;
}
`;

export default StyledJuntar;