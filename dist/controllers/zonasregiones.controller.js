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
exports.updateEstatusZonasRegiones = exports.deleteZonasRegiones = exports.putZonasRegiones = exports.postZonasRegiones = exports.getZonasRegionesById = exports.getZonasRegiones = void 0;
const zonasregiones_model_1 = __importDefault(require("../models/zonasregiones.model"));
//Función para obtener todos los elementos de una tabla
const getZonasRegiones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const zonasregiones = yield zonasregiones_model_1.default.findAll();
    res.json(zonasregiones);
});
exports.getZonasRegiones = getZonasRegiones;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getZonasRegionesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const zonasregiones = yield zonasregiones_model_1.default.findByPk(id);
    if (zonasregiones) {
        res.json(zonasregiones);
    }
    else {
        res.status(404).json({
            msg: "No existe zonasregiones en la base de datos"
        });
    }
});
exports.getZonasRegionesById = getZonasRegionesById;
//Función para agregar un elemento a la tabla de nuestra base de datos zonasregiones
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
//Función para actualizar un elemento a la tabla de nuestra base de datos zonasregiones
const putZonasRegiones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const zonasregiones = yield zonasregiones_model_1.default.findByPk(id);
        if (!zonasregiones) {
            return res.status(404).json({
                msg: 'No existe una zonasregion con el id ' + id
            });
        }
        yield zonasregiones.update(body);
        res.json(zonasregiones);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putZonasRegiones = putZonasRegiones;
//Función para borrar un elemento a la tabla de nuestra base de datos zonasregiones (Solo se dehabilita)
const deleteZonasRegiones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const zonasregiones = yield zonasregiones_model_1.default.findByPk(id);
        if (!zonasregiones) {
            return res.status(404).json({
                msg: 'No existe un zonasregiones con el id ' + id
            });
        }
        // await usuario.destroy ();
        //await zonasregiones.update({estatus: 6 });
        const estado = zonasregiones.estatus;
        if (estado == true) {
            //Si el estatus viene con valor 'true' deshabilitada el registro
            yield zonasregiones.update({ estatus: false });
        }
        else if (estado == false) {
            yield zonasregiones.update({ estatus: true });
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'El valor del estatus no es valido (true o false)'
            });
        }
        res.json(zonasregiones);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteZonasRegiones = deleteZonasRegiones;
//Función para habilitar y deshabilitar el estatus de zonasregiones
const updateEstatusZonasRegiones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idZonasRegiones no es un valor válido'
        });
    }
    const zonasregiones = yield zonasregiones_model_1.default.findByPk(id);
    if (!zonasregiones) {
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
        zonasregiones.update({ estatus: false });
    }
    else if (fk_status == 'false') {
        zonasregiones.update({ estatus: true });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: zonasregiones,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusZonasRegiones = updateEstatusZonasRegiones;
//# sourceMappingURL=zonasregiones.controller.js.map