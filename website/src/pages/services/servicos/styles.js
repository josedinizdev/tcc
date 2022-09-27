import styled from 'styled-components';

const StyledServices = styled.div`   
    .services__top {
        background-color: #242424;
        height: 40rem;
        background-size: 40% auto;
        img {
            width: 30rem;
            height: auto;
        }
    }
    .services__title {
        padding-top: 8rem;
        right: -10rem;
    }
    .services__img {
        width: 55%;
        height: 100%   
        div {
            top: 0;
            right: 0;
        }
    }
    .services__background {
        background-image: url('/img/services-background.svg');
        background-size: auto 100%;
        background-position: 60% ;
    }

    .services__background-color {
        background-color: #EF7601;
        opacity: .4;
    }

    .margin60 {
        margin-left: 60%;
    }
    
    /* Faixa */
    .background-filters {
        justify-content: flex-end;

        padding: .4rem 3rem;
        border-radius: .6rem;
        width: 90%;
        height: auto;
        margin-top: .6rem;
        position: absolute;
        

        button, select, input {
            background-color: #fff;
            color: rgba(0, 0, 0, 50%);
            border-radius: .1rem;
            border-right: 10px #1E4F6F solid;

            margin-right: 1rem;
            appearance: none;
            outline: none;
        }
        input {
            padding: 1rem 2rem;
            border-right: 50px #1E4F6F solid;
        }
        select, button {
            padding: 1rem 1.2rem;
            outline: none;
        }
    }
`
;

export const List = styled.div`
    .background-orange {
        background-color: #EF7601;
        width: 100%;
        height: 120vh;
        padding: 8% 5%;
    }

    .services-listar {
        width: 70%;
        height: 100%;
    }

    .perfis-listar {
        width: 28%;
        height: 100%;
        justify-content: center;
        }

    h1 {
        font-size: 1.4rem;
        margin: 0;
        padding: 0;
        width: auto;
    }

    .pesquisar-profissionais {
        width: 92%;
        h1 {
            
            font-family: inria-bold;
            font-size: 1.8rem;
        }

        input {
            padding: 1rem 2rem;
            outline: none;
            width: 60%;
            border-right: 50px #1E4F6F solid;
        }
        }
        
`;

export const CardServicoList = styled.div`
    .card { 
        background-color: #fff;
        width: 95%;
        padding: .2rem .8rem;
        border-radius: .3rem;
        box-sizing: border-box;
        margin: .3rem 2rem;
    }
    h1, h2 {
        color: #242424;
    }
    h1 {
        font-size: 1.2rem;
        font-family: inria-bold;
        line-height: 2rem;
    }
    h2 {    
        font-size: 1.1rem;
        font-family: inria-regular;
        margin: 0;
    }
`;

export default StyledServices;

