import dotev from 'dotenv';
import Server from './models/server';
dotev.config();

//Configurar dot.env

const server = new Server();

server.listen();

