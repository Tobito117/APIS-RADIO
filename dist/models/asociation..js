"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lineas_model_1 = __importDefault(require("../models/lineas.model"));
const marcas_model_1 = __importDefault(require("../models/marcas.model"));
//Uno a muchos, 1 a N 
//Lineas va a tener muchos Marcas
//Se añade una clave Lineas Id a la tabla Marcas
lineas_model_1.default.hasMany(marcas_model_1.default, { as: " id_marca", foreignKey: "id_marca" });
marcas_model_1.default.belongsTo(lineas_model_1.default, { as: "id_linea" });
//# sourceMappingURL=asociation..js.map