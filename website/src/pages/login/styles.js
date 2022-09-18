import styled from "styled-components";

const StyledLogin = styled.section`
    .login__logo {
        width: 4.7rem;
        height: auto;
    }
        
    .login__button {
        width: 100%;
        padding: .4rem 0 .7rem;
        font-size: 2.3rem;
        background-color: #5551E3;
        height: fit-content;
        color: #fff;
        border-radius: 1.5rem;
        cursor: pointer;
        margin-bottom: 1rem;
    }

    .login__form {
        label {
            margin-bottom: .4rem;
        }

        input {
            border: #858181 solid 4px;
            border-top: none;
            border-right: none;
            border-radius: 0 0 0 10px;
            outline: none;
            height: 2rem;
            margin-bottom: 2rem;
        }
    }
    
    div:nth-child(2) > div {
        padding: 5rem 0;
        width: 75%
    }
`;

export const BackgroundDiv = styled.div`
    background: #5551E3 url('/img/background-login-cadastro.png') no-repeat bottom;
    background-size: 75% auto;

    div:nth-child(2) {
        margin-top: 3rem; 
        width: 75%;

        h1 {
            margin-bottom: 2rem;
        }
    }
`;


export default StyledLogin;