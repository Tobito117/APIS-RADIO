"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
//Rutas Llamadas
const usuario_routes_1 = __importDefault(require("../routes/usuario.routes"));
const usuarios_routes_1 = __importDefault(require("../routes/usuarios.routes"));
const vehiculos_routes_1 = __importDefault(require("../routes/vehiculos.routes"));
const zonasregiones_routes_1 = __importDefault(require("../routes/zonasregiones.routes"));
const tipos_tipos_routes_1 = __importDefault(require("../routes/tipos_tipos.routes"));
const status_routes_1 = __importDefault(require("../routes/status.routes"));
const tipos_routes_1 = __importDefault(require("../routes/tipos.routes"));
const servicios_routes_1 = __importDefault(require("../routes/servicios.routes"));
const recursos_compras_routes_1 = __importDefault(require("../routes/recursos-compras.routes"));
const puestos_routes_1 = __importDefault(require("../routes/puestos.routes"));
const modelos_routes_1 = __importDefault(require("../routes/modelos.routes"));
const marcas_routes_1 = __importDefault(require("../routes/marcas.routes"));
const lineas_routes_1 = __importDefault(require("../routes/lineas.routes"));
const imagenes_routes_1 = __importDefault(require("../routes/imagenes.routes"));
const hojas_servicios_routes_1 = __importDefault(require("../routes/hojas-servicios.routes"));
const documentos_routes_1 = __importDefault(require("../routes/documentos.routes"));
const corporaciones_routes_1 = __importDefault(require("../routes/corporaciones.routes"));
const configreportes_routes_1 = __importDefault(require("../routes/configreportes.routes"));
const asig_vehiculos_routes_1 = __importDefault(require("../routes/asig_vehiculos.routes"));
const asig_usuarios_routes_1 = __importDefault(require("../routes/asig_usuarios.routes"));
const asig_accesorios_routes_1 = __importDefault(require("../routes/asig_accesorios.routes"));
const accesorios_routes_1 = __importDefault(require("../routes/accesorios.routes"));
const radios_routes_1 = __importDefault(require("../routes/radios.routes"));
class Server {
    constructor() {
        this.baseUrl = {
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
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //METODOS INCIALES
        this.dbConnection();
        this.middlewares();
        //Definir mi ruta
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database Online');
            }
            catch (error) {
                throw new Error(error = undefined);
            }
        });
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //LECTURA DEL BODY
        this.app.use(express_1.default.json());
        //Carpeta Publica
        this.app.use(express_1.default.static('public'));
    }
    //Conectar Base de datos
    routes() {
        this.app.use(this.baseUrl.users, usuario_routes_1.default);
        this.app.use(this.baseUrl.usuarios, usuarios_routes_1.default);
        this.app.use(this.baseUrl.vehiculos, vehiculos_routes_1.default);
        this.app.use(this.baseUrl.zonasregiones, zonasregiones_routes_1.default);
        this.app.use(this.baseUrl.tipos_tipos, tipos_tipos_routes_1.default);
        this.app.use(this.baseUrl.status, status_routes_1.default);
        this.app.use(this.baseUrl.tipos, tipos_routes_1.default);
        this.app.use(this.baseUrl.servicios, servicios_routes_1.default);
        this.app.use(this.baseUrl.recursos_compras, recursos_compras_routes_1.default);
        this.app.use(this.baseUrl.puestos, puestos_routes_1.default);
        this.app.use(this.baseUrl.modelos, modelos_routes_1.default);
        this.app.use(this.baseUrl.marcas, marcas_routes_1.default);
        this.app.use(this.baseUrl.lineas, lineas_routes_1.default);
        this.app.use(this.baseUrl.imagenes, imagenes_routes_1.default);
        this.app.use(this.baseUrl.hojasservicios, hojas_servicios_routes_1.default);
        this.app.use(this.baseUrl.documentos, documentos_routes_1.default);
        this.app.use(this.baseUrl.corporaciones, corporaciones_routes_1.default);
        this.app.use(this.baseUrl.configreportes, configreportes_routes_1.default);
        this.app.use(this.baseUrl.asig_vehiculos, asig_vehiculos_routes_1.default);
        this.app.use(this.baseUrl.asig_usuarios, asig_usuarios_routes_1.default);
        this.app.use(this.baseUrl.asig_accesorios, asig_accesorios_routes_1.default);
        this.app.use(this.baseUrl.accesorios, accesorios_routes_1.default);
        this.app.use(this.baseUrl.radios, radios_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.Server = Server;
exports.default = Server;
//# sourceMappingURL=server.js.map