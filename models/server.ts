import express, { Application } from 'express';
import cors from 'cors';
import db from '../db/connection';

//Rutas Llamadas
import userRoutes from '../routes/usuario.routes';
import usuariosRoutes from '../routes/usuarios.routes';
import vehiculosRoutes from '../routes/vehiculos.routes';
import zonasregionesRoutes from '../routes/zonasregiones.routes';

export class Server {

    private app: Application;
    private port: string;
    private baseUrl = {
        users: '/api/v0/users',
        usuarios: '/api/v0/usuarios',
        vehiculos: '/api/v0/vehiculos',
        zonasregiones: '/api/v0/zonasregiones'        
    }

    constructor(){

        this.app = express();
        this.port = process.env.PORT || '8000';

        //METODOS INCIALES
        this.dbConnection();
        this.middlewares();

        //Definir mi ruta
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Database Online');

        } catch (error) {
            throw new Error( error = undefined );
            
        }
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //LECTURA DEL BODY
        this.app.use(express.json());

        //Carpeta Publica
        this.app.use( express.static('public'));

    }

    //Conectar Base de datos

    routes () {
        this.app.use( this.baseUrl.users, userRoutes);
        this.app.use ( this.baseUrl.usuarios, usuariosRoutes);
        this.app.use ( this.baseUrl.vehiculos, vehiculosRoutes);
        this.app.use (this.baseUrl.zonasregiones, zonasregionesRoutes)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}

export default Server;