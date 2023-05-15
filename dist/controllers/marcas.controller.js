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
exports.updateEstatusMarcas = exports.deleteMarcas = exports.putMarcas = exports.postMarcas = exports.getMarcasByTipo = exports.getMarcasById = exports.getMarcas = void 0;
const marcas_model_1 = __importDefault(require("../models/marcas.model"));
//Función para obtener todos los elementos de una tabla
const getMarcas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const marcas = yield marcas_model_1.default.findAll();
    res.json(marcas);
});
exports.getMarcas = getMarcas;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getMarcasById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const marcas = yield marcas_model_1.default.findByPk(id);
    if (marcas) {
        res.json(marcas);
    }
    else {
        res.status(404).json({
            msg: "No existe marcas en la base de datos"
        });
    }
});
exports.getMarcasById = getMarcasById;
// Función para obtener marcas por tipo
const getMarcasByTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const marcas = yield ((_a = marcas_model_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(`SELECT * FROM marcas WHERE tipo=${id} AND estatus=1 ORDER BY marcas.idmarcas DESC`, {
        replacements: [],
        model: marcas_model_1.default,
        mapToModel: true
    }));
    res.json(marcas);
});
exports.getMarcasByTipo = getMarcasByTipo;
//Función para agregar un elemento a la tabla de nuestra base de datos marcas
const postMarcas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const marcas = yield marcas_model_1.default.create(body);
        yield marcas.save();
        res.json(marcas);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postMarcas = postMarcas;
//Función para actualizar un elemento a la tabla de nuestra base de datos marcas
const putMarcas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const marcas = yield marcas_model_1.default.findByPk(id);
        if (!marcas) {
            return res.status(404).json({
                msg: 'No existe marcas con el id ' + id
            });
        }
        yield marcas.update(body);
        res.json(marcas);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putMarcas = putMarcas;
const deleteMarcas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const marcas = yield marcas_model_1.default.findByPk(id);
        if (!marcas) {
            return res.status(404).json({
                msg: 'No existe una marca con el id ' + id
            });
        }
        // await usuario.destroy ();
        //await marcas.update({ fk_status: 6 });
        const estado = marcas.estatus;
        if (estado == true) {
            //Si el estatus viene con valor 'true' deshabilitada el registro
            yield marcas.update({ estatus: false });
        }
        else if (estado == false) {
            yield marcas.update({ estatus: true });
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'El valor del estatus no es valido (true o false)'
            });
        }
        res.json(marcas);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteMarcas = deleteMarcas;
const updateEstatusMarcas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idMarcas no es un valor válido'
        });
    }
    const marcas = yield marcas_model_1.default.findByPk(id);
    if (!marcas) {
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
        marcas.update({ estatus: false });
    }
    else if (fk_status == 'false') {
        marcas.update({ estatus: true });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: marcas,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusMarcas = updateEstatusMarcas;
//# sourceMappingURL=marcas.controller.js.map