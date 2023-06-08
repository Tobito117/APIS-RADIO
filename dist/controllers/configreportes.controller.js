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
exports.updateEstatusConfigReportes = exports.deleteConfigReportes = exports.putConfigReportes = exports.postConfigReportes = exports.getConfigReportesById = exports.getConfigReportesByStatus = exports.getConfigReportes = void 0;
const configreportes_model_1 = __importDefault(require("../models/configreportes.model"));
//Función para obtener todos los elementos de una tabla
const getConfigReportes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const configreportes = yield ((_a = configreportes_model_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query("SELECT configreportes.idconfigReportes, configreportes.encabezado_carta, configreportes.articulo1, configreportes.articulo2, configreportes.articulo3,  " +
        "    configreportes.articulo4, configreportes.articulo5, configreportes.articulo6, configreportes.articulo7, configreportes.logoc4, configreportes.logo_ssypc, " +
        "    configreportes.fk_revisor, CONCAT(revisores.nombre, ' ' , revisores.apellido_pat, ' ' , revisores.apellido_mat) AS nombre_revisor, " +
        "    revisores.nombre, revisores.apellido_pat, revisores.apellido_mat, " +
        "    configreportes.fk_responsable_entrega, CONCAT(responsables.nombre, ' ' , responsables.apellido_pat, ' ' , responsables.apellido_mat) AS nombre_responsable, " +
        "    responsables.idusuarios AS idRes, responsables.nombre AS nombreRes, responsables.apellido_pat AS appatRes, responsables.apellido_mat AS apmatRes, " +
        "    configreportes.ccp_carta, configreportes.fecha_inicial, configreportes.fecha_final, configreportes.estatus, configreportes.createdAt, configreportes.updatedAt " +
        "FROM configreportes " +
        "LEFT JOIN usuarios AS revisores ON configreportes.fk_revisor = revisores.idusuarios " +
        "LEFT JOIN usuarios AS responsables ON configreportes.fk_responsable_entrega = responsables.idusuarios " +
        "ORDER BY configreportes.idconfigReportes DESC ", {
        replacements: [],
        model: configreportes_model_1.default,
        mapToModel: true
    }));
    res.json(configreportes);
});
exports.getConfigReportes = getConfigReportes;
const getConfigReportesByStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const configreportes = yield ((_b = configreportes_model_1.default.sequelize) === null || _b === void 0 ? void 0 : _b.query(`SELECT configreportes.idconfigReportes, 
        configreportes.encabezado_carta, 
        configreportes.articulo1, 
        configreportes.articulo2, 
        configreportes.articulo3,  
        configreportes.articulo4, 
        configreportes.articulo5, 
        configreportes.articulo6, 
        configreportes.articulo7, 
        configreportes.logoc4 , 
        configreportes.logo_ssypc, 
        configreportes.fk_revisor, 
        CONCAT(revisores.nombre, ' ' , revisores.apellido_pat, ' ' , revisores.apellido_mat) AS nombre_revisor, 
        revisores.nombre, 
        revisores.apellido_pat, 
        revisores.apellido_mat, 
        puestosRevisores.nombre AS nombrePuestoRevisor,  
        configreportes.fk_responsable_entrega, 
        CONCAT(responsables.nombre, ' ' , responsables.apellido_pat, ' ' , responsables.apellido_mat) AS nombre_responsable, 
        responsables.idusuarios AS idRes, 
        responsables.nombre AS nombreRes, 
        responsables.apellido_pat AS appatRes, 
        responsables.apellido_mat AS apmatRes, 
        puestosResponsables.nombre AS nombrePuestoRes,
        configreportes.ccp_carta, 
        configreportes.fecha_inicial, 
        configreportes.fecha_final, 
        configreportes.estatus, 
        configreportes.createdAt, 
        configreportes.updatedAt 
    FROM configreportes 
    LEFT JOIN usuarios AS revisores ON configreportes.fk_revisor = revisores.idusuarios 
    INNER JOIN puestos AS puestosRevisores ON revisores.fk_puesto = puestosRevisores.idpuesto
    LEFT JOIN usuarios AS responsables ON configreportes.fk_responsable_entrega = responsables.idusuarios 
    INNER JOIN puestos AS puestosResponsables ON responsables.fk_puesto = puestosResponsables.idpuesto 
    WHERE configreportes.estatus = true 
    ORDER BY configreportes.idconfigReportes DESC`, {
        replacements: [],
        model: configreportes_model_1.default,
        mapToModel: true
    }));
    res.json(configreportes);
});
exports.getConfigReportesByStatus = getConfigReportesByStatus;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getConfigReportesById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const configreportes = yield configreportes_model_1.default.findByPk(id);
    if (configreportes) {
        res.json(configreportes);
    }
    else {
        res.status(404).json({
            msg: "No existe configreportes en la base de datos"
        });
    }
});
exports.getConfigReportesById = getConfigReportesById;
// Función para agregar un elemento a la tabla de nuestra base de datos configreportes
const postConfigReportes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const configreportes = yield configreportes_model_1.default.create(body);
        yield configreportes.save();
        res.json(configreportes);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postConfigReportes = postConfigReportes;
//Función para actualizar un elemento a la tabla de nuestra base de datos configreportes
const putConfigReportes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const configreportes = yield configreportes_model_1.default.findByPk(id);
        if (!configreportes) {
            return res.status(404).json({
                msg: 'No existe una configreportes con el id ' + id
            });
        }
        yield configreportes.update(body);
        res.json(configreportes);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putConfigReportes = putConfigReportes;
//Función para borrar un elemento a la tabla de nuestra base de datos configreportes (Solo se dehabilita)
const deleteConfigReportes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const configreportes = yield configreportes_model_1.default.findByPk(id);
        if (!configreportes) {
            return res.status(404).json({
                msg: 'No existe una configreportes con el id ' + id
            });
        }
        const estado = configreportes.estatus;
        if (estado == true) {
            yield configreportes.update({ estatus: false });
        }
        else if (estado == false) {
            // await usuario.destroy (); //elimina elemento verdadero de la base de datos
            yield configreportes.update({ estatus: true });
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'El valor del estatus no es valido (true o false)'
            });
        }
        res.json(configreportes);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteConfigReportes = deleteConfigReportes;
//Función para habilitar y deshabilitar el estatus de configreportes
const updateEstatusConfigReportes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idConfigReportes no es un valor válido'
        });
    }
    const configreportes = yield configreportes_model_1.default.findByPk(id);
    if (!configreportes) {
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
        configreportes.update({ fk_status: 6 });
    }
    else if (fk_status == 'false') {
        configreportes.update({ fk_status: 1 });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: configreportes,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusConfigReportes = updateEstatusConfigReportes;
//# sourceMappingURL=configreportes.controller.js.map