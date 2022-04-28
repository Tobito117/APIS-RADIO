import express, { Application } from 'express';
import cors from 'cors';
import db from '../db/connection';

//Rutas Llamadas
import userRoutes from '../routes/usuario.routes';
import usuariosRoutes from '../routes/usuarios.routes';
import vehiculosRoutes from '../routes/vehiculos.routes';
import zonasregionesRoutes from '../routes/zonasregiones.routes';
import tipos_tiposRoutes from '../routes/tipos_tipos.routes';
import statusRoutes from '../routes/status.routes';
import tiposRoutes from '../routes/tipos.routes';
import serviciosRoutes from '../routes/servicios.routes';
import recursoscomprasRoutes from '../routes/recursos-compras.routes';
import puestosRoutes from '../routes/puestos.routes';
import ModelosRoutes from '../routes/modelos.routes'

export class Server {

    private app: Application;
    private port: string;
    private baseUrl = {
        users: '/api/v0/users',
        usuarios: '/api/v0/usuarios',
        vehiculos: '/api/v0/vehiculos',
        zonasregiones: '/api/v0/zonasregiones',
        tipos_tipos: '/api/v0/tipos_tipos',
        status: '/api/v0/status',
        tipos: '/api/v0/tipos',
        servicios: '/api/v0/servicios',
        recursos_compras: '/api/v0/recursoscompras',
        puestos: '/api/v0/puestos',
        modelos: '/api/v0/modelos'
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
        this.app.use (this.baseUrl.zonasregiones, zonasregionesRoutes);
        this.app.use (this.baseUrl.tipos_tipos, tipos_tiposRoutes);
        this.app.use (this.baseUrl.status, statusRoutes);
        this.app.use (this.baseUrl.tipos, tiposRoutes);
        this.app.use (this.baseUrl.servicios, serviciosRoutes);
        this.app.use (this.baseUrl.recursos_compras, recursoscomprasRoutes);
        this.app.use (this.baseUrl.puestos, puestosRoutes);
        this.app.use(this.baseUrl.modelos, ModelosRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}

export default Server;