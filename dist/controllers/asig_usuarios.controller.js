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
exports.updateEstatusAsig_Usuarios = exports.actualizarSueRadio = exports.deleteAsig_Usuarios = exports.putAsig_Usuarios = exports.postAsig_Usuarios = exports.getAsig_UsuariosById = exports.getAsignacionPorSoloRfsi = exports.getAsignacionPorRfsi = exports.getAsignacionPorUsuario = exports.getAsig = exports.getAsigOrderUsuario = exports.getAsig_Usuarios = void 0;
const asig_usuario_radio_model_1 = __importDefault(require("../models/asig_usuario_radio.model"));
const radios_model_1 = __importDefault(require("../models/radios.model"));
//import Asig_Usuarios from '../models/asig_usuario_radio.model';
//Función para obtener todos los elementos de una tabla
const getAsig_Usuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // const asig_usuarios = await Asig_Usuarios.findAll();
    const asig_usuarios = yield ((_a = asig_usuario_radio_model_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(`SELECT 
    asignaciones.idasignacion,
    asignaciones.estatus, 
    asignaciones.usuarios_idusuarios,
    asignaciones.fecha_asignacion, 
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
    armarradios.fk_accesorio_bateria,
    baterias.accesorio AS nombreBateria,
    baterias.serie_bateria, 
    baterias.inventario_interno AS inventarioSpBateria, 
    armarradios.fk_accesorio_cargador,
    marcasBaterias.idmarcas AS idmarcaBateria,
    marcasBaterias.nombreMarcas AS marcaBateria,
    marcasBaterias.nombreModelos AS modeloBateria,
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
    radios.serie,
    radios.tipo,
    radios.observaciones,
    radios.situacion,
    radios.ubicacion,
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
    armarradios.createdAt, 
    armarradios.updatedAt, 
    armarradios.radios_idradios,
    propietarios.nombreCorporacion AS  nombrePropietario,
    recursocompras.nombreRecursoCompra 
FROM asignaciones
LEFT JOIN armarradios ON asignaciones.fk_armar = armarradios.idarmar
LEFT JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
LEFT JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
LEFT JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
LEFT JOIN radios ON armarradios.radios_idradios = radios.idradios
LEFT JOIN corporaciones AS propietarios ON radios.fk_propietario = propietarios.idcorporaciones
LEFT JOIN recursocompras ON radios.fk_recurso_compra = recursocompras.idrecursoCompras
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
        model: asig_usuario_radio_model_1.default,
        mapToModel: true
    }));
    //gkdjgposd
    res.json(asig_usuarios);
});
exports.getAsig_Usuarios = getAsig_Usuarios;
const getAsigOrderUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    // const asig_usuarios = await Asig_Usuarios.findAll(); //No se está usando
    const asig_usuarios = yield ((_b = asig_usuario_radio_model_1.default.sequelize) === null || _b === void 0 ? void 0 : _b.query(`SELECT 
        asignaciones.idasignacion,
        armarradios.rfsi,
        radios.tipo,
        radios.serie,
        radios.inventario_interno,
        CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat) AS nombreCompletoUsuario,
        puestos.nombre AS puesto,
        corporaciones.nombreCorporacion,
        propietarios.nombreCorporacion AS propietario,
        baterias.accesorio AS bateria,
        baterias.serie_bateria,
        cargadores.accesorio AS cargador,
        cargadores.serie_cargador,
        gps.accesorio AS gps,
        gps.serie_gps,
        vehiculos.placa,
        vehiculos.unidad
    FROM asignaciones
    LEFT JOIN armarradios ON asignaciones.fk_armar=armarradios.idarmar
    LEFT JOIN usuarios ON asignaciones.usuarios_idusuarios=usuarios.idusuarios
    LEFT JOIN radios ON armarradios.radios_idradios=radios.idradios
    LEFT JOIN puestos ON usuarios.fk_puesto=puestos.idpuesto
    LEFT JOIN corporaciones ON puestos.fk_corporacion=corporaciones.idcorporaciones
    LEFT JOIN corporaciones AS propietarios ON radios.fk_propietario=propietarios.idcorporaciones
    LEFT JOIN accesorios AS baterias ON armarradios.fk_accesorio_bateria=baterias.idaccesorios
    LEFT JOIN accesorios AS cargadores ON armarradios.fk_accesorio_cargador=cargadores.idaccesorios
    LEFT JOIN accesorios AS gps ON armarradios.fk_accesorio_gps=gps.idaccesorios
    LEFT JOIN vehiculos ON armarradios.fk_vehiculo=vehiculos.idvehiculo
    WHERE asignaciones.estatus=1
    ORDER BY nombreCompletoUsuario `, {
        replacements: [],
        model: asig_usuario_radio_model_1.default,
        mapToModel: true
    }));
    //gkdjgposd
    res.json(asig_usuarios);
});
exports.getAsigOrderUsuario = getAsigOrderUsuario;
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
    const asig_usuarios = yield ((_c = asig_usuario_radio_model_1.default.sequelize) === null || _c === void 0 ? void 0 : _c.query(`SELECT 
        asignaciones.idasignacion, 
        usuarios.idusuarios, 
        usuarios.nombre, 
        usuarios.apellido_pat,
        usuarios.apellido_mat, 
        usuarios.titulo,
        asignaciones.fecha_asignacion,
        asignaciones.estatus, 
        asignaciones.usuarios_idusuarios,
        CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo, 
        usuarios.clave_elector,
        puestos.idpuesto AS idPuestoUsuario,
        puestos.nombre AS nombrePuesto,
        corporaciones.idcorporaciones,
        corporaciones.nombreCorporacion,
        armarradios.fk_accesorio_bateria,
        baterias.accesorio AS nombreBateria,
        baterias.serie_bateria, 
        baterias.inventario_interno AS inventarioSpBateria, 
        armarradios.fk_accesorio_cargador,
        marcasBaterias.idmarcas AS idmarcaBateria,
        marcasBaterias.nombreMarcas AS marcaBateria,
        marcasBaterias.nombreModelos AS modeloBateria,
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
        armarradios.createdAt, 
        armarradios.updatedAt, 
        armarradios.radios_idradios 
    FROM asignaciones
    LEFT JOIN armarradios ON asignaciones.fk_armar = armarradios.idarmar
    LEFT JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
    LEFT JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
    LEFT JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
    LEFT JOIN radios ON armarradios.radios_idradios = radios.idradios
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
    ORDER By asignaciones.idasignacion DESC   `, {
        replacements: [],
        model: asig_usuario_radio_model_1.default,
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
    const asig_usuarios = yield ((_d = asig_usuario_radio_model_1.default.sequelize) === null || _d === void 0 ? void 0 : _d.query(`SELECT 
        asignaciones.idasignacion, 
        asignaciones.estatus,
        usuarios.idusuarios, 
        usuarios.nombre, 
        usuarios.apellido_pat,
        usuarios.apellido_mat, 
        usuarios.titulo,
        asignaciones.fecha_asignacion, 
        asignaciones.usuarios_idusuarios,
        CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo, 
        usuarios.clave_elector,
        puestos.idpuesto AS idPuestoUsuario,
        puestos.nombre AS nombrePuesto,
        corporaciones.idcorporaciones,
        corporaciones.nombreCorporacion,
        armarradios.fk_accesorio_bateria,
        baterias.accesorio AS nombreBateria,
        baterias.serie_bateria, 
        baterias.inventario_interno AS inventarioSpBateria, 
        armarradios.fk_accesorio_cargador,
        marcasBaterias.idmarcas AS idmarcaBateria,
        marcasBaterias.nombreMarcas AS marcaBateria,
        marcasBaterias.nombreModelos AS modeloBateria,
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
        armarradios.createdAt, 
        armarradios.updatedAt, 
        armarradios.radios_idradios 
    FROM asignaciones
    LEFT JOIN armarradios ON asignaciones.fk_armar = armarradios.idarmar
    LEFT JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
    LEFT JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
    LEFT JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
    LEFT JOIN radios ON armarradios.radios_idradios = radios.idradios
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
    WHERE asignaciones.estatus = true 
    AND CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) = '${nombre}' `, {
        replacements: [],
        model: asig_usuario_radio_model_1.default,
        mapToModel: true
    }));
    res.json(asig_usuarios);
});
exports.getAsignacionPorUsuario = getAsignacionPorUsuario;
const getAsignacionPorRfsi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    const { rfsi, usuarioBuscar } = req.params;
    const asig_usuarios = yield ((_e = asig_usuario_radio_model_1.default.sequelize) === null || _e === void 0 ? void 0 : _e.query(`SELECT 
        asignaciones.idasignacion, 
        asignaciones.estatus,
        usuarios.idusuarios, 
        usuarios.nombre, 
        usuarios.apellido_pat,
        usuarios.apellido_mat, 
        usuarios.titulo,
        asignaciones.fecha_asignacion, 
        asignaciones.usuarios_idusuarios,
        CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo, 
        usuarios.clave_elector,
        puestos.idpuesto AS idPuestoUsuario,
        puestos.nombre AS nombrePuesto,
        corporaciones.idcorporaciones,
        corporaciones.nombreCorporacion,
        armarradios.fk_accesorio_bateria,
        baterias.accesorio AS nombreBateria,
        baterias.serie_bateria, 
        baterias.inventario_interno AS inventarioSpBateria, 
        armarradios.fk_accesorio_cargador,
        marcasBaterias.idmarcas AS idmarcaBateria,
        marcasBaterias.nombreMarcas AS marcaBateria,
        marcasBaterias.nombreModelos AS modeloBateria,
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
        armarradios.createdAt, 
        armarradios.updatedAt, 
        armarradios.radios_idradios 
    FROM asignaciones
    LEFT JOIN armarradios ON asignaciones.fk_armar = armarradios.idarmar
    LEFT JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
    LEFT JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
    LEFT JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
    LEFT JOIN radios ON armarradios.radios_idradios = radios.idradios
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
    WHERE asignaciones.estatus = true
    AND CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) = '${usuarioBuscar}' 
    AND armarradio.rfsi = '${rfsi}' `, {
        replacements: [],
        model: asig_usuario_radio_model_1.default,
        mapToModel: true
    }));
    res.json(asig_usuarios);
});
exports.getAsignacionPorRfsi = getAsignacionPorRfsi;
const getAsignacionPorSoloRfsi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _f;
    const { rfsi, usuarioBuscar } = req.params;
    const asig_usuarios = yield ((_f = asig_usuario_radio_model_1.default.sequelize) === null || _f === void 0 ? void 0 : _f.query(`SELECT 
        asignaciones.idasignacion,
        asignaciones.estatus, 
        usuarios.idusuarios, 
        usuarios.nombre, 
        usuarios.apellido_pat,
        usuarios.apellido_mat, 
        usuarios.titulo,
        asignaciones.fecha_asignacion, 
        asignaciones.usuarios_idusuarios,
        CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo, 
        usuarios.clave_elector,
        puestos.idpuesto AS idPuestoUsuario,
        puestos.nombre AS nombrePuesto,
        corporaciones.idcorporaciones,
        corporaciones.nombreCorporacion,
        armarradios.fk_accesorio_bateria,
        baterias.accesorio AS nombreBateria,
        baterias.serie_bateria, 
        baterias.inventario_interno AS inventarioSpBateria, 
        armarradios.fk_accesorio_cargador,
        marcasBaterias.idmarcas AS idmarcaBateria,
        marcasBaterias.nombreMarcas AS marcaBateria,
        marcasBaterias.nombreModelos AS modeloBateria,
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
        armarradios.createdAt, 
        armarradios.updatedAt, 
        armarradios.radios_idradios 
    FROM asignaciones
    LEFT JOIN armarradios ON asignaciones.fk_armar = armarradios.idarmar
    LEFT JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
    LEFT JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
    LEFT JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
    LEFT JOIN radios ON armarradios.radios_idradios = radios.idradios
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
    WHERE asignaciones.estatus = true 
    AND armarradios.rfsi = '${rfsi}' `, {
        replacements: [],
        model: asig_usuario_radio_model_1.default,
        mapToModel: true
    }));
    res.json(asig_usuarios);
});
exports.getAsignacionPorSoloRfsi = getAsignacionPorSoloRfsi;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getAsig_UsuariosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const asig_usuarios = yield asig_usuario_radio_model_1.default.findByPk(id);
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
const postAsig_Usuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const asig_usuarios = yield asig_usuario_radio_model_1.default.create(body);
        yield asig_usuarios.save();
        res.json(asig_usuarios);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador',
            errores: error
        });
    }
});
exports.postAsig_Usuarios = postAsig_Usuarios;
//Función para actualizar un elemento a la tabla de nuestra base de datos asig_usuarios
const putAsig_Usuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const asig_usuarios = yield asig_usuario_radio_model_1.default.findByPk(id);
        if (!asig_usuarios) {
            return res.status(404).json({
                msg: 'No existe un asig_usuarios con el id ' + id
            });
        }
        yield asig_usuarios.update(body);
        res.json(asig_usuarios);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putAsig_Usuarios = putAsig_Usuarios;
//Función para borrar un elemento a la tabla de nuestra base de datos asig_usuarios (Solo se dehabilita)
const deleteAsig_Usuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    try {
        const asignacion = yield asig_usuario_radio_model_1.default.findByPk(id);
        if (!asignacion) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        // await usuario.destroy ();
        //const UsuarioAutenticado = req.user;
        const estado = asignacion.estatus;
        //console.log('dfwwfeffg',estado);
        //await usuario.update({ estatus: false });
        if (estado == true) {
            //Si el estatus viene con valor 'true' deshabilitada el registro
            yield asignacion.update({ estatus: false });
        }
        else if (estado == false) {
            yield asignacion.update({ estatus: true });
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'El valor del estatus no es valido (true o false)'
            });
        }
        res.json(asignacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteAsig_Usuarios = deleteAsig_Usuarios;
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
const updateEstatusAsig_Usuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idAsignacioUsuarios no es un valor válido'
        });
    }
    const asig_usuarios = yield asig_usuario_radio_model_1.default.findByPk(id);
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
exports.updateEstatusAsig_Usuarios = updateEstatusAsig_Usuarios;
//# sourceMappingURL=asig_usuarios.controller.js.map