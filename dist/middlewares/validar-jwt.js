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
exports.validarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
const validarJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // interface JwtPayload {
    //     id: string
    //   }
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: "No hay token en la peticion"
        });
    }
    try {
        const { id } = jsonwebtoken_1.default.verify(token, process.env.SECRETORPRIVATEKEY);
        const user = yield usuario_model_1.default.findByPk(id);
        //verificar si el usuario no existe en la base de datos
        if (!user) {
            return res.status(401).json({
                msg: "Token no válido - usuario no existe en BD"
            });
        }
        //Verificar si el usuario esta en estado true
        if (!user.dataValues.status) {
            return res.status(401).json({
                msg: "Token no válido - usuario con estado_ false"
            });
        }
        req.user = user;
        console.log(user);
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        });
    }
});
exports.validarJWT = validarJWT;
//# sourceMappingURL=validar-jwt.js.map