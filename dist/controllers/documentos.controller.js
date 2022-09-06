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
exports.postDocumentos = exports.updateEstatusDocumentos = exports.deleteDocumentos = exports.putDocumentos = exports.getDocumentosById = exports.getDocumentos = void 0;
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
//     const { body } = req;
//     try {
//         // const existeEmail = await Usuarios.findOne({
//         //     where: {
//         //         email: body.email
//         //     }
//         // })
//         // if (existeEmail){
//         //     return res.status(400).json({
//         //         msg: 'Ya existe un usuario con el email ' + body.email
//         //     });
//         // }
//         const documentos = await Documentos.create(body);
//         await documentos.save();
//         res.json(documentos);
//     } catch (error) {
//         res.status(500).json({
//             msg: 'Hable con el Administrador'
//         })
//     }
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
    const { id } = req.params;
    res.json({
        id: id
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
    var _a;
    if (!req.files || Object.keys(req.files).length === 0 || !((_a = req.files) === null || _a === void 0 ? void 0 : _a.archivo)) {
        res.status(400).json({ msg: 'No hay archivos que subir' });
        return;
    }
    try {
        //   const nombre = await subirArchivo(req, req.files, ['docx', 'xlsx', 'pdf', 'txt'], 'textos');
        const nombre = yield (0, subir_archivo_1.subirArchivo)(req, req.files, undefined, 'archivos');
        res.json({ nombre });
    }
    catch (msg) {
        res.status(400).json({ msg });
    }
});
exports.postDocumentos = postDocumentos;
//# sourceMappingURL=documentos.controller.js.map