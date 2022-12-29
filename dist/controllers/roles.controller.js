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
exports.updateEstatusRoles = exports.deleteTipos = exports.putRoles = exports.postRoles = exports.getRolesById = exports.getRoles = void 0;
const roles_model_1 = __importDefault(require("../models/roles.model"));
//Función para obtener todos los elementos de una tabla
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const roles = yield roles_model_1.default.findAll();
    res.json(roles);
});
exports.getRoles = getRoles;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getRolesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const roles = yield roles_model_1.default.findByPk(id);
    if (roles) {
        res.json(roles);
    }
    else {
        res.status(404).json({
            msg: "No existe IdTipo en la base de datos"
        });
    }
});
exports.getRolesById = getRolesById;
//Función para agregar un elemento a la tabla de nuestra base de datos accesorios
const postRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const roles = yield roles_model_1.default.create(body);
        yield roles.save();
        res.json(roles);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postRoles = postRoles;
//Función para actualizar un elemento a la tabla de nuestra base de datos Tipos
const putRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const roles = yield roles_model_1.default.findByPk(id);
        if (!roles) {
            return res.status(404).json({
                msg: 'No existe un tipo con el id ' + id
            });
        }
        yield roles.update(body);
        res.json(roles);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putRoles = putRoles;
//Función para borrar un elemento a la tabla de nuestra base de datos tipos (Solo se dehabilita)
const deleteTipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const roles = yield roles_model_1.default.findByPk(id);
        if (!roles) {
            return res.status(404).json({
                msg: 'No existe un tipo con el id ' + id
            });
        }
        // await usuario.destroy ();
        //await tipos.update({ fk_status: 6 });
        const estado = roles.estatus;
        // await usuario.destroy ();
        //await zonasregiones.update({estatus: 6 });
        if (estado == true) {
            //Si el estatus viene con valor 'true' deshabilitada el registro
            yield roles.update({ estatus: false });
        }
        else if (estado == false) {
            yield roles.update({ estatus: true });
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'El valor del estatus no es valido (true o false)'
            });
        }
        res.json(roles);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteTipos = deleteTipos;
//Función para habilitar y deshabilitar el estatus de Tipos
const updateEstatusRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idTipos no es un valor válido'
        });
    }
    const roles = yield roles_model_1.default.findByPk(id);
    if (!roles) {
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
        roles.update({ estatus: false });
    }
    else if (fk_status == 'false') {
        roles.update({ estatus: true });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: roles,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusRoles = updateEstatusRoles;
//# sourceMappingURL=roles.controller.js.map