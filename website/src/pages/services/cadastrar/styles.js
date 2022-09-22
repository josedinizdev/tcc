import styled from 'styled-components';

const StyledCadastrarServico = styled.main` 
  background-color: #EF7601;

  .background { 
    background-color: rgb(255, 220, 188);
    border-radius: .4rem;
    padding: 2rem 1rem;
    width: 65%;
    height: 100%;

    .titulo-categoria {
      margin-bottom: .8rem;
      padding: .6rem .5rem;
      width: 12.5rem;
    }

    .requisitos-margin {
      margin-left: 1rem;
    }

    .descricao, .publicar-requisitos {
      margin: 0 0 .8rem 0;
      padding: .6rem .5rem 25rem .6rem;
      width: 23rem;
      height: 100%;
    }

    .endereco-cep {
      padding: .6rem .5rem;
      width: 12rem;
    }

    input, select {
      border: 1px solid #242424;
      border-radius: .5rem;
      appearance: none;
      outline: none;
      font-size: 1rem;
      width: 10%;
    }

    button {
      background-color: #1E4F6F;
      border-radius: 1.1rem;
      font-size: 1.2rem;
      padding: 1rem 3rem;
      cursor: pointer;
    }


  }  

  h2 {
      font-size: 1rem;
    }
  img {
    width: 1.2%;
    height: 1%;
    margin-right: .2rem;
  }
  
`

export default StyledCadastrarServico;  