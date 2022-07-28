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

    

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
    
    * {
        color: #323232;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-weight: normal;
    }
`;

export default Common;