import { Router } from 'express'
import {BuscarProfissas, BuscarProfissionaisNome} from '../repository/profissionalRepository.js';
const server = Router();

server.get('/profissional', async (req, resp) =>{
    try {
      const resposta = await BuscarProfissas();
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

