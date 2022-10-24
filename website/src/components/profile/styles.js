import styled from 'styled-components';

const StyledProfile = styled.div`
    height: 100%;



    aside {
        max-height: 10rem;
    }

    article > div > img {
        width: 4rem;
        height: 4rem;
        margin: 0 .5rem .5rem 0;
    }

    nav > div > a > img, nav > button > img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1rem;
    }

    .nav-linkar {
        font-size: 1rem;
        width: 100%;
        padding: 1rem;
        background-color: #fff;
    }

    nav > div > a, nav > a {
        border-radius: .6rem;
    }

    nav {
        margin-top: 1rem;
    }



    .icon-editar {
        width: 1rem;
        height: 1rem;
        position: absolute;
        
    }

`;

export default StyledProfile;