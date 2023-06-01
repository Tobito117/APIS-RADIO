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
    var _a;
    //    const hojasservicios = await HojasServicios.findAll();
    //    res.json( hojasservicios );
    const hojasservicios = yield ((_a = hojas_servicios_model_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(`SELECT hojaservicios.idhojaservicios, hojaservicios.fecha_servicio,  
            asignaciones.idasignacion, 
            CONCAT (usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo, 
            radios.idradios,
            usuarios.nombre, 
        usuarios.apellido_pat,
        usuarios.apellido_mat,  
            radios.serie, 
            radios.tipo, 
            radios.inventario_interno, 
            radios.inventario_segpub,
            asignaciones.rfsi,
            hojaservicios.fk_idservicios,  
            servicios.idservicios, 
            servicios.nombreServicios, 
            hojaservicios.fk_idaccesorios, 
            accesorios.idaccesorios, 
            accesorios.serie_bateria, 
            accesorios.serie_cargador, 
            accesorios.serie_gps, 
            accesorios.inventario_interno, 
            accesorios.inventario_segpub, 
            hojaservicios.descripcion, 
            hojaservicios.entrego_equipo, 
            hojaservicios.fecha_entrega, 
            hojaservicios.fk_supervisortec, 
            supervisortec.idusuarios, 
            CONCAT (supervisortec.nombre, ' ', supervisortec.apellido_pat, ' ', supervisortec.apellido_mat ) AS nombreSupervisorTec,
            hojaservicios.usuario_servicio, 
            hojaservicios.usuario_entrega, 
            hojaservicios.fk_tecnico_entrega, 
            tecnico_entrega.idusuarios, 
            CONCAT (tecnico_entrega.nombre, ' ', tecnico_entrega.apellido_pat, ' ', tecnico_entrega.apellido_mat ) AS nombreTecEntrega, 
            hojaservicios.estatus, 
            hojaservicios.createdAt, 
            hojaservicios.updatedAt 
        FROM hojaservicios 
        INNER JOIN asignaciones ON hojaservicios.fk_idasignacion_ur = asignaciones.idasignacion 
        INNER JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
        INNER JOIN usuarios AS supervisortec ON hojaservicios.fk_supervisortec = supervisortec.idusuarios  
        INNER JOIN usuarios AS tecnico_entrega ON hojaservicios.fk_tecnico_entrega = tecnico_entrega.idusuarios 
        INNER JOIN servicios ON hojaservicios.fk_idservicios = servicios.idservicios  
        INNER JOIN radios ON asignaciones.radios_idradios = radios.idradios 
        INNER JOIN accesorios ON hojaservicios.fk_idaccesorios = accesorios.idaccesorios`, {
        replacements: [],
        model: hojas_servicios_model_1.default,
        mapToModel: true
    }));
    res.json(hojasservicios);
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