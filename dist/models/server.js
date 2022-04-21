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
class Server {
    constructor() {
        this.baseUrl = {
            users: '/api/v0/users',
            usuarios: '/api/v0/usuarios',
            vehiculos: '/api/v0/vehiculos',
            zonasregiones: '/api/v0/zonasregiones'
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