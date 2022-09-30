import { Router } from 'express'
import {VirarProfissional, AvaliaProfissional, UsuarioWorker, BuscarProfissas, BuscarProfissionaisNome} from '../repository/profissionalRepository';
const server = Router();

server.get('/profissional', async (req, resp) =>{
    try {
      const profissional =  req.params;
      const resposta = await BuscarProfissas(profissional);
      resp.status(200).send(resposta)
  
    } 
    catch (err) {
      resp.status(400).send ({
        erro: err.message
      });
    }
  })

  server.get('/profissional/:nome', async (req, resp) => {
    try {
      const {nome} = req.params;
      if(nome === undefined || nome === " ") 
      throw new Error('Não encontrado')
  
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

