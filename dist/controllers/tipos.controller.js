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
exports.updateEstatusPuestos = exports.deleteTipos = exports.putTipos = exports.postTipos = exports.getTiposById = exports.getTipos = void 0;
const tipos_model_1 = __importDefault(require("../models/tipos.model"));
//Función para obtener todos los elementos de una tabla
const getTipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tipos = yield tipos_model_1.default.findAll();
    res.json({ tipos });
});
exports.getTipos = getTipos;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getTiposById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tipos = yield tipos_model_1.default.findByPk(id);
    if (tipos) {
        res.json(tipos);
    }
    else {
        res.status(404).json({
            msg: "No existe IdTipo en la base de datos"
        });
    }
});
exports.getTiposById = getTiposById;
//Función para agregar un elemento a la tabla de nuestra base de datos accesorios
const postTipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const tipos = yield tipos_model_1.default.create(body);
        yield tipos.save();
        res.json(tipos);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postTipos = postTipos;
//Función para actualizar un elemento a la tabla de nuestra base de datos Tipos
const putTipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const tipos = yield tipos_model_1.default.findByPk(id);
        if (!tipos) {
            return res.status(404).json({
                msg: 'No existe un tipo con el id ' + id
            });
        }
        yield tipos.update(body);
        res.json(tipos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putTipos = putTipos;
//Función para borrar un elemento a la tabla de nuestra base de datos tipos (Solo se dehabilita)
const deleteTipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const tipos = yield tipos_model_1.default.findByPk(id);
        if (!tipos) {
            return res.status(404).json({
                msg: 'No existe un tipo con el id ' + id
            });
        }
        // await usuario.destroy ();
        yield tipos.update({ fk_status: 6 });
        res.json(tipos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteTipos = deleteTipos;
//Función para habilitar y deshabilitar el estatus de Tipos
const updateEstatusPuestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idTipos no es un valor válido'
        });
    }
    const tipos = yield tipos_model_1.default.findByPk(id);
    if (!tipos) {
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
        tipos.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        tipos.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: tipos,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusPuestos = updateEstatusPuestos;
//# sourceMappingURL=tipos.controller.js.map