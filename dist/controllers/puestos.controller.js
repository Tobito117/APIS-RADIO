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
exports.updateEstatusPuestos = exports.deletePuestos = exports.putPuestos = exports.postPuestos = exports.getPuestosById = exports.getPuestos = void 0;
const puestos_model_1 = __importDefault(require("../models/puestos.model"));
//Función para obtener todos los elementos de una tabla
const getPuestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    //CONSULTA DONDE SE TRAE LOS ELEMENTOS MOSTRADOS DEL QUERY
    const puestos = yield ((_a = puestos_model_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query("SELECT puestos.idpuesto, puestos.nombre, corporaciones.nombreCorporacion, puestos.estatus, puestos.createdAt, puestos.updatedAt FROM puestos INNER JOIN corporaciones ON puestos.idpuesto = corporaciones.idcorporaciones", {
        replacements: [],
        model: puestos_model_1.default,
        mapToModel: true
    }));
    res.json(puestos);
});
exports.getPuestos = getPuestos;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getPuestosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { id } = req.params;
    //CONSULTA DONDE SE TRAE LOS ELEMENTOS MOSTRADOS DEL QUERY
    const puestos = yield ((_b = puestos_model_1.default.sequelize) === null || _b === void 0 ? void 0 : _b.query("SELECT puestos.idpuesto, puestos.nombre, corporaciones.nombreCorporacion, puestos.estatus FROM puestos INNER JOIN corporaciones ON puestos.idpuesto = corporaciones.idcorporaciones where idpuesto = ?", {
        replacements: [id],
        model: puestos_model_1.default,
        mapToModel: true
    }));
    let idp;
    for (let i of puestos) {
        idp = i.dataValues.idpuesto;
    }
    console.log(idp);
    if (idp) {
        res.json({
            Datos: puestos,
            success: true,
            messagge: "Datos Obtenidos Correctamente"
        });
    }
    else {
        res.status(404).json({
            msg: "No existe puesto en la base de datos"
        });
    }
});
exports.getPuestosById = getPuestosById;
//Función para agregar un elemento a la tabla de nuestra base de datos puestos
const postPuestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const puestos = yield puestos_model_1.default.create(body);
        yield puestos.save();
        res.json({
            Datos: puestos,
            success: true,
            messagge: "Datos Obtenidos Correctamente"
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postPuestos = postPuestos;
//Función para actualizar un elemento a la tabla de nuestra base de datos puestos
const putPuestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const puestos = yield puestos_model_1.default.findByPk(id);
        if (!puestos) {
            return res.status(404).json({
                msg: 'No existe un puesto con el id ' + id
            });
        }
        yield puestos.update(body);
        res.json(puestos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putPuestos = putPuestos;
//Función para borrar un elemento a la tabla de nuestra base de datos puestos (Solo se dehabilita)
const deletePuestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const puestos = yield puestos_model_1.default.findByPk(id);
        if (!puestos) {
            return res.status(404).json({
                msg: 'No existe un puesto con el id ' + id
            });
        }
        // await usuario.destroy ();
        //await puestos.update({ fk_status: 6 });
        const estado = puestos.estatus;
        if (estado == true) {
            //Si el estatus viene con valor 'true' deshabilitada el registro
            yield puestos.update({ estatus: false });
        }
        else if (estado == false) {
            yield puestos.update({ estatus: true });
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'El valor del estatus no es valido (true o false)'
            });
        }
        res.json(puestos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deletePuestos = deletePuestos;
//Función para habilitar y deshabilitar el estatus de puestos
const updateEstatusPuestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El id no es un valor válido'
        });
    }
    const puestos = yield puestos_model_1.default.findByPk(id);
    if (!puestos) {
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
        puestos.update({ estatus: false });
    }
    else if (fk_status == 'false') {
        puestos.update({ estatus: true });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: puestos,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusPuestos = updateEstatusPuestos;
//# sourceMappingURL=puestos.controller.js.map