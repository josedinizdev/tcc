import styled from 'styled-components';

const StyledProfile = styled.div`
    height: 100%;

.infoPerfil {
    height: 15rem;
    width: 18rem;
    max-width: 18rem;

    .buttons {
        margin-top: .8rem;
        font-family: 1.2rem;
        text-transform: uppercase;
        color: #fff;
        background-color: #7370FF;
        width: auto;
        padding: .5rem;
        border-radius: .6rem;
    }

    .contato {
        margin-left: 10rem;
        background-color: #d9d9d9;
    }

    .cargo {
        width: 100%;
    }

    .absolute {
        position: absolute;
    }
}
.height100 {
    height: 100%;
}

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


nav > div > a, nav > a {
    border-radius: .6rem;
}

nav {
    margin-top: 1rem;
}

.sairButton, .nav-linkar {
    font-size: 1rem;
    width: 100%;
    padding: 1rem;
    background-color: #fff
}

.sairButton {
    border-radius: .4rem;
}

.cargo {
    width: 10%;
}

`;

export default StyledProfile;