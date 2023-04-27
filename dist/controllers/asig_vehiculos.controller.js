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
exports.updateEstatusAsig_Vehiculos = exports.deleteAsig_Vehiculos = exports.putAsig_Vehiculos = exports.postAsig_Vehiculos = exports.getAsig_VehiculosById = exports.getAsig_Vehiculos = void 0;
const asig_vehiculos_model_1 = __importDefault(require("../models/asig_vehiculos.model"));
//Función para obtener todos los elementos de una tabla
const getAsig_Vehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const asig_vehiculos = yield asig_vehiculos_model_1.default.findAll();
    res.json({ asig_vehiculos });
});
exports.getAsig_Vehiculos = getAsig_Vehiculos;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getAsig_VehiculosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const asig_vehiculos = yield asig_vehiculos_model_1.default.findByPk(id);
    if (asig_vehiculos) {
        res.json(asig_vehiculos);
    }
    else {
        res.status(404).json({
            msg: "No existe asig_vehiculos en la base de datos"
        });
    }
});
exports.getAsig_VehiculosById = getAsig_VehiculosById;
//dfgdñjgpadfgpoadf
// Función para agregar un elemento a la tabla de nuestra base de datos asig_vehiculos
const postAsig_Vehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const asig_vehiculos = yield asig_vehiculos_model_1.default.create(body);
        yield asig_vehiculos.save();
        res.json(asig_vehiculos);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postAsig_Vehiculos = postAsig_Vehiculos;
//Función para actualizar un elemento a la tabla de nuestra base de datos asig_vehiculos
const putAsig_Vehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const asig_vehiculos = yield asig_vehiculos_model_1.default.findByPk(id);
        if (!asig_vehiculos) {
            return res.status(404).json({
                msg: 'No existe una asig_vehiculos con el id ' + id
            });
        }
        yield asig_vehiculos.update(body);
        res.json(asig_vehiculos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putAsig_Vehiculos = putAsig_Vehiculos;
//Función para borrar un elemento a la tabla de nuestra base de datos asig_vehiculos (Solo se dehabilita)
const deleteAsig_Vehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const asig_vehiculos = yield asig_vehiculos_model_1.default.findByPk(id);
        if (!asig_vehiculos) {
            return res.status(404).json({
                msg: 'No existe una asig_vehiculo con el id ' + id
            });
        }
        // await usuario.destroy ();
        yield asig_vehiculos.update({ fk_status: 6 });
        res.json(asig_vehiculos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteAsig_Vehiculos = deleteAsig_Vehiculos;
//Función para habilitar y deshabilitar el estatus de asig_vehiculos
const updateEstatusAsig_Vehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idasig_vehiculos no es un valor válido'
        });
    }
    const asig_vehiculos = yield asig_vehiculos_model_1.default.findByPk(id);
    if (!asig_vehiculos) {
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
        asig_vehiculos.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        asig_vehiculos.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: asig_vehiculos,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusAsig_Vehiculos = updateEstatusAsig_Vehiculos;
//# sourceMappingURL=asig_vehiculos.controller.js.map