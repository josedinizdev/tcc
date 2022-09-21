import styled from 'styled-components';

const StyledServices = styled.main `   
    /* Header */
    section:nth-child(1) {
        background: #EF7601 url('/img/services-background.svg') no-repeat right;
        background-size: auto;
        height: 60vh;
    }


    .header-img-background {
        background-color: #242424;
        height: 60vh;
        width: 40%;
    }

    .margin60 {
        margin-left: 60%;
    }
    
    h1 {
        margin-top: 5%;
        width: 10rem;
        font-size: 1.1rem;
    }

    h2 {
        width: 280%; // Tive que tacar isso pq nao tava alinhando, dps troca KDKASDKASKDASK//
    }

    .withu-logo-header {
        width: 330%;
        height: 30%;
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
            cursor: pointer;
            outline: none;

        }
    }
`
;

export const StyledListar = styled.div`
    .background-orange {
        background-color: #EF7601;
        width: 100vw;
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
        }

    h1 {
        font-size: 1.4rem;
        margin: 0;
        padding: 0;
        width: auto;
    }

    input {
            padding: .6rem .5rem;
            outline: none;
        }
`;

export default StyledServices;

