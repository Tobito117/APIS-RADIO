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
exports.updateEstatusCorporaciones = exports.deleteCorporaciones = exports.putCorporaciones = exports.postCorporaciones = exports.getCorporacionesById = exports.getCorporaciones = void 0;
const corporaciones_model_1 = __importDefault(require("../models/corporaciones.model"));
//Función para obtener todos los elementos de una tabla
const getCorporaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const corporaciones = yield corporaciones_model_1.default.findAll();
    res.json({ corporaciones });
});
exports.getCorporaciones = getCorporaciones;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getCorporacionesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const corporaciones = yield corporaciones_model_1.default.findByPk(id);
    if (corporaciones) {
        res.json(corporaciones);
    }
    else {
        res.status(404).json({
            msg: "No existe corporacion en la base de datos"
        });
    }
});
exports.getCorporacionesById = getCorporacionesById;
// Función para agregar un elemento a la tabla de nuestra base de datos corporaciones
const postCorporaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const corporaciones = yield corporaciones_model_1.default.create(body);
        yield corporaciones.save();
        res.json(corporaciones);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postCorporaciones = postCorporaciones;
//Función para actualizar un elemento a la tabla de nuestra base de datos corporaciones
const putCorporaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const corporaciones = yield corporaciones_model_1.default.findByPk(id);
        if (!corporaciones) {
            return res.status(404).json({
                msg: 'No existe una corporacion con el id ' + id
            });
        }
        yield corporaciones.update(body);
        res.json(corporaciones);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putCorporaciones = putCorporaciones;
//Función para borrar un elemento a la tabla de nuestra base de datos corporaciones (Solo se dehabilita)
const deleteCorporaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const corporaciones = yield corporaciones_model_1.default.findByPk(id);
        if (!corporaciones) {
            return res.status(404).json({
                msg: 'No existe una corporacion con el id ' + id
            });
        }
        // await usuario.destroy ();
        yield corporaciones.update({ fk_status: 6 });
        res.json(corporaciones);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteCorporaciones = deleteCorporaciones;
//Función para habilitar y deshabilitar el estatus de corporaciones
const updateEstatusCorporaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idCorporaciones no es un valor válido'
        });
    }
    const corporaciones = yield corporaciones_model_1.default.findByPk(id);
    if (!corporaciones) {
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
        corporaciones.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        corporaciones.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: corporaciones,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusCorporaciones = updateEstatusCorporaciones;
//# sourceMappingURL=corporaciones.controller.js.map