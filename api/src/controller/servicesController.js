import { Router } from 'express'
import { CadastrarServico} from '../repository/servicesRepository.js';
const server = Router();

server.post('/servico', async (req, resp) =>{
  try {
    const novoService = req.body;

    const resposta = await CadastrarServico(novoService);

    if(!novoService.usuario)
      throw new Error('Campo usuário é obrigatório.')
    else if(!novoService.titulo)
      throw new Error('Campo título é obrigatório.')
    else if(!novoService.descricao)
      throw new Error('Campo descrição é obrigatório.')
    else if(!novoService.ideias)
      throw new Error('Campo ideias é obrigatório.')
    else if(!novoService.requisitos)
      throw new Error('Campo requisitos é obrigatório.')
    
    resp.status(204).send(resposta);                                        
  } 

  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})


export default server;