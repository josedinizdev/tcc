import styled from 'styled-components';

const StyledFooter = styled.section`
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
    align-items: center;
    border: 1px solid #242424;
}

h1 {
    font-size: 1.8rem;
    font-family: inria-regular;
    letter-spacing: 1px;
}

p {
    font-size: 1rem;
}

h2 {
    font-size: 1.4rem;
    width: 60%;
}

.icon-contato {
    background-color: #242424;
    border-radius: 1.2rem;
    width: 2rem;
    height: 2rem;
    justify-content: center;
}

img {
    z-index: 1;
    width: 1.3rem;
    height: 1.3rem;
}
`

export default StyledFooter;