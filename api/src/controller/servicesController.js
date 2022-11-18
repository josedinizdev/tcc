import { Router } from 'express'
import {
  BuscarServicosUsuarioAt,
  CadastrarServico,
  AtribuirCategoria,
  RedefinirCategorias,
  EditarLocal,
  CadastrarLocal,
  BuscarServicosTitulo,
  BuscarServicos,
  Deletarservico,
  DetalhesServicos,
  EditarServico,
  listarServicosAplicados,
  concluirServico,
  aplicarServicos
} from '../repository/servicesRepository.js';
const server = Router();

server.post('/servicos', async (req, resp) =>{
  try {
    //  {
	  //     "categoria": [
    //       0,
    //       0
    //     ],
	  //     "estado": "",
	  //     "cidade": "",
	  //     "endereco": "",
	  //     "numero": 0,
	  //      "cep": "",
	  //    "complemento": "",
	  //    "usuario": 0,
	  //     "titulo": "",
	  //     "descricao": "",
	  //     "ideias": "",
	  //     "requisitos": ""
    //  }
    
    const servico = req.body;

    if(!servico.usuario)
      throw new Error('Campo usuário é obrigatório.')
    else if(!servico.titulo)
      throw new Error('Campo título é obrigatório.')
    else if(!servico.descricao)
      throw new Error('Campo descrição é obrigatório.')
    else if(!servico.ideias)
      throw new Error('Campo ideias é obrigatório.')
    else if(!servico.requisitos)
      throw new Error('Campo requisitos é obrigatório.')

    const local = await CadastrarLocal(servico);
    const servicos = await CadastrarServico(servico, local.id);
    let categorias = [];
    for (let i = 0; i < servico.categoria.length; i++)
      categorias.push(await AtribuirCategoria(servico.categoria[i], servicos.id));
    
    resp.status(204).send({categoria: categorias, local: local, servico: servicos});                                        
  } catch (err) {
    resp.status(401).send ({
      erro: err.message
    });
  }
})

server.get('/servicos/s', async (req, resp) =>{
  try {
    let input = req.query;
    const resposta = await BuscarServicos(input);
    resp.status(200).send(resposta)
  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})

server.put('/servicos', async (req, resp) => {
  try {
    /* {
    /     "servico": 0,
    /*    "local": 0,
    /*    "categoria": [
    /*      0,
    /*      0
    /*    ],
    /*    "estado": "",
    /*    "cidade": "",
    /*    "endereco": "",
    /*    "numero": 0,
    /*    "cep": "",
    /*    "complemento": "",
    /*    "usuario": 0,
    /*    "titulo": "",
    /*    "descricao": "",
    /*    "ideias": "",
    /*    "requisitos": ""
    /* }
    */
    const input = req.body;
    const local = await EditarLocal(input);
    const servicos = await EditarServico(input);
    const reset = await RedefinirCategorias(input.servico)
    let categorias = [];
    for (let i = 0; i < input.categoria.length; i++)
      categorias.push(await AtribuirCategoria(input.categoria[i], input.servico));
    resp.status(200).send({ categoria: categorias, local: local, servico: servicos, reset: reset })
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    });
    console.log(err);
  }
});

server.get('/servicos/usuario/:id', async (req, resp) =>{
  try {
    const id = Number(req.params.id);
    const resposta = await BuscarServicosUsuarioAt(id);
    resp.status(200).send(resposta)
  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})

server.get('/servicos/:titulo' , async (req, resp) =>{
  try {
    const {titulo} = req.params;
    if(titulo === undefined || titulo === " ") 
        throw new Error('Não encontrado')


    const resposta = await BuscarServicosTitulo(titulo);
    resp.status(200).send(resposta)
  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})


server.get('/servicos/detalhes/:id', async (req, resp) => {
    try {
      const id = Number(req.params.id);
      
      if(id === undefined || id === NaN)
        throw new Error('ID inexistente');

      const resposta = await DetalhesServicos(id);
      resp.status(200).send(resposta);
    }

    catch(err) {
      resp.status(400).send(err.message)
    }
})


server.delete('/servicos/remover/:id' , async (req, resp) => {
  try {
    const id = Number(req.params.id);
    if(id === undefined || id === " ") 
      throw new Error('Perfil não encontrado ou inexistente.')
    const removerServico = await Deletarservico(id);
    const resposta = await (id, removerServico)
    resp.status(200).send(resposta)
  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})

server.get('/servicos/worker/', async (req, resp) => {
  try {
    const body = req.body
    /* {
    /*    "categoria": undefined,
    /*    "nome": undefined,
    /*    "trabalhador": 1
    /* }
    */
    if(body.trabalhador === undefined || body.trabalhador === " ") 
      throw new Error('Perfil não encontrado ou inexistente.')
    const lista = await listarServicosAplicados(body);
    resp.status(200).charsetsend(lista)
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    });
    console.log(err)
  }
})

server.post('/servicos/aplicar/e', async (req, resp) => {
  try {
    const input = req.body;
    console.log('a')
    const res = aplicarServicos(input)
    console.log(res)
    resp.send(res)
  } catch (err) {
    resp.status(400).send({err: err.message})
  }
})

server.post('/servicos/worker/done/:id', async (req, resp) => {
  try {
    const id = req.params.id
    const resposta = await concluirServico(id)
    resp.status(200).send(resposta)
  } catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
    console.log(err)
  }
})

export default server;