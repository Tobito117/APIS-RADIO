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
exports.updateEstatusVehiculos = exports.deleteVehiculos = exports.putVehiculos = exports.postVehiculos = exports.getVehiculosById = exports.getVehiculos = void 0;
const vehiculos_model_1 = __importDefault(require("../models/vehiculos.model"));
//Función para obtener todos los elementos de una tabla
const getVehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // const vehiculos: any = await Vehiculos.findAll();
    //CONSULTA DONDE SE TRAE LOS ELEMENTOS MOSTRADOS DEL QUERY
    const vehiculos = yield ((_a = vehiculos_model_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query("SELECT vehiculos.idvehiculo, vehiculos.nombreVehiculo, vehiculos.placa, vehiculos.color, vehiculos.anio, marcas.nombreMarcas, vehiculos.estatus FROM vehiculos INNER JOIN marcas ON vehiculos.idvehiculo = marcas.idmarcas", {
        replacements: [],
        model: vehiculos_model_1.default,
        mapToModel: true
    }));
    res.json(vehiculos);
    console.log(vehiculos);
});
exports.getVehiculos = getVehiculos;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getVehiculosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { id } = req.params;
    // const vehiculos = await Vehiculos.findByPk( id );
    const vehiculos = yield ((_b = vehiculos_model_1.default.sequelize) === null || _b === void 0 ? void 0 : _b.query("SELECT vehiculos.idvehiculo, vehiculos.nombreVehiculo, vehiculos.placa, vehiculos.color, vehiculos.anio, marcas.nombreMarcas, vehiculos.estatus FROM vehiculos INNER JOIN marcas ON vehiculos.idvehiculo = marcas.idmarcas WHERE idvehiculo = ?", {
        replacements: [id],
        model: vehiculos_model_1.default,
        mapToModel: true
    }));
    // console.log(vehiculos)
    let idvehiculo;
    for (let i of vehiculos) {
        idvehiculo = i.dataValues.idvehiculo;
    }
    console.log(idvehiculo);
    if (idvehiculo) {
        res.json({
            Datos: vehiculos,
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
exports.getVehiculosById = getVehiculosById;
//Función para agregar un elemento a la tabla de nuestra base de datos Vehiculos
const postVehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const vehiculos = yield vehiculos_model_1.default.create(body);
        yield vehiculos.save();
        res.json(vehiculos);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postVehiculos = postVehiculos;
//Función para actualizar un elemento a la tabla de nuestra base de datos Vehiculo
const putVehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const vehiculos = yield vehiculos_model_1.default.findByPk(id);
        if (!vehiculos) {
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
            });
        }
        yield vehiculos.update(body);
        res.json(vehiculos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putVehiculos = putVehiculos;
//Función para borrar un elemento a la tabla de nuestra base de datos Vehiculos (Solo se dehabilita)
const deleteVehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const vehiculos = yield vehiculos_model_1.default.findByPk(id);
        if (!vehiculos) {
            return res.status(404).json({
                msg: 'No existe un vehiculo con el id ' + id
            });
        }
        // await usuario.destroy ();
        yield vehiculos.update({ fk_status: 6 });
        res.json(vehiculos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteVehiculos = deleteVehiculos;
//Función para habilitar y deshabilitar el estatus de Vehiculo 
const updateEstatusVehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const fk_status = req.query.fk_status;
    if (isNaN(id)) {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El idVehiculos no es un valor válido'
        });
    }
    const vehiculos = yield vehiculos_model_1.default.findByPk(id);
    if (!vehiculos) {
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
        vehiculos.update({ estatus: false });
    }
    else if (fk_status == 'false') {
        vehiculos.update({ estatus: true });
    }
    else {
        return res.status(400).json({
            data: null,
            success: false,
            message: 'El valor del estatus no es valido (true o false)'
        });
    }
    res.json({
        data: vehiculos,
        success: true,
        message: 'Estatus actualizado'
    });
});
exports.updateEstatusVehiculos = updateEstatusVehiculos;
//# sourceMappingURL=vehiculos.controller.js.map