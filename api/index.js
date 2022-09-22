import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userController from './src/controller/userController.js';

const server = express();
server.use(cors());
server.use(express.json());


server.use(userController);

server.get('/ping', (req, resp) => resp.send('Pong!'));

server.listen(process.env.PORT, () => console.log(`API ONLINE NA PORTA ${process.env.PORT}`));