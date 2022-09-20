import styled from 'styled-components';

const StyledServices = styled.main`
    section:nth-child(1) {
        display: flex;
        flex-direction: row-reverse;
        background: #242424;
        height: 70vh;
    }

    img {
        background: #EF7601;
        height: 70vh;
    }

    h1 {
        font-size: .9rem;
    }

    h1, h2 {
        width: 130%;
        margin-left: 50%;
    }    

    .services-bar {
        display: flex;
        flex-direction: row-reverse;
        background-color: #696969;
        z-index: 1;

        width: 100vh;
        
    }

    .services-bar-items {
        display: flex;
        flex-direction: row-reverse;
    }
`

export default StyledServices;