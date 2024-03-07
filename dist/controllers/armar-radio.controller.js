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
exports.updateEstatusArmar_Radio = exports.actualizarSueRadio = exports.deleteArmar_Radio = exports.putArmar_Radio = exports.postArmar_Radio = exports.getAsig_UsuariosById = exports.getAsignacionPorSoloRfsi = exports.getAsignacionPorRfsi = exports.getAsignacionPorUsuario = exports.getAsig = exports.getArmarRadioEstatus = exports.getArmar_Radio = void 0;
const armar_radio_model_1 = __importDefault(require("../models/armar-radio.model"));
const radios_model_1 = __importDefault(require("../models/radios.model"));
// import Asig_Usuarios from '../models/asig_usuario_radio.model';
//Función para obtener todos los elementos de una tabla
const getArmar_Radio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // const asig_usuarios = await Asig_Usuarios.findAll();
    const armar_radio = yield ((_a = armar_radio_model_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(`SELECT 
        armarradios.idarmar, 
        armarradios.fk_accesorio_bateria,
        baterias.accesorio AS nombreBateria,
        baterias.serie_bateria, 
        baterias.inventario_interno AS inventarioSpBateria, 
        marcasBaterias.idmarcas AS idmarcaBateria,
        marcasBaterias.nombreMarcas AS marcaBateria,
        marcasBaterias.nombreModelos AS modeloBateria,
        armarradios.fk_accesorio_cargador,
        cargadores.accesorio AS nombreCargador,
        cargadores.serie_cargador, 
        cargadores.inventario_interno AS inventarioSpCargador,
        marcasCargadores.idmarcas AS idmarcaCargador,
        marcasCargadores.nombreMarcas AS marcaCargador,
        marcasCargadores.nombreModelos AS modeloCargador,
        armarradios.fk_accesorio_gps, 
        gps.accesorio AS nombreGps,
        gps.serie_gps,
        gps.inventario_interno AS inventarioSpGps,
        marcasGps.idmarcas AS idmarcaGps,
        marcasGps.nombreMarcas AS marcaGps,
        marcasGps.nombreModelos AS modeloGps,
        radios.idradios, 
        marcasRadios.idmarcas,
        marcasRadios.nombreMarcas AS marcaRadio,
        marcasRadios.nombreModelos AS modeloRadio,
        radios.serie,
        radios.tipo,
        radios.inventario_segpub,
        radios.inventario_interno,
        radios.serie AS serie_radio, 
        vehiculos.idvehiculo, 
        vehiculos.placa, 
        vehiculos.unidad,
        vehiculos.anio, 
        vehiculos.tipo AS tipoVehiculo, 
        vehiculos.color,
        marcasVehiculos.idmarcas,
        marcasVehiculos.nombreMarcas AS marcaVehiculo,
        marcasVehiculos.nombreModelos AS modeloVehiculo, 
        zonasregiones.nombreZonasRegiones,
        armarradios.rfsi,
        armarradios.funda, 
        armarradios.antena,
        armarradios.bocina, 
        armarradios.c2h, 
        armarradios.cable_principal, 
        armarradios.caratula, 
        armarradios.micro, 
        armarradios.cofre, 
        armarradios.porta_caratula, 
        armarradios.cuello_cisne,
        armarradios.estatusArmar, 
        armarradios.createdAt, 
        armarradios.updatedAt, 
        armarradios.radios_idradios 
    FROM armarradios
    INNER JOIN radios ON armarradios.radios_idradios = radios.idradios
    LEFT JOIN marcas AS marcasRadios ON radios.fk_marca = marcasRadios.idmarcas
    LEFT JOIN vehiculos ON armarradios.fk_vehiculo = vehiculos.idvehiculo
    LEFT JOIN marcas AS marcasVehiculos ON vehiculos.marcas_idMarcas = marcasVehiculos.idmarcas
    LEFT JOIN zonasregiones ON vehiculos.fk_zonaregion= zonasregiones.idzonasregiones
    LEFT JOIN accesorios AS baterias  ON armarradios.fk_accesorio_bateria = baterias.idaccesorios 
    LEFT JOIN marcas AS marcasBaterias ON baterias.marcas_idMarcas = marcasBaterias.idmarcas
    LEFT JOIN accesorios AS cargadores ON armarradios.fk_accesorio_cargador = cargadores.idaccesorios 
    LEFT JOIN marcas AS marcasCargadores ON cargadores.marcas_idMarcas = marcasCargadores.idmarcas
    LEFT JOIN accesorios AS gps ON armarradios.fk_accesorio_gps = gps.idaccesorios
    LEFT JOIN marcas AS marcasGps ON gps.marcas_idMarcas = marcasGps.idmarcas `, {
        replacements: [],
        model: armar_radio_model_1.default,
        mapToModel: true
    }));
    //gkdjgposd
    res.json(armar_radio);
});
exports.getArmar_Radio = getArmar_Radio;
const getArmarRadioEstatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    // const armar_radio = await Asig_Usuarios.findAll(); //No se está usando
    const asig_usuarios = yield ((_b = armar_radio_model_1.default.sequelize) === null || _b === void 0 ? void 0 : _b.query(`SELECT 
    armarradios.idarmar, 
    armarradios.fk_accesorio_bateria,
    baterias.accesorio AS nombreBateria,
    baterias.serie_bateria, 
    baterias.inventario_interno AS inventarioSpBateria, 
    marcasBaterias.idmarcas AS idmarcaBateria,
    marcasBaterias.nombreMarcas AS marcaBateria,
    marcasBaterias.nombreModelos AS modeloBateria,
    armarradios.fk_accesorio_cargador,
    cargadores.accesorio AS nombreCargador,
    cargadores.serie_cargador, 
    cargadores.inventario_interno AS inventarioSpCargador,
    marcasCargadores.idmarcas AS idmarcaCargador,
    marcasCargadores.nombreMarcas AS marcaCargador,
    marcasCargadores.nombreModelos AS modeloCargador,
    armarradios.fk_accesorio_gps, 
    gps.accesorio AS nombreGps,
    gps.serie_gps,
    gps.inventario_interno AS inventarioSpGps,
    marcasGps.idmarcas AS idmarcaGps,
    marcasGps.nombreMarcas AS marcaGps,
    marcasGps.nombreModelos AS modeloGps,
    radios.idradios, 
    marcasRadios.idmarcas,
    marcasRadios.nombreMarcas AS marcaRadio,
    marcasRadios.nombreModelos AS modeloRadio,
    radios.serie,
    radios.tipo,
    radios.inventario_segpub,
    radios.inventario_interno,
    radios.serie AS serie_radio, 
    vehiculos.idvehiculo, 
    vehiculos.placa, 
    vehiculos.unidad,
    vehiculos.anio, 
    vehiculos.tipo AS tipoVehiculo, 
    vehiculos.color,
    marcasVehiculos.idmarcas,
    marcasVehiculos.nombreMarcas AS marcaVehiculo,
    marcasVehiculos.nombreModelos AS modeloVehiculo, 
    zonasregiones.nombreZonasRegiones,
    armarradios.rfsi,
    armarradios.funda, 
    armarradios.antena,
    armarradios.bocina, 
    armarradios.c2h, 
    armarradios.cable_principal, 
    armarradios.caratula, 
    armarradios.micro, 
    armarradios.cofre, 
    armarradios.porta_caratula, 
    armarradios.cuello_cisne,
    armarradios.estatusArmar, 
    armarradios.createdAt, 
    armarradios.updatedAt, 
    armarradios.radios_idradios 
FROM armarradios
INNER JOIN radios ON armarradios.radios_idradios = radios.idradios
LEFT JOIN marcas AS marcasRadios ON radios.fk_marca = marcasRadios.idmarcas
LEFT JOIN vehiculos ON armarradios.fk_vehiculo = vehiculos.idvehiculo
LEFT JOIN marcas AS marcasVehiculos ON vehiculos.marcas_idMarcas = marcasVehiculos.idmarcas
LEFT JOIN zonasregiones ON vehiculos.fk_zonaregion= zonasregiones.idzonasregiones
LEFT JOIN accesorios AS baterias  ON armarradios.fk_accesorio_bateria = baterias.idaccesorios 
LEFT JOIN marcas AS marcasBaterias ON baterias.marcas_idMarcas = marcasBaterias.idmarcas
LEFT JOIN accesorios AS cargadores ON armarradios.fk_accesorio_cargador = cargadores.idaccesorios 
LEFT JOIN marcas AS marcasCargadores ON cargadores.marcas_idMarcas = marcasCargadores.idmarcas
LEFT JOIN accesorios AS gps ON armarradios.fk_accesorio_gps = gps.idaccesorios
LEFT JOIN marcas AS marcasGps ON gps.marcas_idMarcas = marcasGps.idmarcas
    WHERE armarradios.estatusArmar=1 `, {
        replacements: [],
        model: armar_radio_model_1.default,
        mapToModel: true
    }));
    //gkdjgposd
    res.json(asig_usuarios);
});
exports.getArmarRadioEstatus = getArmarRadioEstatus;
const getAsig = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const corporaciones = ["Centro de Mando y Comunicaciones", "Secretaria de Seguridad y Proteccion Ciudadana", "Fiscalia del Estado de Tabasco"];
    let x = "";
    function pasarLista(nombre, indice) {
        x = `corporaciones.nombreCorporacion="${nombre}" and`;
        return x;
        ;
    }
    console.log(x);
    corporaciones.forEach((nombre, indice) => pasarLista(nombre, indice));
    // const asig_usuarios = await Asig_Usuarios.findAll();
    const asig_usuarios = yield ((_c = armar_radio_model_1.default.sequelize) === null || _c === void 0 ? void 0 : _c.query(`SELECT asignaciones.idasignacion, 
        usuarios.idusuarios, 
        usuarios.nombre, 
        usuarios.apellido_pat,
        usuarios.apellido_mat, 
        usuarios.titulo,
        CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo, 
        usuarios.clave_elector,
        puestos.idpuesto AS idPuestoUsuario,
        puestos.nombre AS nombrePuesto,
        corporaciones.idcorporaciones,
        corporaciones.nombreCorporacion,
        asignaciones.fk_accesorio_bateria,
        baterias.accesorio AS nombreBateria,
        baterias.serie_bateria, 
        baterias.inventario_segpub AS inventarioSpBateria, 
        asignaciones.fk_accesorio_cargador,
        marcasBaterias.idmarcas AS idmarcaBateria,
        marcasBaterias.nombreMarcas AS marcaBateria,
        marcasBaterias.nombreModelos AS modeloBateria,
        cargadores.accesorio AS nombreCargador,
        cargadores.serie_cargador, 
        cargadores.inventario_segpub AS inventarioSpCargador,
        marcasCargadores.idmarcas AS idmarcaCargador,
        marcasCargadores.nombreMarcas AS marcaCargador,
        marcasCargadores.nombreModelos AS modeloCargador,
        asignaciones.fk_accesorio_gps, 
        gps.accesorio AS nombreGps,
        gps.serie_gps,
        gps.inventario_segpub AS inventarioSpGps,
        marcasGps.idmarcas AS idmarcaGps,
        marcasGps.nombreMarcas AS marcaGps,
        marcasGps.nombreModelos AS modeloGps,
        radios.idradios, 
        radios.serie,
        radios.tipo,
        radios.inventario_segpub,
        radios.inventario_interno,
        radios.serie AS serie_radio, 
        marcasRadios.idmarcas,
        marcasRadios.nombreMarcas AS marcaRadio,
        marcasRadios.nombreModelos AS modeloRadio,
        vehiculos.idvehiculo, 
        vehiculos.placa, 
        vehiculos.unidad,
        vehiculos.anio, 
        vehiculos.tipo AS tipoVehiculo, 
        vehiculos.color,
        marcasVehiculos.idmarcas,
        marcasVehiculos.nombreMarcas AS marcaVehiculo,
        marcasVehiculos.nombreModelos AS modeloVehiculo, 
        zonasregiones.nombreZonasRegiones,
        asignaciones.rfsi,
        asignaciones.funda, 
        asignaciones.antena,
        asignaciones.bocina, 
        asignaciones.c2h, 
        asignaciones.cable_principal, 
        asignaciones.caratula, 
        asignaciones.micro, 
        asignaciones.cofre, 
        asignaciones.porta_caratula, 
        asignaciones.cuello_cisne,
        asignaciones.estatus, 
        asignaciones.fecha_asignacion, 
        asignaciones.createdAt, 
        asignaciones.updatedAt, 
        asignaciones.usuarios_idusuarios,
        asignaciones.radios_idradios 
    FROM asignaciones 
    INNER JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
    INNER JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
    INNER JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
    INNER JOIN radios ON asignaciones.radios_idradios = radios.idradios
    LEFT JOIN marcas AS marcasRadios ON radios.fk_marca = marcasRadios.idmarcas
    LEFT JOIN vehiculos ON asignaciones.fk_vehiculo = vehiculos.idvehiculo
    LEFT JOIN marcas AS marcasVehiculos ON vehiculos.marcas_idMarcas = marcasVehiculos.idmarcas
    LEFT JOIN zonasregiones ON vehiculos.fk_zonaregion= zonasregiones.idzonasregiones
    LEFT JOIN accesorios AS baterias  ON asignaciones.fk_accesorio_bateria = baterias.idaccesorios 
    LEFT JOIN marcas AS marcasBaterias ON baterias.marcas_idMarcas = marcasBaterias.idmarcas
    LEFT JOIN accesorios AS cargadores ON asignaciones.fk_accesorio_cargador = cargadores.idaccesorios 
    LEFT JOIN marcas AS marcasCargadores ON cargadores.marcas_idMarcas = marcasCargadores.idmarcas
    LEFT JOIN accesorios AS gps ON asignaciones.fk_accesorio_gps = gps.idaccesorios
    LEFT JOIN marcas AS marcasGps ON gps.marcas_idMarcas = marcasGps.idmarcas
    ORDER By asignaciones.idasignacion DESC 
    
     `, {
        replacements: [],
        model: armar_radio_model_1.default,
        mapToModel: true
    }));
    //gkdjgposd
    res.json(asig_usuarios);
});
exports.getAsig = getAsig;
//Función para obtener todos los datos con el filtro de RFSI
const getAsignacionPorUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const { nombre } = req.params;
    const asig_usuarios = yield ((_d = armar_radio_model_1.default.sequelize) === null || _d === void 0 ? void 0 : _d.query(`SELECT asignaciones.idasignacion, 
        usuarios.idusuarios, 
        usuarios.nombre, 
        usuarios.apellido_pat,
        usuarios.apellido_mat, 
        usuarios.titulo,
        CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo,  
        usuarios.clave_elector,
        puestos.idpuesto,
        puestos.nombre AS nombrePuesto,
        corporaciones.idcorporaciones,
        corporaciones.nombreCorporacion,
        asignaciones.fk_accesorio_bateria,
        baterias.serie_bateria, 
        asignaciones.fk_accesorio_cargador,
        cargadores.serie_cargador, 
        asignaciones.fk_accesorio_gps, 
        gps.serie_gps,
        radios.idradios,
        radios.tipo, 
        radios.serie, 
        radios.inventario_interno,  
        radios.serie AS serie_radio, 
        vehiculos.idvehiculo, 
        vehiculos.placa, 
        vehiculos.unidad,
        zonasregiones.nombreZonasRegiones,
        asignaciones.rfsi,
        asignaciones.funda, 
        asignaciones.antena,
        asignaciones.bocina, 
        asignaciones.c2h, 
        asignaciones.cable_principal, 
        asignaciones.caratula, 
        asignaciones.micro, 
        asignaciones.cofre, 
        asignaciones.porta_caratula, 
        asignaciones.cuello_cisne,
        asignaciones.estatus, 
        asignaciones.fecha_asignacion, 
        asignaciones.createdAt, 
        asignaciones.updatedAt, 
        asignaciones.usuarios_idusuarios,
        asignaciones.radios_idradios 
    FROM asignaciones 
    INNER JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
    INNER JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
    INNER JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
    INNER JOIN radios ON asignaciones.radios_idradios = radios.idradios 
    LEFT JOIN vehiculos ON asignaciones.fk_vehiculo = vehiculos.idvehiculo
    LEFT JOIN zonasregiones ON vehiculos.fk_zonaregion= zonasregiones.idzonasregiones
    LEFT JOIN accesorios AS baterias  ON asignaciones.fk_accesorio_bateria = baterias.idaccesorios 
    LEFT JOIN accesorios AS cargadores ON asignaciones.fk_accesorio_cargador = cargadores.idaccesorios 
    LEFT JOIN accesorios AS gps ON asignaciones.fk_accesorio_gps = gps.idaccesorios 
    WHERE asignaciones.estatus = true 
    AND CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) = '${nombre}' `, {
        replacements: [],
        model: armar_radio_model_1.default,
        mapToModel: true
    }));
    res.json(asig_usuarios);
});
exports.getAsignacionPorUsuario = getAsignacionPorUsuario;
const getAsignacionPorRfsi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    const { rfsi, usuarioBuscar } = req.params;
    const asig_usuarios = yield ((_e = armar_radio_model_1.default.sequelize) === null || _e === void 0 ? void 0 : _e.query(`SELECT asignaciones.idasignacion, 
        usuarios.idusuarios, 
        usuarios.nombre, 
        usuarios.apellido_pat,
        usuarios.apellido_mat, 
        usuarios.titulo,
        CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo, 
        usuarios.clave_elector,
        puestos.idpuesto,
        puestos.nombre AS nombrePuesto,
        corporaciones.idcorporaciones,
        corporaciones.nombreCorporacion,
        asignaciones.fk_accesorio_bateria,
        baterias.serie_bateria, 
        asignaciones.fk_accesorio_cargador,
        cargadores.serie_cargador, 
        asignaciones.fk_accesorio_gps, 
        gps.serie_gps,
        radios.idradios,
        radios.tipo, 
        radios.serie, 
        radios.inventario_interno, 
        radios.inventario_segpub, 
        radios.serie AS serie_radio, 
        vehiculos.idvehiculo, 
        vehiculos.placa, 
        vehiculos.unidad,
        zonasregiones.nombreZonasRegiones,
        asignaciones.rfsi,
        asignaciones.funda, 
        asignaciones.antena,
        asignaciones.bocina, 
        asignaciones.c2h, 
        asignaciones.cable_principal, 
        asignaciones.caratula, 
        asignaciones.micro, 
        asignaciones.cofre, 
        asignaciones.porta_caratula, 
        asignaciones.cuello_cisne,
        asignaciones.estatus, 
        asignaciones.fecha_asignacion, 
        asignaciones.createdAt, 
        asignaciones.updatedAt, 
        asignaciones.usuarios_idusuarios,
        asignaciones.radios_idradios 
    FROM asignaciones 
    INNER JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
    INNER JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
    INNER JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
    INNER JOIN radios ON asignaciones.radios_idradios = radios.idradios 
    LEFT JOIN vehiculos ON asignaciones.fk_vehiculo = vehiculos.idvehiculo
    LEFT JOIN zonasregiones ON vehiculos.fk_zonaregion= zonasregiones.idzonasregiones
    LEFT JOIN accesorios AS baterias  ON asignaciones.fk_accesorio_bateria = baterias.idaccesorios 
    LEFT JOIN accesorios AS cargadores ON asignaciones.fk_accesorio_cargador = cargadores.idaccesorios 
    LEFT JOIN accesorios AS gps ON asignaciones.fk_accesorio_gps = gps.idaccesorios 
    WHERE asignaciones.estatus = true
    AND CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) = '${usuarioBuscar}' 
    AND asignaciones.rfsi = '${rfsi}' `, {
        replacements: [],
        model: armar_radio_model_1.default,
        mapToModel: true
    }));
    res.json(asig_usuarios);
});
exports.getAsignacionPorRfsi = getAsignacionPorRfsi;
const getAsignacionPorSoloRfsi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _f;
    const { rfsi, usuarioBuscar } = req.params;
    const asig_usuarios = yield ((_f = armar_radio_model_1.default.sequelize) === null || _f === void 0 ? void 0 : _f.query(`SELECT asignaciones.idasignacion, 
         usuarios.idusuarios, 
         usuarios.nombre, 
         usuarios.apellido_pat,
         usuarios.apellido_mat, 
         usuarios.titulo,
         CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo, 
         usuarios.clave_elector,
         puestos.idpuesto,
         puestos.nombre AS nombrePuesto,
         corporaciones.idcorporaciones,
         corporaciones.nombreCorporacion,
         asignaciones.fk_accesorio_bateria,
         baterias.serie_bateria, 
         asignaciones.fk_accesorio_cargador,
         cargadores.serie_cargador, 
         asignaciones.fk_accesorio_gps, 
         gps.serie_gps,
         radios.idradios,
         radios.tipo, 
         radios.serie, 
         radios.inventario_interno, 
         radios.inventario_segpub, 
         radios.serie AS serie_radio, 
         vehiculos.idvehiculo, 
         vehiculos.placa, 
         vehiculos.unidad,
         zonasregiones.nombreZonasRegiones,
         asignaciones.rfsi,
         asignaciones.funda, 
         asignaciones.antena,
         asignaciones.bocina, 
         asignaciones.c2h, 
         asignaciones.cable_principal, 
         asignaciones.caratula, 
         asignaciones.micro, 
         asignaciones.cofre, 
         asignaciones.porta_caratula, 
         asignaciones.cuello_cisne,
         asignaciones.estatus, 
         asignaciones.fecha_asignacion, 
         asignaciones.createdAt, 
         asignaciones.updatedAt, 
         asignaciones.usuarios_idusuarios,
         asignaciones.radios_idradios 
     FROM asignaciones 
     LEFT JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
     LEFT JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
     LEFT JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
     LEFT JOIN radios ON asignaciones.radios_idradios = radios.idradios 
     LEFT JOIN vehiculos ON asignaciones.fk_vehiculo = vehiculos.idvehiculo
     LEFT JOIN zonasregiones ON vehiculos.fk_zonaregion= zonasregiones.idzonasregiones
     LEFT JOIN accesorios AS baterias  ON asignaciones.fk_accesorio_bateria = baterias.idaccesorios 
     LEFT JOIN accesorios AS cargadores ON asignaciones.fk_accesorio_cargador = cargadores.idaccesorios 
     LEFT JOIN accesorios AS gps ON asignaciones.fk_accesorio_gps = gps.idaccesorios 
     WHERE asignaciones.estatus = true 
     AND asignaciones.rfsi = '${rfsi}' `, {
        replacements: [],
        model: armar_radio_model_1.default,
        mapToModel: true
    }));
    res.json(asig_usuarios);
});
exports.getAsignacionPorSoloRfsi = getAsignacionPorSoloRfsi;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getAsig_UsuariosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const asig_usuarios = yield armar_radio_model_1.default.findByPk(id);
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
// export const getAsig_UsuariosByRfsi= async( req: Request , res: Response ) => {
//     // const { rfsi } = req.params;
//     const asig_usuarios = await Asig_Usuarios.sequelize?.query(
//         ,
//         { 
//             replacements: [],
//             model: Asig_Usuarios,
//             mapToModel: true
//         });
//         res.json(asig_usuarios );
//     // if(asig_usuarios){
//     //     res.json(asig_usuarios)
//     // }else{
//     //     res.status(404).json({
//     //         msg: "No existe Usuario en la base de datos"
//     //     });
//     // } 
// }
// Función para agregar un elemento a la tabla de nuestra base de datos asig_usuarios
const postArmar_Radio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeRFSI = yield armar_radio_model_1.default.findOne({
            where: {
                rfsi: body.rfsi
            }
        });
        if (existeRFSI) {
            return res.status(400).json({
                message: 'Ya existe un registro con el rfsi ' + body.rfsi
            });
        }
        const armar_radio = yield armar_radio_model_1.default.create(body);
        yield armar_radio.save();
        res.json(armar_radio);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador',
            errores: error
        });
    }
});
exports.postArmar_Radio = postArmar_Radio;
//Función para actualizar un elemento a la tabla de nuestra base de datos asig_usuarios
const putArmar_Radio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const armar_radio = yield armar_radio_model_1.default.findByPk(id);
        if (!armar_radio) {
            return res.status(404).json({
                msg: 'No existe un armar_radio con el id ' + id
            });
        }
        yield armar_radio.update(body);
        res.json(armar_radio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putArmar_Radio = putArmar_Radio;
//Función para borrar un elemento a la tabla de nuestra base de datos asig_usuarios (Solo se dehabilita)
const deleteArmar_Radio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const armar_radio = yield armar_radio_model_1.default.findByPk(id);
        if (!armar_radio) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        // await usuario.destroy ();
        //const UsuarioAutenticado = req.user;
        const estado = armar_radio.estatusArmar;
        console.log('dfwwfeffg', estado);
        //await usuario.update({ estatus: false });
        if (estado == true) {
            //Si el estatus viene con valor 'true' deshabilitada el registro
            yield armar_radio.update({ estatusArmar: false });
        }
        else if (estado == false) {
            yield armar_radio.update({ estatusArmar: true });
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'El valor del estatus no es valido (true o false)'
            });
        }
        res.json(armar_radio);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteArmar_Radio = deleteArmar_Radio;
const actualizarSueRadio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const sueRadio = yield radios_model_1.default.findByPk(id);
        yield sueRadio.update({ situacion: "Asignado", ubicacion: "Operativo", fecha_asignacion: new Date() });
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
const updateEstatusArmar_Radio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idAsignacioUsuarios no es un valor válido'
        });
    }
    const asig_usuarios = yield armar_radio_model_1.default.findByPk(id);
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
exports.updateEstatusArmar_Radio = updateEstatusArmar_Radio;
//# sourceMappingURL=armar-radio.controller.js.map