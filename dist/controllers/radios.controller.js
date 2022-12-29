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
exports.updateEstatusRadios = exports.deleteRadios = exports.putRadios = exports.postRadios = exports.getRadiosById = exports.getRadios = void 0;
const radios_model_1 = __importDefault(require("../models/radios.model"));
//Función para obtener todos los elementos de una tabla
const getRadios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const radios = yield radios_model_1.default.findAll();
    res.json(radios);
});
exports.getRadios = getRadios;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getRadiosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const radios = yield radios_model_1.default.findByPk(id);
    if (radios) {
        res.json(radios);
    }
    else {
        res.status(404).json({
            msg: "No existe radio en la base de datos"
        });
    }
});
exports.getRadiosById = getRadiosById;
//Función para agregar un elemento a la tabla de nuestra base de datos radios
const postRadios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const radios = yield radios_model_1.default.create(body);
        yield radios.save();
        res.json(radios);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postRadios = postRadios;
//Función para actualizar un elemento a la tabla de nuestra base de datos radio
const putRadios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const radios = yield radios_model_1.default.findByPk(id);
        if (!radios) {
            return res.status(404).json({
                msg: 'No existe un radio con el id ' + id
            });
        }
        yield radios.update(body);
        res.json(radios);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putRadios = putRadios;
//Función para borrar un elemento a la tabla de nuestra base de datos radios (Solo se dehabilita)
const deleteRadios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const radios = yield radios_model_1.default.findByPk(id);
        if (!radios) {
            return res.status(404).json({
                msg: 'No existe un radio con el id ' + id
            });
        }
        // await usuario.destroy ();
        //await radios.update({ fk_status: 6 });
        const estado = radios.estatus;
        if (estado == true) {
            //Si el estatus viene con valor 'true' deshabilitada el registro
            yield radios.update({ estatus: false });
        }
        else if (estado == false) {
            yield radios.update({ estatus: true });
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'El valor del estatus no es valido (true o false)'
            });
        }
        res.json(radios);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteRadios = deleteRadios;
//Función para habilitar y deshabilitar el estatus de radios
const updateEstatusRadios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idradio no es un valor válido'
        });
    }
    const radios = yield radios_model_1.default.findByPk(id);
    if (!radios) {
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
        radios.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        radios.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: radios,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusRadios = updateEstatusRadios;
//# sourceMappingURL=radios.controller.js.map