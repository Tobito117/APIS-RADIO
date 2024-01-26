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
exports.updateEstatusUsuarios = exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuarioById = exports.getUsuariosIdCorporacion3 = exports.getUsuariosIdCorporacion2 = exports.getUsuariosIdCorporacion = exports.getMaxUsuario = exports.getUsuariosIdNombre = exports.getUsuarios = void 0;
const usuarios_model_1 = __importDefault(require("../models/usuarios.model"));
//Función para obtener todos los elementos de una tabla
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    //const usuarios = await Usuarios.findAll();
    const usuarios = yield ((_a = usuarios_model_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(`SELECT usuarios.idusuarios, 
                usuarios.nombre, 
                usuarios.apellido_pat, 
                usuarios.apellido_mat,
                CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo,
                usuarios.fk_puesto, 
                puestos.idpuesto, 
                puestos.nombre AS nombrePuesto, 
                puestos.fk_corporacion, 
                corporaciones.idcorporaciones, 
                corporaciones.nombreCorporacion,
                usuarios.cuip, 
                usuarios.clave_elector, 
                usuarios.imagen_ine, 
                usuarios.fk_documento_ine, 
                usuarios.fk_documento_cuip,
                usuarios.imagen_cuip, 
                usuarios.titulo, 
                usuarios.estatus, 
                usuarios.createdAt, 
                usuarios.updatedAt
        FROM usuarios
        LEFT JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
        LEFT JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
        ORDER BY usuarios.idusuarios DESC`, {
        replacements: [],
        model: usuarios_model_1.default,
        mapToModel: true
    }));
    res.json(usuarios);
});
exports.getUsuarios = getUsuarios;
const getUsuariosIdNombre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const usuarios = yield ((_b = usuarios_model_1.default.sequelize) === null || _b === void 0 ? void 0 : _b.query("SELECT idusuarios, CONCAT(nombre, ' ', apellido_pat, ' ', apellido_mat) AS nombreUsuario FROM usuarios WHERE estatus=1 ORDER BY nombreUsuario", {
        replacements: [],
        model: usuarios_model_1.default,
        mapToModel: true
    }));
    res.json(usuarios);
    console.log(usuarios);
});
exports.getUsuariosIdNombre = getUsuariosIdNombre;
const getMaxUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const usuarios = yield ((_c = usuarios_model_1.default.sequelize) === null || _c === void 0 ? void 0 : _c.query("SELECT MAX(idusuarios) FROM usuarios", {
        replacements: [],
        model: usuarios_model_1.default,
        mapToModel: true
    }));
    res.json(usuarios);
    console.log(usuarios);
});
exports.getMaxUsuario = getMaxUsuario;
const getUsuariosIdCorporacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const { id } = req.params;
    const usuarios = yield ((_d = usuarios_model_1.default.sequelize) === null || _d === void 0 ? void 0 : _d.query(`SELECT usuarios.idusuarios, usuarios.nombre, usuarios.apellido_pat, usuarios.apellido_mat,
		CONCAT (usuarios.nombre, " ", usuarios.apellido_pat, " ", usuarios.apellido_mat ) AS nombre_completo,
		usuarios.fk_puesto, puestos.idpuesto, puestos.nombre AS nombrePuesto, puestos.fk_corporacion, corporaciones.idcorporaciones, corporaciones.nombreCorporacion,
		usuarios.cuip, usuarios.clave_elector, usuarios.imagen_ine, usuarios.imagen_cuip, usuarios.titulo, usuarios.estatus, usuarios.createdAt, usuarios.updatedAt
    FROM usuarios
    LEFT JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
    LEFT JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
    WHERE usuarios.estatus=1 AND corporaciones.idcorporaciones = ${id}
    ORDER BY usuarios.idusuarios DESC`, {
        replacements: [],
        model: usuarios_model_1.default,
        mapToModel: true
    }));
    res.json(usuarios);
});
exports.getUsuariosIdCorporacion = getUsuariosIdCorporacion;
const getUsuariosIdCorporacion2 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    const { id } = req.params;
    const usuarios = yield ((_e = usuarios_model_1.default.sequelize) === null || _e === void 0 ? void 0 : _e.query(`SELECT usuarios.idusuarios AS idRes, usuarios.nombre AS nombreRes, usuarios.apellido_pat AS appatRes, usuarios.apellido_mat AS apmatRes,
		usuarios.fk_puesto, puestos.idpuesto, puestos.nombre AS nombrePuesto, puestos.fk_corporacion, corporaciones.idcorporaciones, corporaciones.nombreCorporacion,
		usuarios.cuip, usuarios.clave_elector, usuarios.imagen_ine, usuarios.imagen_cuip, usuarios.titulo, usuarios.estatus, usuarios.createdAt, usuarios.updatedAt
    FROM usuarios
    LEFT JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
    LEFT JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
    WHERE usuarios.estatus=1 AND corporaciones.idcorporaciones = ${id}
    ORDER BY usuarios.idusuarios DESC`, {
        replacements: [],
        model: usuarios_model_1.default,
        mapToModel: true
    }));
    res.json(usuarios);
});
exports.getUsuariosIdCorporacion2 = getUsuariosIdCorporacion2;
const getUsuariosIdCorporacion3 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _f;
    const { id } = req.params;
    const usuarios = yield ((_f = usuarios_model_1.default.sequelize) === null || _f === void 0 ? void 0 : _f.query(`SELECT usuarios.idusuarios AS idSup, usuarios.nombre AS nombreSup, usuarios.apellido_pat AS appatSup, usuarios.apellido_mat AS apmatSup,
		usuarios.fk_puesto, puestos.idpuesto, puestos.nombre AS nombrePuesto, puestos.fk_corporacion, corporaciones.idcorporaciones, corporaciones.nombreCorporacion,
		usuarios.cuip, usuarios.clave_elector, usuarios.imagen_ine, usuarios.imagen_cuip, usuarios.titulo, usuarios.estatus, usuarios.createdAt, usuarios.updatedAt
    FROM usuarios
    LEFT JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
    LEFT JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
    WHERE usuarios.estatus=1 AND corporaciones.idcorporaciones = ${id}
    ORDER BY usuarios.idusuarios DESC`, {
        replacements: [],
        model: usuarios_model_1.default,
        mapToModel: true
    }));
    res.json(usuarios);
});
exports.getUsuariosIdCorporacion3 = getUsuariosIdCorporacion3;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID
const getUsuarioById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuarios_model_1.default.findByPk(id);
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    }
});
exports.getUsuarioById = getUsuarioById;
//Función para agregar un elemento a la tabla de nuestra base de datos accesorios
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        console.log(body);
        const usuario = yield usuarios_model_1.default.create(body);
        yield usuario.save();
        res.json(usuario);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postUsuario = postUsuario;
//Función para actualizar un elemento a la tabla de nuestra base de datos USUARIOS
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuarios_model_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        console.log(body);
        yield usuario.update(body);
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putUsuario = putUsuario;
//Función para borrar un elemento a la tabla de nuestra base de datos usuarios (Solo se dehabilita)
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield usuarios_model_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        // await usuario.destroy ();
        //await usuario.update({ fk_status: 6 });
        const estado = usuario.estatus;
        if (estado == true) {
            //Si el estatus viene con valor 'true' deshabilitada el registro
            yield usuario.update({ estatus: false });
        }
        else if (estado == false) {
            yield usuario.update({ estatus: true });
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'El valor del estatus no es valido (true o false)'
            });
        }
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteUsuario = deleteUsuario;
//Función para habilitar y deshabilitar el estatus de usuarios
const updateEstatusUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idusuarios no es un valor válido'
        });
    }
    const usuarios = yield usuarios_model_1.default.findByPk(id);
    if (!usuarios) {
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
        usuarios.update({ estatus: false });
    }
    else if (fk_status == 'false') {
        usuarios.update({ estatus: true });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: usuarios,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusUsuarios = updateEstatusUsuarios;
//# sourceMappingURL=usuarios.controller.js.map