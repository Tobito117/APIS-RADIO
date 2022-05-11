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
exports.updateEstatusServicios = exports.deleteServicios = exports.putServicios = exports.postServicios = exports.getServiciosById = exports.getServicios = void 0;
const servicios_model_1 = __importDefault(require("../models/servicios.model"));
//Función para obtener todos los elementos de una tabla
const getServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const servicios = yield servicios_model_1.default.findAll();
    res.json({ servicios });
});
exports.getServicios = getServicios;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getServiciosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const servicios = yield servicios_model_1.default.findByPk(id);
    if (servicios) {
        res.json(servicios);
    }
    else {
        res.status(404).json({
            msg: "No existe servicio en la base de datos"
        });
    }
});
exports.getServiciosById = getServiciosById;
//Función para agregar un elemento a la tabla de nuestra base de datos recursos-compras
const postServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const servicios = yield servicios_model_1.default.create(body);
        yield servicios.save();
        res.json(servicios);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postServicios = postServicios;
//Función para actualizar un elemento a la tabla de nuestra base de datos accesorios
const putServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const servicios = yield servicios_model_1.default.findByPk(id);
        if (!servicios) {
            return res.status(404).json({
                msg: 'No existe un servicio con el id ' + id
            });
        }
        yield servicios.update(body);
        res.json(servicios);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putServicios = putServicios;
//Función para borrar un elemento a la tabla de nuestra base de datos recursos-compras (Solo se dehabilita)
const deleteServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const servicios = yield servicios_model_1.default.findByPk(id);
        if (!servicios) {
            return res.status(404).json({
                msg: 'No existe un servicio con el id ' + id
            });
        }
        // await usuario.destroy (); elimina el elemento totalmente 
        yield servicios.update({ fk_status: 6 });
        res.json(servicios);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteServicios = deleteServicios;
//Función para habilitar y deshabilitar el estatus de servicios
const updateEstatusServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idServicios no es un valor válido'
        });
    }
    const servicios = yield servicios_model_1.default.findByPk(id);
    if (!servicios) {
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
        servicios.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        servicios.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: servicios,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusServicios = updateEstatusServicios;
//# sourceMappingURL=servicios.controller.js.map