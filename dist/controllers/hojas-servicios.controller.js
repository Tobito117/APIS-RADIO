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
exports.updateEstatusHojasServicios = exports.deleteHojasServicios = exports.putHojasServicios = exports.postHojasServicios = exports.getHojasServiciosById = exports.getHojasServicios = void 0;
const hojas_servicios_model_1 = __importDefault(require("../models/hojas-servicios.model"));
//Función para obtener todos los elementos de una tabla
const getHojasServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hojasservicios = yield hojas_servicios_model_1.default.findAll();
    res.json(hojasservicios);
    //const hojasservicios: any = await HojasServicios.sequelize?.query("SELECT  hojaservicios.idhojaservicios, hojaservicios.fecha_servicio, hojaservicios.fk_usuario, usuarios., hojaservicios.inventario_segpub, hojaservicios.fk_propietario, corporaciones.nombreCorporacion, radios.fk_recurso_compra, recursocompras.nombreRecursoCompra,radios.contrato_compra, radios.rfsi, radios.fk_marca, marcas.nombreMarcas, radios.fecha_actualizacion, radios.fecha_asignacion, radios.observaciones, radios.fecha_recepcion,radios.fk_sue, situacion_ubicacion_estatus.nombreStatus,radios.estatus,radios.createdAt, radios.updatedAt, radios.tipo FROM radios INNER JOIN corporaciones ON radios.fk_propietario = corporaciones.idcorporaciones INNER JOIN recursocompras ON radios.fk_recurso_compra = recursocompras.idrecursoCompras INNER JOIN marcas ON radios.fk_marca = marcas.idmarcas INNER JOIN situacion_ubicacion_estatus ON radios.fk_sue = situacion_ubicacion_estatus.id_sue", {
    // replacements: [],
    // model: HojasServicios,
    // mapToModel: true
    //
    //
    //.json(hojasservicios);
});
exports.getHojasServicios = getHojasServicios;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getHojasServiciosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const hojasservicios = yield hojas_servicios_model_1.default.findByPk(id);
    if (hojasservicios) {
        res.json(hojasservicios);
    }
    else {
        res.status(404).json({
            msg: "No existe hoja-servicio en la base de datos"
        });
    }
});
exports.getHojasServiciosById = getHojasServiciosById;
//Función para agregar un elemento a la tabla de nuestra base de datos hoja-servicio
const postHojasServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const hojasservicios = yield hojas_servicios_model_1.default.create(body);
        yield hojasservicios.save();
        res.json(hojasservicios);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postHojasServicios = postHojasServicios;
//Función para actualizar un elemento a la tabla de nuestra base de datos hoja-servicios
const putHojasServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const hojasservicios = yield hojas_servicios_model_1.default.findByPk(id);
        if (!hojasservicios) {
            return res.status(404).json({
                msg: 'No existe una hoja-servicios con el id ' + id
            });
        }
        yield hojasservicios.update(body);
        res.json(hojasservicios);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putHojasServicios = putHojasServicios;
//Función para borrar un elemento a la tabla de nuestra base de datos asig_usuarios (Solo se dehabilita)
const deleteHojasServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const hojasservicios = yield hojas_servicios_model_1.default.findByPk(id);
        if (!hojasservicios) {
            return res.status(404).json({
                msg: 'No existe una hoja-servicios con el id ' + id
            });
        }
        // await usuario.destroy (); //se elimina el elemento total de la base de datos
        yield hojasservicios.update({ fk_status: 6 });
        res.json(hojasservicios);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteHojasServicios = deleteHojasServicios;
//Función para habilitar y deshabilitar el estatus de hojas-servicios
const updateEstatusHojasServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idHojasServicios no es un valor válido'
        });
    }
    const hojasservicios = yield hojas_servicios_model_1.default.findByPk(id);
    if (!hojasservicios) {
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
        hojasservicios.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        hojasservicios.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: hojasservicios,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusHojasServicios = updateEstatusHojasServicios;
//# sourceMappingURL=hojas-servicios.controller.js.map