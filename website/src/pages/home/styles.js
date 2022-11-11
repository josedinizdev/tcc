import styled from 'styled-components';

const StyledHome = styled.main`
    padding: 0;
h2  {
    font-size: 1.1rem;
    letter-spacing: 1px;
    font-weight: 600;
    margin-bottom: 1rem;
}

.bk-black    {
    background-color: #000;
    width: 10%;
    height: auto;
}

header {
    .header-black {
        background-color: #242424;
        width: 70%;
        height: 60vh;
    }

    .header-img {
        background: url('/img/home-background-header.png') no-repeat 100%;
        height: auto;
        width: 100%;
        max-height: 60vh;
        background-size: 100% 100%;
    }

    .header-margin-l {
        margin-left: 1rem;
    }

    img {
        width: 100%;
        height: 50%;
    }

    h1 {
        font-size: 1.8rem;
        width: 60%;
        line-height: 2.5rem;
        letter-spacing: 1px;
        font-weight: 600;  
    }
    p {
        font-family: 'inria-regular';
        font-size: 1.7rem;
        width: 80%;
        line-height: 2rem;
        font-weight: 400;
        margin-top: .8rem;
    } 

    h2 {
        flex-direction: row-reverse;
        width: 60%;
        margin-right: 4rem;
    }

    .p2 {
        width: 55%;
        font-size: 1.5rem;
    }

    .espacamento {
        padding-bottom: 1.5rem;
    }
}

.faixa1 {
    background-color: #EF7601;
    padding: 1.5rem 0;
    height: 75vh;

    .container-background-f1 {
        width: 100%;
        margin: 0 1rem;
    }

    h1 {
        font-family: 'inria-regular';
        font-size: 2.4rem;
        font-weight: bold;
        width: 80%;
        line-height: 3rem;
        margin-bottom: 1.2rem;
    }

    p {
        font-family: 'inria-regular';
        font-size: 1.5rem;
        letter-spacing: 1px;
        width: 75%;
    }
    
    button {
        font-family: 'inria-regular';
        font-size: .9rem;
        font-weight: bold;       
        width: 40%;
        color: #fff;
        background-color: #FF9226;
        border-radius: .4rem;
        padding: .8rem 1.5rem;
    }

    .w70 {
        width: 70%;
    }

    .w60 {
        width: 60%;
    }

    .botao-div {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: flex-end;
    }
}

.faixa2 {
    width: 100%;
    height: 60vh;

    .trabalho-juntar {
        padding: 2rem 2rem 2rem 3rem;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
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
        width: 80%;
        line-height: 2.6rem;
        color: #EF7601;
    }

    p {
        font-family: 'inria-regular';
        font-size: 1.6rem;
        width: 75%;
        margin-top: 1rem;
    }

    .juntar-button-div {
        display: flex;
        height: 100%;
        align-items: flex-end;
    }

    a {
        font-family: 'inria-regular';
        font-size: 1.2rem;
        justify-self: flex-end;
        background-color: #FF9226;
        padding: .8rem 2.4rem;
        border-radius: .6rem;
    }

    .img {
        background-image: url('/img/top-image-background.png');
        background-size: 100% 100%;
        width: 50%;
    }
}

.faixa4 {
    padding: 1rem 0;

    h1 {
        font-family: 'inria-regular';
        font-weight: bold;
        font-size: 2rem;
        color: #EF7601;
    }
    
    .valores-div {
        width: 60%;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 2rem;
        font: bold;
        color: #1E4F6F;
    
        width: 20%;
        margin: 1rem 0 .5rem 0;
        border: 1px solid #000;
        padding: 1rem;
        border-radius: 999px;
    }

    img {
        width: 2rem;
        height: 2rem;
        margin-left: .8rem;
        padding: 0;
    }

    p {
        font-family: 'inria-regular';
        font-size: 1.2rem;

        text-align: center;
        width: 50%;
    }
}

.faixa5 {
    padding: 2rem 1rem;
    
    img {
        height: 10rem;
        width: 10rem;
        border-radius: 100%;
        border: 2px solid #242424;
        margin-bottom: 1rem;
    }

    h3, p {
        text-align: center;
    }

    p {
        width: 80%;
    }
}
`;

export default StyledHome;