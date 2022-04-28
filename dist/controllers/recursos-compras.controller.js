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
exports.updateEstatusRecursosCompras = exports.deleteRecursosCompras = exports.putRecursosCompras = exports.postRecursosCompras = exports.getRecursosComprasById = exports.getRecursosCompras = void 0;
const recursos_compras_model_1 = __importDefault(require("../models/recursos-compras.model"));
const getRecursosCompras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recursoscompras = yield recursos_compras_model_1.default.findAll();
    res.json({ recursoscompras });
});
exports.getRecursosCompras = getRecursosCompras;
const getRecursosComprasById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const recursoscompras = yield recursos_compras_model_1.default.findByPk(id);
    if (recursoscompras) {
        res.json(recursoscompras);
    }
    else {
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    }
});
exports.getRecursosComprasById = getRecursosComprasById;
const postRecursosCompras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const recursoscompras = yield recursos_compras_model_1.default.create(body);
        yield recursoscompras.save();
        res.json(recursoscompras);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postRecursosCompras = postRecursosCompras;
const putRecursosCompras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const recursoscompras = yield recursos_compras_model_1.default.findByPk(id);
        if (!recursoscompras) {
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
            });
        }
        yield recursoscompras.update(body);
        res.json(recursoscompras);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putRecursosCompras = putRecursosCompras;
const deleteRecursosCompras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const recursoscompras = yield recursos_compras_model_1.default.findByPk(id);
        if (!recursoscompras) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        // await usuario.destroy ();
        yield recursoscompras.update({ fk_status: 6 });
        res.json(recursoscompras);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteRecursosCompras = deleteRecursosCompras;
const updateEstatusRecursosCompras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idRecursosCompras no es un valor válido'
        });
    }
    const recursoscompras = yield recursos_compras_model_1.default.findByPk(id);
    if (!recursoscompras) {
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
        recursoscompras.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        recursoscompras.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: recursoscompras,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusRecursosCompras = updateEstatusRecursosCompras;
//# sourceMappingURL=recursos-compras.controller.js.map