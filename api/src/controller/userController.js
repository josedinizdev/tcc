import { Router } from 'express'
import { AdicionarContato, AlterarFoto, CadastrarLogin, CadastroUsuario, DeletarLogin, DeletarUsuario, DescobrirContatoUsuario, editarPerfil, ListarMeusContatos, ListarUsuario, LoginUsuario, PesquisarUsuario, VerDetalhesPerfil } from '../repository/userRepository.js'
import multer from 'multer';
const server = Router();
const upload = multer({dest: 'storage/fotoPerfil'})

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
    })
  }
})

server.post('/usuario/cadastro', async (req, resp) => {
  try { 
      const novoUsuario = req.body;
      const novoCadastro = await CadastroUsuario(novoUsuario);
      resp.status(200).send({novoCadastro})
  } 
  catch (err) {
    resp.status(401).send ({
      erro: err.message
    });
  }
})

server.post('/usuario/cadastro/:id', async (req, resp) => {
  try {
      const id = req.params.id;
      const novoLogin = req.body;
      const result = CadastrarLogin(id, novoLogin.senha);
      if(!novoLogin.senha) 
        throw new Error('Campo da senha é obrigatório');

      resp.status(200).send(result);

      
  }
  catch(err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

server.get('/usuario/:id', async (req, resp) => {
  try {
    const id = req.params.id
    if (!id)
      throw new Error('Parametro invalido');
    const resposta = await VerDetalhesPerfil(id);
    resp.status(200).send(resposta);
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

server.put('/usuario/perfil/alterar/:id', async(req, resp) => {
  try {
    const id = Number(req.params.id);
    const novoPerfil = req.body

    if(!novoPerfil.nome)
        throw new Error("Campo do nome é obrigatório")
    if(!novoPerfil.descricao)
      throw new Error("Campo da descrição é obrigatório")
    if(!novoPerfil.email)
      throw new Error("Campo do email é obrigatório")
    if(!novoPerfil.telefone)
      throw new Error("Campo do telefone é obrigatório")
    if(!novoPerfil.genero)
      throw new Error("Campo do gênero é obrigatório")
    if(!novoPerfil.nascimento)
      throw new Error("Campo do nascimento é obrigatório")

      const resposta = await editarPerfil(id, novoPerfil);
      resp.status(200).send(resposta);
  }

  catch(err) {
    resp.status(400).send(err.message)
  }
})

server.put('/usuario/perfil/alterar/:id/imagem', upload.single('imagem'), async(req, resp) => {
  try {
    const {id} = req.params;
    const imagem = req.file.path;

    const result = await AlterarFoto(id, imagem)
    if (resposta != 1)
      throw new Error('A imagem não pode ser salva.');
    resp.status(200).send();
  }

  catch(err) {
    resp.status(400).send(err.message)
  }
})

server.get('/usuario/perfil/s' , async (req, resp) =>{
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

server.get('/usuario/perfil/s/:nome' , async (req, resp) =>{
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

server.delete('/usuario/perfil/remover/:id', async (req, resp) => {
  try {
    const id = Number(req.params.id);
    if(id === NaN || id < 0) 
      throw new Error('Não existente')
      
    const removerLogin = await DeletarLogin(id);

    const removerUsuario = await DeletarUsuario(id);
    const result = await (id, removerLogin, removerUsuario);
    resp.status(200).send(result);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }
})

server.get('/usuario/contatos/:id', async (req, resp) => {
  try {
    const id = req.params.id;
    if(id === NaN || id < 0) 
      throw new Error('Não existente')
    const linhas = ListarMeusContatos(id);
    resp.status(200).send(linhas)
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }
})

server.post('/usuario/contatos/:id/:usuario', async (req, resp) => {
  try {
    const { id, usuario } = req.params;
    if(id === NaN || id < 0) 
      throw new Error('Não existente')
    const usuContato = await DescobrirContatoUsuario(id)
    const response = await AdicionarContato(usuContato.id, usuario)
    resp.send(response)
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }
})

export default server;