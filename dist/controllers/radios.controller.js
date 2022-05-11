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
const getRadios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const radios = yield radios_model_1.default.findAll();
    res.json({ radios });
});
exports.getRadios = getRadios;
const getRadiosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const radios = yield radios_model_1.default.findByPk(id);
    if (radios) {
        res.json(radios);
    }
    else {
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    }
});
exports.getRadiosById = getRadiosById;
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
const putRadios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const radios = yield radios_model_1.default.findByPk(id);
        if (!radios) {
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
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
const deleteRadios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const radios = yield radios_model_1.default.findByPk(id);
        if (!radios) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        // await usuario.destroy ();
        yield radios.update({ fk_status: 6 });
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
const updateEstatusRadios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idZonasRegiones no es un valor válido'
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