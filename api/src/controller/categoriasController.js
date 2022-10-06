import { Router } from 'express';
import { obterCategorias } from '../repository/categoriasRepository.js';

const server = Router();

server.get('/categorias', async (req, resp) => {
    try {
        const resposta = await obterCategorias();
        resp.status(200).send(resposta);
    } catch (err) {
        resp.status(401).send({
            erro: err.massage
        });
    }
});

export default server;