import styled from 'styled-components';

const StyledServices = styled.main `   
    /* Header */
    section:nth-child(1) {
        background: #EF7601 url('/img/services-background.svg') no-repeat right;
        background-size: 60% auto;
        height: 60vh;
    }

    img {
        opacity: 70%;
        height: 100%;
        width: 58.5%;
        z-index: 1;
    }

    .header-img-background {
        background-color: #242424;
        height: 60vh;
        width: 40%;
    }

    h1, h2, img {
        margin-left: 60%;
    }
    
    h1 {
        margin-top: 5%;
        width: 10rem;
        font-size: 1.1rem;
    }

    h2 {
        width: 232%; // Tive que tacar isso pq nao tava alinhando, dps troca KDKASDKASKDASK//
    }

    img {
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

            margin-right: 1rem;
            appearance: none;
            outline: none;
        }
        input {
            padding: 1rem 2rem;
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
        width: 100%;
        height: 100vh;
        padding: 5% 5%;
    }

    .services-listar {
        width: 70%;
        height: 100%;
    }

    .perfis-listar {
        width: 25%;
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


{/* 1 Tentativa 

    section:nth-child(1) {
        background: #EF7601;
        background-size: 60% auto;
        height: 60vh;
        flex-direction: row-reverse;
    }

    img {
        opacity: 70%;
        height: 60vh;
    }

    div {

    }
*/}


{/* 2 Tentativa 

    section:nth-child(1) {
        background: #EF7601 url('/img/services-background.svg') no-repeat right;
        background-size: 60% auto;
        height: 60vh;
    }

    img {
        opacity: 70%;
        height: 60vh;
        width: 58.5%;
        z-index: 1;
    }

    div {
        background-color: #242424;
        height: 60vh;
        width: 40%;
    }
*/}