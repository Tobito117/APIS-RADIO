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
exports.updatedEstatusTipos_Tipos = exports.deleteTipos_Tipos = exports.putTipos_Tipos = exports.postTipos_Tipos = exports.getTipos_TiposById = exports.getTipos_Tipos = void 0;
const tipos_tipos_model_1 = __importDefault(require("../models/tipos_tipos.model"));
const getTipos_Tipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tipos_tipos = yield tipos_tipos_model_1.default.findAll();
    res.json({ tipos_tipos });
});
exports.getTipos_Tipos = getTipos_Tipos;
const getTipos_TiposById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tipos_tipos = yield tipos_tipos_model_1.default.findByPk(id);
    if (tipos_tipos) {
        res.json(tipos_tipos);
    }
    else {
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    }
});
exports.getTipos_TiposById = getTipos_TiposById;
const postTipos_Tipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const tipos_tipos = yield tipos_tipos_model_1.default.create(body);
        yield tipos_tipos.save();
        res.json(tipos_tipos);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postTipos_Tipos = postTipos_Tipos;
const putTipos_Tipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const tipos_tipos = yield tipos_tipos_model_1.default.findByPk(id);
        if (!tipos_tipos) {
            return res.status(404).json({
                msg: 'No existe un Tipo_Tipo con el id ' + id
            });
        }
        yield tipos_tipos.update(body);
        res.json(tipos_tipos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putTipos_Tipos = putTipos_Tipos;
const deleteTipos_Tipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const tipos_tipos = yield tipos_tipos_model_1.default.findByPk(id);
        if (!tipos_tipos) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        // await usuario.destroy ();
        yield tipos_tipos.update({ fk_status: 2 });
        res.json(tipos_tipos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteTipos_Tipos = deleteTipos_Tipos;
const updatedEstatusTipos_Tipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idEstatus no es un valor válido'
        });
    }
    const tipos_tipos = yield tipos_tipos_model_1.default.findByPk(id);
    if (!tipos_tipos) {
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
        tipos_tipos.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        tipos_tipos.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: tipos_tipos,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updatedEstatusTipos_Tipos = updatedEstatusTipos_Tipos;
//# sourceMappingURL=tipos_tipos.controller.js.map