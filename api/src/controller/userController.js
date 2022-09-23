import { Router } from 'express'
import { LoginUsuario, BuscarServicosTitulo, BuscarProfissionaisNome } from '../repository/userRepository.js'
const server = Router();

server.post('/usuario/login/' , async (req, resp) =>{
  try {
    const {email, senha} = req.body;
    const resposta = await LoginUsuario(email, senha);

    if(!resposta) {
      throw new Error('Credenciais Inválidas');
    }

    resp.status(200).send(resposta)

  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})


server.post('/servicos/buscar' , async (req, resp) =>{
  try {
    const {titulo} = req.body;
    const resposta = await BuscarServicosTitulo(titulo);

    resp.status(200).send(resposta)

  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})


server.post('/usuario/buscar' , async (req, resp) =>{
  try {
    const {nome} = req.body;
    const resposta = await BuscarProfissionaisNome(nome);

    resp.status(200).send(resposta)

  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})


export default server;