import styled from "styled-components";

const StyledTable = styled.div`
    width: 90%;

    nav {
        padding: 0 1.2rem;
    }

    h1 {
        font-family: 'inria-regular';
        font: bold;
        font-size: 2.1rem;
    }
    input {
        padding: 0.6rem 1.2rem;
        width: 12rem;
        border-top-left-radius: .4rem;
        border-bottom-left-radius: .4rem;
        box-shadow: 0px 4px 8px rgba(105, 105, 105, .8);
    }

    button {
        padding: .4rem;
    }

    img {
        height: 1.8rem;
        width: 1.8rem;
    }

    ///

    table {
        margin-top: 1rem;
        height: 100%;   
    }

    tr {
        padding: .5rem;
    }

    tr:nth-child(odd) {
        background-color: #fff;
    }

    tr:nth-child(even) {
        background-color: rgba(198, 198, 198, 20%);
    }

    .titulo {
        font-family: inria-bold;
        font-size: 1.1rem;
    }

    td {
        font-family: 'inria-regular';
        font-size: 1.2rem;
    }
`;

export default StyledTable