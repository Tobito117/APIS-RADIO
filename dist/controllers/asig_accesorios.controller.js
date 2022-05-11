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
exports.updateEstatusAsig_Accesorios = exports.deleteAsig_Accesorios = exports.putAsig_Accesorios = exports.postAsig_Accesorios = exports.getAsig_AccesoriosById = exports.getAsig_Accesorios = void 0;
const asig_accesorios_model_1 = __importDefault(require("../models/asig_accesorios.model"));
//Función para obtener todos los elementos de una tabla
const getAsig_Accesorios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const asig_accesorios = yield asig_accesorios_model_1.default.findAll();
    res.json({ asig_accesorios });
});
exports.getAsig_Accesorios = getAsig_Accesorios;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getAsig_AccesoriosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const asig_accesorios = yield asig_accesorios_model_1.default.findByPk(id);
    if (asig_accesorios) {
        res.json(asig_accesorios);
    }
    else {
        res.status(404).json({
            msg: "No existe asig_accesorio en la base de datos"
        });
    }
});
exports.getAsig_AccesoriosById = getAsig_AccesoriosById;
// Función para agregar un elemento a la tabla de nuestra base de datos asig_accesorios
const postAsig_Accesorios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    //era un metodo de sequelize para buscar el correo y verificar que no se registre dos veces el mismo correo
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
        const asig_accesorios = yield asig_accesorios_model_1.default.create(body);
        yield asig_accesorios.save();
        res.json(asig_accesorios);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postAsig_Accesorios = postAsig_Accesorios;
//Función para actualizar un elemento a la tabla de nuestra base de datos accesorios
const putAsig_Accesorios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const asig_accesorios = yield asig_accesorios_model_1.default.findByPk(id);
        if (!asig_accesorios) {
            return res.status(404).json({
                msg: 'No existe un asi_accesorio con el id ' + id
            });
        }
        yield asig_accesorios.update(body);
        res.json(asig_accesorios);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putAsig_Accesorios = putAsig_Accesorios;
//Función para borrar un elemento a la tabla de nuestra base de datos asig_accesorios
const deleteAsig_Accesorios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const asig_accesorios = yield asig_accesorios_model_1.default.findByPk(id);
        if (!asig_accesorios) {
            return res.status(404).json({
                msg: 'No existe un asig_accesorio con el id ' + id
            });
        }
        // await usuario.destroy ();
        yield asig_accesorios.update({ fk_status: 6 });
        res.json(asig_accesorios);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteAsig_Accesorios = deleteAsig_Accesorios;
//Función para habilitar y deshabilitar el estatus de Asig_accesorios 
const updateEstatusAsig_Accesorios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idasi_accesorios no es un valor válido'
        });
    }
    const asig_accesorios = yield asig_accesorios_model_1.default.findByPk(id);
    if (!asig_accesorios) {
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
        asig_accesorios.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        asig_accesorios.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: asig_accesorios,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusAsig_Accesorios = updateEstatusAsig_Accesorios;
//# sourceMappingURL=asig_accesorios.controller.js.map