import styled from "styled-components";

const StyledLogin = styled.section`
    img {
        width: 10%;
        height: 8%;
    }

    h1 {
        font-family: inria-bold;
        font-size: 2.3rem;
        color: #fff;
        margin: -3% 0 5% 10%;
    }

    .conteudo {
        font-family: inria-light;
        font-size: 1.2rem;
        color: #fff;
        margin-left: 10%;
    }

    h2 {
        font-family: inria-bold;
        font-size: 2.3rem;
        color: #5551E3;
        margin: 6% 0 1% 2%;
    }


    label {
        font-family: inria-bold;
        font-size: 1.1rem; 
        margin: 0 0 1% 3%;
    }
    


    input {
        border: #858181 solid 2px;
        border-bottom-left-radius: 4px;
        border-top: hidden;
        border-right: hidden;
        width: 90%;
        height: 2rem;   
        margin: 0 0 8% 3%;
    }

        
    button {
        background-color: #5551E3;
        width: 25rem;
        padding: 0.6rem 0.8rem;
        color: #fff;
        font-family: inria-bold;
        font-size: 2.4rem;
        border-radius: 1.5rem;
        cursor: pointer;
        margin: 0 0 1.2rem 25%;
    }

    span {
        color: #5551E3;
    }
    
    .padding {
        padding-left: 2%;
    }

    
    .desc {
        font-family: inria-bold;
        font-size: 1.3rem;   
        letter-spacing: 1.5px; 
        margin-bottom: 10%;
    }

    .converter {
        width: 88%;
        margin-left: 2%;
    }
`;


export default StyledLogin;