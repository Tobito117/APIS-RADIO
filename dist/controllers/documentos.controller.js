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
exports.mostrarImange = exports.postDocumentos = exports.updateEstatusDocumentos = exports.deleteDocumentos = exports.putDocumentos = exports.getDocumentosById = exports.getDocumentos = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const documentos_model_1 = __importDefault(require("../models/documentos.model"));
const subir_archivo_1 = require("../helpers/subir-archivo");
//Función para obtener todos los elementos de una tabla
const getDocumentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const documentos = yield documentos_model_1.default.findAll();
    res.json({ documentos });
});
exports.getDocumentos = getDocumentos;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getDocumentosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const documentos = yield documentos_model_1.default.findByPk(id);
    if (documentos) {
        res.json(documentos);
    }
    else {
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    }
});
exports.getDocumentosById = getDocumentosById;
//Función para actualizar un elemento a la tabla de nuestra base de datos documentos
// export const postDocumentos = async( req: Request , res: Response ) => {
// const { body } = req;
// try {
//     // const existeEmail = await Usuarios.findOne({
//     //     where: {
//     //         email: body.email
//     //     }
//     // })
//     // if (existeEmail){
//     //     return res.status(400).json({
//     //         msg: 'Ya existe un usuario con el email ' + body.email
//     //     });
//     // }
//     const documentos = await Documentos.create(body);
//     await documentos.save();
//     res.json(documentos);
// } catch (error) {
//     res.status(500).json({
//         msg: 'Hable con el Administrador'
//     })
// }
// }
//Función para actualizar un elemento a la tabla de nuestra base de datos documentos
const putDocumentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { id } = req.params;
    // const { body } =  req;
    // try {
    //     const documentos = await Documentos.findByPk( id );
    //     if (!documentos){
    //         return res.status(404).json({
    //             msg: 'No existe un Documento con el id ' + id
    //         })
    //     }
    //     await documentos.update ( body );
    //     res.json( documentos );
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({
    //         msg: 'Hable con el Administrador'
    //     })
    // }
    const { id, coleccion } = req.params;
    let modelo;
    switch (coleccion) {
        case 'users':
            modelo = yield documentos_model_1.default.findByPk(id);
            if (!modelo) {
                return res.status(400).json({
                    msg: `No existe un documento con el id ${id}`
                });
            }
            break;
        default:
            return res.status(500).json({ msg: 'se me olvido validar esto' });
    }
    //Limpiar imagenes privadas
    if (modelo.nombre) {
        // Hay que borrar la imagen del servidor
        const pathImagen = path_1.default.join(__dirname, '../uploads/', coleccion, modelo.nombre);
        // console.log(pathImagen);
        if (fs_1.default.existsSync(pathImagen)) {
            fs_1.default.unlinkSync(pathImagen);
        }
    }
    const nombre = yield (0, subir_archivo_1.subirArchivo)(req, req.files, undefined, coleccion);
    modelo.nombre = nombre;
    yield modelo.save();
    res.json({
        id: id,
        coleccion: coleccion
    });
});
exports.putDocumentos = putDocumentos;
//Función para borrar un elemento a la tabla de nuestra base de datos documentos (Solo se dehabilita)
const deleteDocumentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const documentos = yield documentos_model_1.default.findByPk(id);
        if (!documentos) {
            return res.status(404).json({
                msg: 'No existe un documento con el id ' + id
            });
        }
        // await usuario.destroy ();
        yield documentos.update({ status: 0 });
        res.json(documentos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteDocumentos = deleteDocumentos;
//Función para habilitar y deshabilitar el estatus de Accesorios 
const updateEstatusDocumentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idDocumento no es un valor válido'
        });
    }
    const documentos = yield documentos_model_1.default.findByPk(id);
    if (!documentos) {
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
        documentos.update({ status: 0 });
    }
    else if (fk_status == 'false') {
        documentos.update({ status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: documentos,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusDocumentos = updateEstatusDocumentos;
//Cargar Archivo 
const postDocumentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //   const nombre = await subirArchivo(req, req.files, ['docx', 'xlsx', 'pdf', 'txt'], 'textos') eyyyyy;
        const nombre = yield (0, subir_archivo_1.subirArchivo)(req, req.files, undefined, 'imgs');
        console.log(nombre);
        const prueba = {
            nombre: nombre,
            estatus: true
        };
        const documentos = yield documentos_model_1.default.create(prueba);
        yield documentos.save();
        res.json(documentos);
    }
    catch (msg) {
        res.status(400).json({ msg });
    }
});
exports.postDocumentos = postDocumentos;
//Cargar Archivo 
const mostrarImange = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, coleccion } = req.params;
    let modelo;
    switch (coleccion) {
        case 'users':
            modelo = yield documentos_model_1.default.findByPk(id);
            if (!modelo) {
                return res.status(400).json({
                    msg: `No existe un documento con el id ${id}`
                });
            }
            break;
        default:
            return res.status(500).json({ msg: 'se me olvido validar esto' });
    }
    //Limpiar imagenes privadas
    if (modelo.nombre) {
        // Hay que borrar la imagen del servidor
        const pathImagen = path_1.default.join('../uploads/', coleccion, modelo.nombre);
        if (fs_1.default.existsSync(pathImagen)) {
            return res.sendFile(pathImagen);
        }
    }
    const pathImagen = path_1.default.join(__dirname, `../uploads/imgs/${modelo.nombre}`);
    res.sendFile(pathImagen);
    console.log(pathImagen);
});
exports.mostrarImange = mostrarImange;
//# sourceMappingURL=documentos.controller.js.map