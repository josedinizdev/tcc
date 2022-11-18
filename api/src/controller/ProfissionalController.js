import { Router } from 'express'
import {BuscarProfissas, BuscarProfissionaisNome, DeletarContato, UsuarioWorker, VirarProfissional} from '../repository/profissionalRepository.js';
import { BuscarServicosUsuarioAt, BuscarServicosUsuarioAtHis } from '../repository/servicesRepository.js';
const server = Router();

server.post('/profissional', async (req, resp) => {
  try {
    const input = req.body;
    if (!input.usuario)
      throw new Error('Usuario não foi informado')
    else if (!input.cpf)
      throw new Error('CPF não foi informado')
    else if (!input.estado)
      throw new Error('Estado não foi informado')
    else if (!input.email)
      throw new Error('Email Profissional não foi informado')
    else if (!input.cargo)
      throw new Error('Cargo não foi informado')
    else if (!input.habilidade)
      throw new Error('Habilidade não foi informado')
    const resposta = await VirarProfissional(input)
    resp.status(200).send(resposta)
  } catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
    console.log(err)
  }
})

server.get('/profissional/:id', async (req, resp) => {
  try {
    const id = req.params.id
    const worker = await UsuarioWorker(id)
    console.log(worker)
    if(!worker)
      throw new Error('Não identificado')
    resp.status(200).send(worker)
  } catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})

server.get('/profissional/servicos/:id', async(req, resp) => {
  try {
    const id = req.params.id
    const serv = await BuscarServicosUsuarioAt(id)
    resp.send(serv)
  } catch (err) {
    resp.status(400).send({err: err.message})
  }
})

server.get('/profissional/servicos/his/:id', async(req, resp) => {
  try {
    const id = req.params.id
    const serv = await BuscarServicosUsuarioAtHis(id)
    resp.send(serv)
  } catch (err) {
    resp.status(400).send({err: err.message})
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

server.delete('/profissional/contato/remover/:id', async (req, resp) => {
  try {
    const id = Number(req.params.id);
    if(id === NaN || id < 0) 
    throw new Error('Não encontrado')

    const resposta = await DeletarContato(id);
    resp.status(200).send(resposta)

  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})


export default server;

