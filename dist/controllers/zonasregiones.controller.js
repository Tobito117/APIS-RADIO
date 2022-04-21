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
exports.postZonasRegiones = exports.getZonasRegionesById = exports.getZonasRegiones = void 0;
const zonasregiones_model_1 = __importDefault(require("../models/zonasregiones.model"));
const getZonasRegiones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const zonasregiones = yield zonasregiones_model_1.default.findAll();
    res.json({ zonasregiones });
});
exports.getZonasRegiones = getZonasRegiones;
const getZonasRegionesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const zonasregiones = yield zonasregiones_model_1.default.findByPk(id);
    if (zonasregiones) {
        res.json(zonasregiones);
    }
    else {
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    }
});
exports.getZonasRegionesById = getZonasRegionesById;
const postZonasRegiones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        // const existeEmail = await Usuarios.findOne({
        //     where: {
        //         email: body.email
        //     }
        // })
        // if (existeEmail){
        //     return res.status(400).json({
        //         msg: 'Ya existe un usuario con el email ' + body.email
        //     });
        // }
        const zonasregiones = yield zonasregiones_model_1.default.create(body);
        yield zonasregiones.save();
        res.json(zonasregiones);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postZonasRegiones = postZonasRegiones;
//# sourceMappingURL=zonasregiones.controller.js.map