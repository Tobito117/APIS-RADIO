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
exports.updateEstatusImagenes = exports.deleteImagenes = exports.putImagenes = exports.postImagenes = exports.getImagenesById = exports.getImagenes = void 0;
const imagenes_model_1 = __importDefault(require("../models/imagenes.model"));
//Función para obtener todos los elementos de una tabla
const getImagenes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imagenes = yield imagenes_model_1.default.findAll();
    res.json({ imagenes });
});
exports.getImagenes = getImagenes;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getImagenesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const imagenes = yield imagenes_model_1.default.findByPk(id);
    if (imagenes) {
        res.json(imagenes);
    }
    else {
        res.status(404).json({
            msg: "No existe Imagen en la base de datos"
        });
    }
});
exports.getImagenesById = getImagenesById;
//Función para agregar un elemento a la tabla de nuestra base de datos imagenes
const postImagenes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const imagenes = yield imagenes_model_1.default.create(body);
        yield imagenes.save();
        res.json(imagenes);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postImagenes = postImagenes;
//Función para actualizar un elemento a la tabla de nuestra base de datos imagenes
const putImagenes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const imagenes = yield imagenes_model_1.default.findByPk(id);
        if (!imagenes) {
            return res.status(404).json({
                msg: 'No existe una Imagen con el id ' + id
            });
        }
        yield imagenes.update(body);
        res.json(imagenes);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putImagenes = putImagenes;
//Función para borrar un elemento a la tabla de nuestra base de datos imagenes (Solo se dehabilita)
const deleteImagenes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const imagenes = yield imagenes_model_1.default.findByPk(id);
        if (!imagenes) {
            return res.status(404).json({
                msg: 'No existe una Imagen con el id ' + id
            });
        }
        // await usuario.destroy ();
        yield imagenes.update({ fk_status: 6 });
        res.json(imagenes);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteImagenes = deleteImagenes;
//Función para habilitar y deshabilitar el estatus de Imagenes 
const updateEstatusImagenes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idImagen no es un valor válido'
        });
    }
    const imagenes = yield imagenes_model_1.default.findByPk(id);
    if (!imagenes) {
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
        imagenes.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        imagenes.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: imagenes,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusImagenes = updateEstatusImagenes;
//# sourceMappingURL=imagenes.controller.js.map