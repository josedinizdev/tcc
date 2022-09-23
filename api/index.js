import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userController from './src/controller/userController.js';
import servicesController from './src/controller/servicesController.js'

const server = express();
server.use(cors());
server.use(express.json());


server.use(userController);
server.use(servicesController);

server.listen(process.env.PORT, () => console.log(`API ONLINE NA PORTA ${process.env.PORT}`));