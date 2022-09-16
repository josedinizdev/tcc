import { createGlobalStyle } from 'styled-components';

const Common = createGlobalStyle`
    @font-face {
        font-family: 'inria-bold';
        src: url('/fonts/inria-sans/InriaSans-Bold.ttf');
    }

    @font-face {
        font-family: 'inria-bold-italic';
        src: url('/fonts/inria-sans/InriaSans-BoldItalic.ttf');
    }

    @font-face {
        font-family: 'inria-italic';
        src: url('/fonts/inria-sans/InriaSans-Italic.ttf');
    }

    @font-face {
        font-family: 'inria-light';
        src: url('/fonts/inria-sans/InriaSans-Light.ttf');
    }

    @font-face {
        font-family: 'inria-light-italic';
        src: url('/fonts/inria-sans/InriaSans-LightItalic.ttf');
    }

    @font-face {
        font-family: 'inria-regular';
        src: url('/fonts/inria-sans/InriaSans-Regular.ttf');
    }
    
    * {
        font-family: 'inria-regular';
        color: #323232;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-weight: normal;
    }

    .container {
        display: flex;
        flex-direction: row;
    }
    
    .container-column {
        display: flex;
        flex-direction: column;
    }

    .jc-between {
        justify-content: space-between;
    }

    .wh100v {
        min-width: 100vw;
        min-height: 100vh;
    }

    .w100v {
        min-width: 100vw;
    }

    .h100v {
        min-height: 100vw;
    }

    .wh100 {
        min-width: 100%;
        min-height: 100%;
    }

    .w100 {
        min-width: 100%;
    }

    .w50 {
        min-width: 50%
    }

    .h100 {
        min-height: 100%;
    }

    .h50 {
        min-height: 50%;
    }

    .uppercase {
        text-transform: capitalize;
    }

    .obrigatory::after {
        content: '*';
        color: red;
    }

    /* colors
    /* - login/register/admin
    /* #5551E3
    */
`;

export default Common;