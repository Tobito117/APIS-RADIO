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
exports.deleteVehiculos = exports.putVehiculos = exports.postVehiculos = exports.getVehiculosById = exports.getVehiculos = void 0;
const vehiculos_model_1 = __importDefault(require("../models/vehiculos.model"));
const getVehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vehiculos = yield vehiculos_model_1.default.findAll();
    res.json({ vehiculos });
});
exports.getVehiculos = getVehiculos;
const getVehiculosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const vehiculos = yield vehiculos_model_1.default.findByPk(id);
    if (vehiculos) {
        res.json(vehiculos);
    }
    else {
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    }
});
exports.getVehiculosById = getVehiculosById;
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
const deleteVehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const vehiculos = yield vehiculos_model_1.default.findByPk(id);
        if (!vehiculos) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
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
//# sourceMappingURL=vehiculos.controller.js.map