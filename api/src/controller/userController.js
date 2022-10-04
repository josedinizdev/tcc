import { Router } from 'express'
import { CadastrarLogin, CadastroUsuario, editarPerfil, ListarUsuario, LoginUsuario, PesquisarUsuario } from '../repository/userRepository.js'
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

server.post('/usuario', async (req, resp) =>{
  try {
      
  } 
  catch (err) {
    resp.status(401).send ({
      erro: err.message
    });
  }
})

server.put('/usuario/perfil/alterar/:id', async(req, resp) => {
  try {
    const id = Number(req.params.id);
    const novoPerfil = req.body

    if(!novoPerfil.nome)
        throw new Error("Campo do nome é obrigatório")
    else if(!novoPerfil.descricao)
        throw new Error("Campo do descricao é obrigatório")
    else if(!novoPerfil.email)
      throw new Error("Campo do email é obrigatório")
    else if(!novoPerfil.celular)
      throw new Error("Campo do telefone é obrigatório")
    else if(!novoPerfil.genero)
      throw new Error("Campo do genero é obrigatório")

      const resposta = await editarPerfil(id, novoPerfil);
      resp.status(200).send(resposta);
  }

  catch(err) {
    resp.status(400).send(err.message)
  }
})

server.get('/usuario/perfil' , async (req, resp) =>{
  try {
    const resposta = await ListarUsuario();
    resp.status(200).send(resposta)
  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})

server.get('/usuario/perfil/:nome' , async (req, resp) =>{
  try {
    const {nome} = req.params;
    if(nome === undefined || nome === " ") 
        throw new Error('Não encontrado')


    const resposta = await PesquisarUsuario(nome);
    resp.status(200).send(resposta)
  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})


export default server;