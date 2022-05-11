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
exports.updateEstatusModelos = exports.deleteModelos = exports.putModelos = exports.postModelos = exports.getModelosById = exports.getModelos = void 0;
const modelos_model_1 = __importDefault(require("../models/modelos.model"));
//Función para obtener todos los elementos de una tabla
const getModelos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const modelos = yield modelos_model_1.default.findAll();
    res.json({ modelos });
});
exports.getModelos = getModelos;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getModelosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const modelos = yield modelos_model_1.default.findByPk(id);
    if (modelos) {
        res.json(modelos);
    }
    else {
        res.status(404).json({
            msg: "No existe modelo en la base de datos"
        });
    }
});
exports.getModelosById = getModelosById;
//Función para agregar un elemento a la tabla de nuestra base de datos modelos
const postModelos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const modelos = yield modelos_model_1.default.create(body);
        yield modelos.save();
        res.json(modelos);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postModelos = postModelos;
//Función para actualizar un elemento a la tabla de nuestra base de datos modelos
const putModelos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const modelos = yield modelos_model_1.default.findByPk(id);
        if (!modelos) {
            return res.status(404).json({
                msg: 'No existe un modelo con el id ' + id
            });
        }
        yield modelos.update(body);
        res.json(modelos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putModelos = putModelos;
//Función para borrar un elemento a la tabla de nuestra base de datos modelos (Solo se dehabilita)
const deleteModelos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const modelos = yield modelos_model_1.default.findByPk(id);
        if (!modelos) {
            return res.status(404).json({
                msg: 'No existe un modelo con el id ' + id
            });
        }
        // await usuario.destroy ();
        yield modelos.update({ fk_status: 6 });
        res.json(modelos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteModelos = deleteModelos;
//Función para habilitar y deshabilitar el estatus de modelos
const updateEstatusModelos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idmodelo no es un valor válido'
        });
    }
    const modelos = yield modelos_model_1.default.findByPk(id);
    if (!modelos) {
        return res.status(404).json({
            data: null,
            success: false,
            message: 'No existe registro con el id ' + id
        });
    }
    if (fk_status == undefined) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El Valor del estatus es requerido (true o false)'
        });
    }
    //Habilitar o deshabilitar un registro (Update estatus)
    if (fk_status == 'true') {
        //Si el estatus viene con valor 'true' deshabilitada el registro
        modelos.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        modelos.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: modelos,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusModelos = updateEstatusModelos;
//# sourceMappingURL=modelos.controller.js.map