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
import ModelosRoutes from '../routes/modelos.routes';
import marcasRoutes from  '../routes/marcas.routes';
import lineasRoutes from '../routes/lineas.routes';
import imagenesRoutes from '../routes/imagenes.routes';
import hojasserviciosRoutes from '../routes/hojas-servicios.routes';
import documentosRoutes from '../routes/documentos.routes';
import corporacionesRoutes from '../routes/corporaciones.routes';
import configreportesRoutes from '../routes/configreportes.routes';
import asig_vehiculosRoutes from '../routes/asig_vehiculos.routes';
import asig_usuariosRoutes from '../routes/asig_usuarios.routes';
import asig_accesoriosRoutes from '../routes/asig_accesorios.routes';
import accesoriosRoutes from '../routes/accesorios.routes';
import radiosRoutes from '../routes/radios.routes'

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
        modelos: '/api/v0/modelos',
        marcas: '/api/v0/marcas',
        lineas: '/api/v0/lineas',
        imagenes: '/api/v0/imagenes',
        hojasservicios: '/api/v0/hojasservicios',
        documentos: '/api/v0/documentos',
        corporaciones: '/api/v0/corporaciones',
        configreportes: '/api/v0/configreportes',
        asig_vehiculos: '/api/v0/asig_vehiculos',
        asig_usuarios: '/api/v0/asig_usuarios',
        asig_accesorios: '/api/v0/asig_accesorios',
        accesorios: '/api/v0/accesorios',
        radios: '/api/v0/radios'

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
        this.app.use( this.baseUrl.marcas, marcasRoutes);
        this.app.use (this.baseUrl.lineas, lineasRoutes);
        this.app.use ( this.baseUrl.imagenes, imagenesRoutes);
        this.app.use ( this.baseUrl.hojasservicios, hojasserviciosRoutes);
        this.app.use (this.baseUrl.documentos, documentosRoutes);
        this.app.use (this.baseUrl.corporaciones, corporacionesRoutes);
        this.app.use (this.baseUrl.configreportes, configreportesRoutes);
        this.app.use (this.baseUrl.asig_vehiculos, asig_vehiculosRoutes);
        this.app.use (this.baseUrl.asig_usuarios, asig_usuariosRoutes);
        this.app.use (this.baseUrl.asig_accesorios, asig_accesoriosRoutes);
        this.app.use (this.baseUrl.accesorios, accesoriosRoutes);
        this.app.use (this.baseUrl.radios, radiosRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}

export default Server;