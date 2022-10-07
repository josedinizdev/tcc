import styled from 'styled-components';

const StyledGerenciar = styled.div`
    .services {
        display: flex;
        flex-direction: column;
    }
    .services__background {
        background: url('/img/services-background.svg') #242424 no-repeat 100%;
        background-size: 100% auto;
    }   

    .services__title {
        padding: 8rem 0 0 8rem;
        color: #fff;
        font-size: 1.3rem;
    }
    .services__slogan {
        color: #fff;
        font-family: inria-regular;
        font-size: 2rem;
        padding-left: 8rem;
    }
    .services__img {
        width: 50%;
        height: 100%;
        padding-left: 8rem;
    }
    
    /* Faixa */
    .background-filters {
        justify-content: flex-end;
        padding: .4rem 3rem;
        border-radius: .6rem;
        width: 90%;
        height: auto;
        margin: 3rem 0 1rem 0;
        

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
        padding: 2% 5%;
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
        flex-wrap: wrap;
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

export default StyledGerenciar;

