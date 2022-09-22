import { Router } from 'express'
import { LoginUsuario } from '../repository/userRepository.js'
import { cadastrarUsuario } from '../repository/userRepository.js'
const server = Router();

server.post('/usuario/login' , async (req, resp) => {
  try {
    const {email, senha} = req.body;
    const resposta = await login(email,senha);
    resp.send(resposta)
  } catch (err) {
    resp.status(400).send ({
      erro: 'ocorreu um erro'
    });
  }
})

server.get('/usuario' , async (req, resp) =>{
  try { 
    const {nome,data,email} = req.body;
    const resposta = await cadastro (nome , data, email);
    resp.send(resposta)
    } catch (err) {
      resp.status(400).send ({
        erro: 'ocorreu um erro'
      });
  }
})


export default server;