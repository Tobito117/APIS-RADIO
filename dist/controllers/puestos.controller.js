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
exports.updateEstatusPuestos = exports.deletePuestos = exports.putPuestos = exports.postPuestos = exports.getPuestosById = exports.getPuestos = void 0;
const puestos_model_1 = __importDefault(require("../models/puestos.model"));
const getPuestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const puestos = yield puestos_model_1.default.findAll();
    res.json({ puestos });
});
exports.getPuestos = getPuestos;
const getPuestosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const puestos = yield puestos_model_1.default.findByPk(id);
    if (puestos) {
        res.json(puestos);
    }
    else {
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    }
});
exports.getPuestosById = getPuestosById;
const postPuestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const puestos = yield puestos_model_1.default.create(body);
        yield puestos.save();
        res.json(puestos);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postPuestos = postPuestos;
const putPuestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const puestos = yield puestos_model_1.default.findByPk(id);
        if (!puestos) {
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
            });
        }
        yield puestos.update(body);
        res.json(puestos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putPuestos = putPuestos;
const deletePuestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const puestos = yield puestos_model_1.default.findByPk(id);
        if (!puestos) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        // await usuario.destroy ();
        yield puestos.update({ fk_status: 6 });
        res.json(puestos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deletePuestos = deletePuestos;
const updateEstatusPuestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El id no es un valor válido'
        });
    }
    const puestos = yield puestos_model_1.default.findByPk(id);
    if (!puestos) {
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
        puestos.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        puestos.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: puestos,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusPuestos = updateEstatusPuestos;
//# sourceMappingURL=puestos.controller.js.map