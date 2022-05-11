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
exports.updateEstatusLineas = exports.deleteLineas = exports.putLineas = exports.postLineas = exports.getLineasById = exports.getLineas = void 0;
const lineas_model_1 = __importDefault(require("../models/lineas.model"));
//Función para obtener todos los elementos de una tabla
const getLineas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lineas = yield lineas_model_1.default.findAll();
    res.json({ lineas });
});
exports.getLineas = getLineas;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getLineasById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const lineas = yield lineas_model_1.default.findByPk(id);
    if (lineas) {
        res.json(lineas);
    }
    else {
        res.status(404).json({
            msg: "No existe lineas en la base de datos"
        });
    }
});
exports.getLineasById = getLineasById;
//Función para agregar un elemento a la tabla de nuestra base de datos lineas
const postLineas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const lineas = yield lineas_model_1.default.create(body);
        yield lineas.save();
        res.json(lineas);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postLineas = postLineas;
//Función para actualizar un elemento a la tabla de nuestra base de datos lineas
const putLineas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const lineas = yield lineas_model_1.default.findByPk(id);
        if (!lineas) {
            return res.status(404).json({
                msg: 'No existe una linea con el id ' + id
            });
        }
        yield lineas.update(body);
        res.json(lineas);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putLineas = putLineas;
//Función para borrar un elemento a la tabla de nuestra base de datos lineas (Solo se dehabilita)
const deleteLineas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const lineas = yield lineas_model_1.default.findByPk(id);
        if (!lineas) {
            return res.status(404).json({
                msg: 'No existe lineas con el id ' + id
            });
        }
        // await usuario.destroy ();
        yield lineas.update({ fk_status: 6 });
        res.json(lineas);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteLineas = deleteLineas;
const updateEstatusLineas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idLineas no es un valor válido'
        });
    }
    const lineas = yield lineas_model_1.default.findByPk(id);
    if (!lineas) {
        return res.status(404).json({
            data: null,
            success: false,
            message: 'No existe lineas con el id ' + id
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
        lineas.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        lineas.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: lineas,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusLineas = updateEstatusLineas;
//# sourceMappingURL=lineas.controller.js.map