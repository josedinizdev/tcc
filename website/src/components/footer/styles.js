import styled from 'styled-components';

const StyledFooter = styled.footer`
padding: 1rem;
bottom: 0;
background-color: #000;
color: #fff;

h1, h2, p {
    color: #fff;    
}

.sobre {
    align-items: center;
    width: 40%;
    line-height: 1.2rem;
}

.linha {
    border: 1px solid #242424;
}

.linha:nth-child(2) {
    margin: 1rem 0;
}

h1 {
    font-size: 1.8rem;
    font-family: inria-regular;
    letter-spacing: 1px;
}

p {
    font-size: 1rem;
    text-align: center;
    width: 80%;
}

h2 {
    font-size: 1.4rem;
    width: 60%;
}

.icon-contato {
    background-color: #242424;
    border-radius: 1.2rem;
    padding: .5rem;
    margin-bottom: .8rem;
}

img {
    width: 1.3rem;
    height: 1.3rem;
}

.withu-logo {
    height: 9rem;
    width: 10rem;
}

section {
    padding: 0 2rem;
}

form {
    width: 20%;

    label {
        font-family: 'inria-regular';
        font-size: 1.1rem;
    }

    input[type='textarea'] {
        height: 100%;
        margin-top: .4rem;

        background-color: rgba(205, 205, 205, 32%);
        border-radius: .8rem;

        font-size: 1rem;
    }
    
    button {
        font-size: 1.1rem;
        text-align: center;
        background-color: #CF2427;
        padding: .4rem 2rem;
        border-radius: 1rem;
    }
}

.contato {
    p {
        font-size: 1.2rem; 
        margin-left: .6rem;
        text-align: start;
        margin-bottom: .5rem;
        width: 60%;
    }

    img {
        height: 1.5rem;
        width: 1.5rem;
    }

    .telefone-icon {
        height: 1.8rem;
    }
    .endereco-icon {
        height: 2rem;
    }
}
`

export default StyledFooter;