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
exports.updateEstatusAsig_Usuarios = exports.actualizarSueRadio = exports.deleteAsig_Usuarios = exports.putAsig_Usuarios = exports.postAsig_Usuarios = exports.getAsig_UsuariosById = exports.getAsig_Usuarios = void 0;
const asig_usuario_radio_model_1 = __importDefault(require("../models/asig_usuario_radio.model"));
const radios_model_1 = __importDefault(require("../models/radios.model"));
//import Asig_Usuarios from '../models/asig_usuario_radio.model';
//Función para obtener todos los elementos de una tabla
const getAsig_Usuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // const asig_usuarios = await Asig_Usuarios.findAll();
    const asig_usuarios = yield ((_a = asig_usuario_radio_model_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query("SELECT asignaciones.idasignacion, " +
        "usuarios.idusuarios, CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo, usuarios.clave_elector, " +
        "asignaciones.rfsi, " +
        "radios.idradios, radios.serie AS serie_radio, " +
        "vehiculos.idvehiculo, vehiculos.placa,  " +
        "asignaciones.estatus, asignaciones.createdAt, asignaciones.updatedAt, " +
        "cargadores.idaccesorios AS idcargador, cargadores.num_serie AS serie_cargador, " +
        "baterias.idaccesorios AS idbateria, baterias.num_serie AS serie_bateria, " +
        "gps.idaccesorios AS idgps, gps.num_serie AS serie_gps " +
        "FROM asignaciones " +
        "INNER JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios " +
        "INNER JOIN radios ON asignaciones.radios_idradios = radios.idradios " +
        "LEFT JOIN vehiculos ON asignaciones.fk_vehiculo = vehiculos.idvehiculo " +
        "LEFT JOIN accesorios AS baterias ON asignaciones.fk_accesorio_bateria = baterias.idaccesorios " +
        "LEFT JOIN accesorios AS cargadores ON asignaciones.fk_accesorio_cargador = cargadores.idaccesorios " +
        "LEFT JOIN accesorios AS gps ON asignaciones.fk_accesorio_gps = gps.idaccesorios ", {
        replacements: [],
        model: asig_usuario_radio_model_1.default,
        mapToModel: true
    }));
    res.json(asig_usuarios);
});
exports.getAsig_Usuarios = getAsig_Usuarios;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getAsig_UsuariosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const asig_usuarios = yield asig_usuario_radio_model_1.default.findByPk(id);
    if (asig_usuarios) {
        res.json(asig_usuarios);
    }
    else {
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    }
});
exports.getAsig_UsuariosById = getAsig_UsuariosById;
// Función para agregar un elemento a la tabla de nuestra base de datos asig_usuarios
const postAsig_Usuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const asig_usuarios = yield asig_usuario_radio_model_1.default.create(body);
        yield asig_usuarios.save();
        res.json(asig_usuarios);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postAsig_Usuarios = postAsig_Usuarios;
//Función para actualizar un elemento a la tabla de nuestra base de datos asig_usuarios
const putAsig_Usuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const asig_usuarios = yield asig_usuario_radio_model_1.default.findByPk(id);
        if (!asig_usuarios) {
            return res.status(404).json({
                msg: 'No existe un asig_usuarios con el id ' + id
            });
        }
        yield asig_usuarios.update(body);
        res.json(asig_usuarios);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putAsig_Usuarios = putAsig_Usuarios;
//Función para borrar un elemento a la tabla de nuestra base de datos asig_usuarios (Solo se dehabilita)
const deleteAsig_Usuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const asignacion = yield asig_usuario_radio_model_1.default.findByPk(id);
        if (!asignacion) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        // await usuario.destroy ();
        //const UsuarioAutenticado = req.user;
        const estado = asignacion.estatus;
        //console.log('dfwwfeffg',estado);
        //await usuario.update({ estatus: false });
        if (estado == true) {
            //Si el estatus viene con valor 'true' deshabilitada el registro
            yield asignacion.update({ estatus: false });
        }
        else if (estado == false) {
            yield asignacion.update({ estatus: true });
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'El valor del estatus no es valido (true o false)'
            });
        }
        res.json(asignacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteAsig_Usuarios = deleteAsig_Usuarios;
const actualizarSueRadio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const sueRadio = yield radios_model_1.default.findByPk(id);
        yield sueRadio.update({ fk_sue: 7, fecha_asignacion: new Date() });
        res.json(sueRadio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.actualizarSueRadio = actualizarSueRadio;
//Función para habilitar y deshabilitar el estatus de asig_usuarios
const updateEstatusAsig_Usuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idAsignacioUsuarios no es un valor válido'
        });
    }
    const asig_usuarios = yield asig_usuario_radio_model_1.default.findByPk(id);
    if (!asig_usuarios) {
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
        asig_usuarios.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        asig_usuarios.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: asig_usuarios,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusAsig_Usuarios = updateEstatusAsig_Usuarios;
//# sourceMappingURL=asig_usuarios.controller.js.map