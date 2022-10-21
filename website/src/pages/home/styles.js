import styled from 'styled-components';

const StyledHome = styled.main`
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
        background: url('/img/home-background-header.png') #EF7601 no-repeat 100%;
        height: auto;
        width: 100%;
        max-height: 60vh;
        background-size: 100% 100%;
    }

    img {
        width: 100%;
        height: 50%;
    }

    h1 {
        font-size: 2.3rem;
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

    .p2 {
        width: 55%;
        font-size: 1.9rem;
    }

    .espacamento {
        padding-bottom: 1.5rem;
    }
}

.faixa1 {
    background-color: #EF7601;
    padding: 1.5rem 0;

    h1 {
        font-family: 'inria-regular';
        font-size: 2.4rem;
        font-weight: bold;
        width: 50%;
        line-height: 3rem;
        margin-bottom: 1.2rem;
    }

    p {
        font-family: 'inria-regular';
        font-size: 1.5rem;
        letter-spacing: 1px;
        width: 50%;
    }
    
    button {
        font-family: 'inria-regular';
        font-size: .9rem;
        font-weight: bold;       
        margin-top: 12rem;
        width: 25%;
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
    .botao-contato {
        margin-top: 10rem;
    }
}

.faixa2 {
    width: 100%;
    

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
        width: 50%;
        line-height: 2.6rem;
        color: #EF7601;
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
        margin-top: 20rem;
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

    span {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 2rem;
        font: bold;
        color: #1E4F6F;
    
        width: 15%;
        padding: 1rem;
        margin: 1rem 0 .5rem 0;
        border: 1px solid #C8D2D2;
        border-radius: 100%;
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
        width: 36%;
    }
}

.faixa6 {
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
        width: 90%;
    }
}
`;

export default StyledHome;