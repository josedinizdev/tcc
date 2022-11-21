import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userController from './src/controller/userController.js';
import servicesController from './src/controller/servicesController.js';
import profissionalController from './src/controller/profissionalController.js';
import categoriasController from './src/controller/categoriasController.js';

const server = express();
server.use(cors());
server.use(express.json());

server.use(userController);
server.use(profissionalController);
server.use(servicesController);
server.use(categoriasController);

server.use('/storage/fotoPerfil', express.static('storage/fotoPerfil'));

server.listen(process.env.PORT, () => console.log(`API ONLINE NA PORTA ${process.env.PORT}`));