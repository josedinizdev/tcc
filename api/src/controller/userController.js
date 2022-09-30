import { Router } from 'express'
import { LoginUsuario, PesquisarUsuario } from '../repository/userRepository.js'
const server = Router();

server.post('/usuario/login' , async (req, resp) =>{
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




export default server;