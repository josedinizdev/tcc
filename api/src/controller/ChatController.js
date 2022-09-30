import { Router } from 'express'
import {VerConversas} from '../repository/chatreposirtory';
const server = Router();

server.get('/usuario/conversas/:id' , async (req, resp) => {
    try {
        const conversas = req.params;
        const resposta = await VerConversas(conversas); 
        
        resp.status(204).send(resposta);
    }

    catch (err) {
        resp.status(401).send ({
            erro: err.massage
        });
    }
    
})


export default server;