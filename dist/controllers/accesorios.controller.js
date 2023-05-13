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
exports.updateEstatusAccesorios = exports.deleteAccesorios = exports.putAccesorios = exports.postAccesorios = exports.getAccesoriosById = exports.getAccesoriosFiltrado = exports.getAccesorios = void 0;
const accesorios_model_1 = __importDefault(require("../models/accesorios.model"));
//Función para obtener todos los elementos de unafkewnfkmewn
const getAccesorios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    //    const accesorios = await Accesorios.findAll();
    //    res.json(accesorios,);
    const accesorios = yield ((_a = accesorios_model_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query("SELECT accesorios.idaccesorios,accesorios.accesorio, accesorios.serie_bateria, accesorios.serie_cargador, accesorios.serie_gps, accesorios.marcas_idMarcas, " +
        "marcas.nombreMarcas, accesorios.inventario_interno, accesorios.inventario_segpub,accesorios.contrato_compra," +
        "accesorios.observaciones,accesorios.fecha_recepcion,accesorios.fk_sue,situacion_ubicacion_estatus.nombreStatus, " +
        "accesorios.estatus, accesorios.createdAt, accesorios.updatedAt " +
        "FROM accesorios " +
        "INNER JOIN marcas ON accesorios.marcas_idMarcas = marcas.idmarcas " +
        "INNER JOIN situacion_ubicacion_estatus ON accesorios.fk_sue = situacion_ubicacion_estatus.id_sue ", {
        replacements: [],
        model: accesorios_model_1.default,
        mapToModel: true
    }));
    res.json(accesorios);
});
exports.getAccesorios = getAccesorios;
const getAccesoriosFiltrado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { tipo } = req.params;
    const accesorios = yield ((_b = accesorios_model_1.default.sequelize) === null || _b === void 0 ? void 0 : _b.query("SELECT accesorios.idaccesorios,accesorios.accesorio, accesorios.serie_bateria, accesorios.serie_cargador,accesorios.serie_gps, " +
        "accesorios.marcas_idMarcas, marcas.nombreMarcas, accesorios.inventario_interno, " +
        "accesorios.inventario_segpub,accesorios.contrato_compra,accesorios.observaciones," +
        "accesorios.fecha_recepcion,accesorios.fk_sue,situacion_ubicacion_estatus.nombreStatus, " +
        "accesorios.estatus, accesorios.createdAt, accesorios.updatedAt " +
        "FROM accesorios " +
        "INNER JOIN marcas ON accesorios.marcas_idMarcas = marcas.idmarcas " +
        "INNER JOIN situacion_ubicacion_estatus ON accesorios.fk_sue = situacion_ubicacion_estatus.id_sue " +
        `WHERE accesorios.estatus = true AND accesorios.accesorio = '${tipo}'`, {
        replacements: [],
        model: accesorios_model_1.default,
        mapToModel: true
    }));
    res.json(accesorios);
});
exports.getAccesoriosFiltrado = getAccesoriosFiltrado;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getAccesoriosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const accesorios = yield accesorios_model_1.default.findByPk(id);
    if (accesorios) {
        res.json(accesorios);
    }
    else {
        res.status(404).json({
            msg: "No existe accesorio en la base de datos"
        });
    }
});
exports.getAccesoriosById = getAccesoriosById;
// Función para agregar un elemento a la tabla de nuestra base de datos accesorios
const postAccesorios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    //Validacion para que no se repita mismos usuarios, en este caso con el mismo correo EMAIL 
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
        const accesorios = yield accesorios_model_1.default.create(body);
        yield accesorios.save();
        res.json(accesorios);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postAccesorios = postAccesorios;
//Función para aztualizar un elemento a la tabla de nuestra base de datos accesorios
const putAccesorios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const accesorios = yield accesorios_model_1.default.findByPk(id);
        if (!accesorios) {
            return res.status(404).json({
                msg: 'No existe un Accesorio con el id ' + id
            });
        }
        yield accesorios.update(body);
        res.json(accesorios);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putAccesorios = putAccesorios;
//Función para borrar un elemento a la tabla de nuestra base de datos accesorios
const deleteAccesorios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const accesorios = yield accesorios_model_1.default.findByPk(id);
        if (!accesorios) {
            return res.status(404).json({
                msg: 'No existe un accesorio con el id ' + id
            });
        }
        // await usuario.destroy ();
        //await accesorios.update({ fk_status: 6 });
        const estado = accesorios.estatus;
        // await usuario.destroy ();
        //await zonasregiones.update({estatus: 6 });
        if (estado == true) {
            //Si el estatus viene con valor 'true' deshabilitada el registro
            yield accesorios.update({ estatus: false });
        }
        else if (estado == false) {
            yield accesorios.update({ estatus: true });
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'El valor del estatus no es valido (true o false)'
            });
        }
        res.json(accesorios);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteAccesorios = deleteAccesorios;
//Función para habilitar y deshabilitar el estatus de Accesorios 
const updateEstatusAccesorios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idAccesorio no es un valor válido'
        });
    }
    const accesorios = yield accesorios_model_1.default.findByPk(id);
    if (!accesorios) {
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
        accesorios.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        accesorios.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: accesorios,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusAccesorios = updateEstatusAccesorios;
//# sourceMappingURL=accesorios.controller.js.map