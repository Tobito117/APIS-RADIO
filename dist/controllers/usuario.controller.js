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
exports.revalidarToken = exports.validarUsuarioPrueba = exports.updateEstatusUsuario = exports.cambiarContraseña = exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuarioById = exports.getUsuarios = void 0;
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
const generar_jwt_1 = require("../helpers/generar-jwt");
//Función para obtener todos los elementos de una tabla
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_model_1.default.findAll();
    res.json(usuarios);
});
exports.getUsuarios = getUsuarios;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getUsuarioById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_model_1.default.findByPk(id);
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
//Función para agregar un elemento a la tabla de nuestra base de datos usuario
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        // const existeEmail = await User.findOne({
        //     where: {
        //         email: body.email
        //     }
        // })
        // if (existeEmail){
        //     return res.status(400).json({
        //         msg: 'Ya existe un usuario con el email ' + body.email
        //     });
        // }
        const usuario = yield usuario_model_1.default.create(body);
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
//Función para actualizar un elemento a la tabla de nuestra base de datos usuario
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_model_1.default.findByPk(id);
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
        const usuario = yield usuario_model_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        // await usuario.destroy ();
        const UsuarioAutenticado = req.user;
        const estado = usuario.estatus;
        console.log('dfwwfeffg', estado);
        //await usuario.update({ estatus: false });
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
        res.json({ usuario, UsuarioAutenticado });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteUsuario = deleteUsuario;
const cambiarContraseña = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_model_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        const UsuarioAutenticado = req.user;
        const contraseña = usuario.password;
        if (contraseña !== body.bpassword) {
            return res.status(500).json({
                message: 'Contraseña Incorrecta '
            });
        }
        if (body.password !== body.confirmNewPassword) {
            return res.status(500).json({
                message: 'La nueva contraseña no coincide'
            });
        }
        if (contraseña == body.bpassword && body.password == body.confirmNewPassword) {
            yield usuario.update({ password: body.password });
        }
        else {
            return res.status(500).json({
                success: false,
                message: 'error al actualizar contraseña'
            });
        }
        res.json({ usuario, UsuarioAutenticado });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.cambiarContraseña = cambiarContraseña;
//Función para habilitar y deshabilitar el estatus de status
const updateEstatusUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El iduser no es un valor válido'
        });
    }
    const user = yield usuario_model_1.default.findByPk(id);
    if (!user) {
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
        user.update({ estatus: false });
    }
    else if (fk_status == 'false') {
        user.update({ estatus: true });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: user,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusUsuario = updateEstatusUsuario;
//GENERAR JWT PRUEBAAAA
//VALIDAMOS QUE EL USUARIO EXISTA, EL USERNAME EXISTA Y ESTE ACTIVO
const validarUsuarioPrueba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //verificar si el usuario existe
        const existeUsuario = yield usuario_model_1.default.findOne({
            where: {
                username: body.username,
                password: body.password
            }
        });
        console.log(existeUsuario.dataValues.idusers);
        //Verificar si el email existe
        if (!existeUsuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - name'
            });
        }
        //si el usuario está activo
        if (!existeUsuario.dataValues.estatus) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: inactivo'
            });
        }
        //Genenerar JWT 
        const token = yield (0, generar_jwt_1.generarJWT)(existeUsuario.dataValues.idusers);
        res.json({
            existeUsuario,
            token
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.validarUsuarioPrueba = validarUsuarioPrueba;
const revalidarToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.id;
    const existeUsuario = yield usuario_model_1.default.findOne({
        where: {
            idusers: id
        }
    });
    // Generar JWT
    const token = yield (0, generar_jwt_1.generarJWT)(existeUsuario.dataValues.idusers);
    res.json({
        ok: true,
        idusers: existeUsuario.dataValues.idusers,
        username: existeUsuario.dataValues.username,
        token
    });
});
exports.revalidarToken = revalidarToken;
// AQUI ERA ERA UNA FUNCION DE LLAVE PARA VALIDAR CIERTOS CAMPOS
// export const validarCampos = async (req: Request, res: Response, next: NextFunction) => {
//   // const idUsers = Number(request.params.idUsers);
//   // const NameUser = request.query.NameUser;
//   // const PassUser = request.query.PassUser;
//    const body = req.body;
//    const idUser = body.idUser;
//    console.log("IdUsuario", idUser);
//   // const estatus = body.estatus;
//   const errors = validationResult(req);
//     if( !errors.isEmpty() ){
//         return res.status(400).json(errors);
//     }
//     next();
// }
//# sourceMappingURL=usuario.controller.js.map