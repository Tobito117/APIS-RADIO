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
exports.updateEstatusUsuarios = exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuarioById = exports.getUsuarios = void 0;
const usuarios_model_1 = __importDefault(require("../models/usuarios.model"));
//Función para obtener todos los elementos de una tabla
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuarios_model_1.default.findAll();
    res.json(usuarios);
});
exports.getUsuarios = getUsuarios;
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