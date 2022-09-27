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

    @font-face{
        font-family: 'code-light';
        src: url('/fonts/source-code-pro/SourceCodePro-Light.ttf');
    }

    @font-face{
        font-family: 'code-regular';
        src: url('/fonts/source-code-pro/SourceCodePro-Regular.ttf');
    }

    @font-face{
        font-family: 'code-medium';
        src: url('/fonts/source-code-pro/SourceCodePro-Medium.ttf');
    }

    @font-face{
        font-family: 'code-semibold';
        src: url('/fonts/source-code-pro/SourceCodePro-SemiBold.ttf');
    }

    @font-face{
        font-family: 'code-bold';
        src: url('/fonts/source-code-pro/SourceCodePro-Bold.ttf');
    }

    @font-face {
        font-family: 'filicudi-solid' ;
        src: url('/fonts/source-code-pro/filicudi-solid.ttf');
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'inria-bold'
    }

    h1 {
        font-size: 3.4rem;
        line-height: 4.2rem;
        letter-spacing: 0.001rem;
    }

    h2 {

    }

    h3 {

    }

    .subtitle-h1 {
        font-size: 1.4rem;
        line-height: 1.7rem;
        letter-spacing: 0.001rem;
    }
    
    * {
        font-family: 'inria-regular';
        color: #323232;
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-weight: normal;
    }

    .code-bold{
        font-family: 'code-bold';
    }

    .code-semibold{
        font-family: 'code-semibold';
    }

    .code-regular{
        font-family: 'code-regular';
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

    .jc-around {
        justify-content: space-around;
    }

    .al-center{
        align-items: center;
    }

    .jc-start {
        justify-content: flex-start;
    }
    
    .jc-center{
        justify-content: center;
    }

    .jc-end {
        justify-content: flex-end;
    }

    .txt-center{
        text-align: center;
    }

    .whf {
        width: fit-content;
        height: fit-content;
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
        text-transform: uppercase;
    }

    .obrigatory::after {
        content: '*';
        margin-left: 0.5%;
        color: red;
    }

    .justaspace::after {
        content: ' ';
    }

    .pointer {
        cursor: pointer;
    }

    /* colors
    /* - login/register/admin
    /* #5551E3
    */

    .cFFFFFF {
        color: #FFFFFF;
    }

    .blue {
        color: #5551E3;
    }

    .background-transparent {
        background-color: rgba(105, 105, 105, 24%);
        box-shadow: 0 .6rem rgba(0, 0, 0, 24%);
    }

    .c1E4F6F {
        color: #1E4F6F;
    }

    .z1 {
        z-index: 1;
    }
    .z2 {
        z-index: 2;
    }
    .z5 {
        z-index: 5;
    }
    .z6 {
        z-index: 6;
    }
    .fixed {
        position: fixed;
    }
    .relative {
        position: relative;
    }
    .absolute {
        position: absolute;
    }
`;

export default Common;