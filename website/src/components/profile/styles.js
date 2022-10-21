import styled from 'styled-components';

const StyledProfile = styled.div`
    max-width: 20vw;
    height: 70vh;

    aside {
        max-height: 10rem;
    }

    article > div > img {
        width: 4rem;
        height: 4rem;
        margin: 0 1rem 1.2rem 0;
    }

    nav > div > button > img, nav > button > img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1rem;
    }

    button {
        font-size: 1rem;
        width: 100%;
        padding: 1rem;
        background-color: #fff;
    }

    nav > div > button, nav > button {
        border-radius: .6rem;
    }

    nav {
        margin-top: 1rem;
    }

`;

export default StyledProfile;