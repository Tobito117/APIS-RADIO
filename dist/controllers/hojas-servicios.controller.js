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
exports.updateEstatusHojasServicios = exports.deleteHojasServicios = exports.putHojasServicios = exports.postHojasServicios = exports.getHojasServiciosById = exports.getHojasServiciosUltimo = exports.getHojasServicios = void 0;
const hojas_servicios_model_1 = __importDefault(require("../models/hojas-servicios.model"));
//Función para obtener todos los elementos de una tabla
const getHojasServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    //    const hojasservicios = await HojasServicios.findAll();
    //    res.json( hojasservicios );
    const hojasservicios = yield ((_a = hojas_servicios_model_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(`SELECT hojaservicios.idhojaservicios, hojaservicios.folio, hojaservicios.fecha_servicio, hojaservicios.servicios, hojaservicios.fk_idasignacion_ur,  
            asignaciones.idasignacion, 
            CONCAT (usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo, 
            usuarios.nombre, 
            usuarios.apellido_pat,
            usuarios.apellido_mat,
            corporaciones.nombreCorporacion,
            puestos.nombre AS nombrePuesto,
            radios.idradios,  
            radios.serie, 
            radios.tipo, 
            radios.inventario_interno, 
            radios.inventario_segpub,
            asignaciones.rfsi,
            baterias.idaccesorios AS idbateria, 
            baterias.serie_bateria, 
            baterias.inventario_interno AS inventario_int_bateria,
            cargadores.idaccesorios AS idcargador, 
            cargadores.serie_cargador,
            cargadores.inventario_interno AS inventario_int_cargador,
            gps.idaccesorios AS idgps,
            gps.serie_gps,
            gps.inventario_interno AS inventario_int_gps, 
            vehiculos.unidad,
            zonasregiones.nombreZonasRegiones,
            hojaservicios.descripcion,
            hojaservicios.foto1,
            hojaservicios.fk_foto1,
            hojaservicios.foto2,
            hojaservicios.fk_foto2,
            hojaservicios.folio, 
            hojaservicios.entrego_equipo, 
            hojaservicios.fecha_entrega, 
            hojaservicios.fk_supervisortec, 
            supervisortec.idusuarios AS id_supervisortec, 
            supervisortec.idusuarios AS idSup, supervisortec.nombre AS nombreSup, supervisortec.apellido_pat AS appatSup, supervisortec.apellido_mat AS apmatSup,
            CONCAT (supervisortec.nombre, ' ', supervisortec.apellido_pat, ' ', supervisortec.apellido_mat ) AS nombreSupervisorTec,
            hojaservicios.usuario_servicio, 
            hojaservicios.usuario_entrega, 
            hojaservicios.fk_tecnico_entrega, 
            tecnicos.idusuarios AS id_tecnico_entrega,
            tecnicos.idusuarios AS idRes, tecnicos.nombre AS nombreRes, tecnicos.apellido_pat AS appatRes, tecnicos.apellido_mat AS apmatRes, 
            CONCAT (tecnicos.nombre, ' ', tecnicos.apellido_pat, ' ', tecnicos.apellido_mat ) AS nombreTecEntrega, 
            hojaservicios.estatus, 
            hojaservicios.createdAt, 
            hojaservicios.updatedAt 
        FROM hojaservicios 
            LEFT JOIN asignaciones ON hojaservicios.fk_idasignacion_ur = asignaciones.idasignacion 
            LEFT JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
            LEFT JOIN usuarios AS supervisortec ON hojaservicios.fk_supervisortec = supervisortec.idusuarios  
            LEFT JOIN usuarios AS tecnicos ON hojaservicios.fk_tecnico_entrega = tecnicos.idusuarios 
            LEFT JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
            LEFT JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
            LEFT JOIN radios ON asignaciones.radios_idradios = radios.idradios 
            LEFT JOIN accesorios AS baterias ON asignaciones.fk_accesorio_bateria = baterias.idaccesorios
            LEFT JOIN accesorios AS cargadores ON asignaciones.fk_accesorio_cargador = cargadores.idaccesorios
            LEFT JOIN accesorios AS gps ON asignaciones.fk_accesorio_gps = gps.idaccesorios
            LEFT JOIN vehiculos ON asignaciones.fk_vehiculo = vehiculos.idvehiculo
            LEFT JOIN zonasregiones ON vehiculos.fk_zonaregion = zonasregiones.idzonasregiones
            ORDER BY hojaservicios.idhojaservicios DESC`, {
        replacements: [],
        model: hojas_servicios_model_1.default,
        mapToModel: true
    }));
    res.json(hojasservicios);
});
exports.getHojasServicios = getHojasServicios;
const getHojasServiciosUltimo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //    const hojasservicios = await HojasServicios.findAll();
    //    res.json( hojasservicios );
    //const hojasservicios: any = await HojasServicios.sequelize?.query(
    //    `SELECT folio, createdAt FROM hojaservicios ORDER BY idhojaservicios DESC LIMIT 1`
    //    , {
    //        replacements: [],
    //        model: HojasServicios,
    //        mapToModel: true
    //});
    const hojasservicios = yield hojas_servicios_model_1.default.findOne({
        attributes: ['folio', 'createdAt'],
        order: [
            // Will escape title and validate DESC against a list of valid direction parameters
            ['idhojaservicios', 'DESC'],
        ]
    });
    res.json(hojasservicios);
});
exports.getHojasServiciosUltimo = getHojasServiciosUltimo;
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
        const existeFolio = yield hojas_servicios_model_1.default.findOne({
            where: {
                folio: body.folio
            }
        });
        if (existeFolio) {
            return res.status(400).json({
                msg: 'Ya existe un registro con el folio ' + body.folio
            });
        }
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
    // const { id } = req.params;
    // try {
    //     const hojasservicios = await HojasServicios.findByPk( id );
    //     if (!hojasservicios){
    //         return res.status(404).json({
    //             msg: 'No existe una hoja-servicios con el id ' + id
    //         })
    //     }
    //    // await usuario.destroy (); //se elimina el elemento total de la base de datos
    //    await hojasservicios.update({ fk_status: 6 });
    //     res.json( hojasservicios );
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({
    //         msg: 'Hable con el Administrador'
    //     })
    // }
    const { id } = req.params;
    try {
        const hojasservicios = yield hojas_servicios_model_1.default.findByPk(id);
        if (!hojasservicios) {
            return res.status(404).json({
                msg: 'No existe un tipo con el id ' + id
            });
        }
        // await usuario.destroy ();
        //await tipos.update({ fk_status: 6 });
        const estado = hojasservicios.estatus;
        // await usuario.destroy ();
        //await zonasregiones.update({estatus: 6 });
        if (estado == true) {
            //Si el estatus viene con valor 'true' deshabilitada el registro
            yield hojasservicios.update({ estatus: false });
        }
        else if (estado == false) {
            yield hojasservicios.update({ estatus: true });
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'El valor del estatus no es valido (true o false)'
            });
        }
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