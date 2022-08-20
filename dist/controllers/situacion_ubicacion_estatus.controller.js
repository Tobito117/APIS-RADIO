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
exports.deleteStatus = exports.putStatus = exports.postStatus = exports.getStatusById = exports.getStatus = void 0;
const situacion_ubicacion_estatus_model_1 = __importDefault(require("../models/situacion_ubicacion_estatus.model"));
//Función para obtener todos los elementos de una tabla
const getStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const status = yield situacion_ubicacion_estatus_model_1.default.findAll();
    res.json({
        Datos: status,
        estatus: true,
        messagge: 'Datos Obtenidos Correctamente'
    });
});
exports.getStatus = getStatus;
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
const getStatusById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const status = yield situacion_ubicacion_estatus_model_1.default.findByPk(id);
    if (status) {
        res.json(status);
    }
    else {
        res.status(404).json({
            msg: "No existe situacion_ubicacion en la base de datos"
        });
    }
});
exports.getStatusById = getStatusById;
//Función para agregar un elemento a la tabla de nuestra base de datos staus
const postStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const status = yield situacion_ubicacion_estatus_model_1.default.create(body);
        yield status.save();
        res.json(status);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.postStatus = postStatus;
//Función para actualizar un elemento a la tabla de nuestra base de datos status
const putStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const status = yield situacion_ubicacion_estatus_model_1.default.findByPk(id);
        if (!status) {
            return res.status(404).json({
                msg: 'No existe un situacion_ubicacion con el id ' + id
            });
        }
        yield status.update(body);
        res.json(status);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.putStatus = putStatus;
//Función para borrar un elemento a la tabla de nuestra base de datos status (Solo se dehabilita)
const deleteStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const status = yield situacion_ubicacion_estatus_model_1.default.findByPk(id);
        if (!status) {
            return res.status(404).json({
                msg: 'No existe un situacion_ubicacion con el id ' + id
            });
        }
        // await usuario.destroy ();
        yield status.update({ nombreStatus: 'Cancelado' });
        res.json(status);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
});
exports.deleteStatus = deleteStatus;
// export const updateEstatusZonasRegiones = async (req: Request, res: Response) => {
//     const  id  = Number(req.params.id);
//     const fk_status = req.query.fk_status;
//     if (isNaN(id))
//     {
//       return res.status(400).json({
//         data: null,
//         success: false,
//         message: 'El idZonasRegiones no es un valor válido'
//       });
//     }
//     const zonasregiones = await ZonasRegiones.findByPk(id);
//   if (!zonasregiones)
//   {
//     return res.status(404).json({
//       data: null,
//       success: false,
//       message: 'No existe registro con el id ' + id
//     });
//   }
//   if(fk_status == undefined)
//   {
//       return res.status(400).json({
//           data: null,
//           success: false,
//           message: 'El Valor del estatus es requerido (true o false)'
//       });
//   }
//   //Habilitar o deshabilitar un registro (Update estatus)
//   if ( fk_status == 'true')
//   {
//       //Si el estatus viene con valor 'true' deshabilitada el registro
//       zonasregiones.update({ fk_status: 6 })
//   }
//   else if (fk_status == 'false')
//   {
//       zonasregiones.update({ fk_status: 1})
//   }
//   else
//   {
//       return res.status(400).json({
//           data: null,
//           success: false,
//           message: 'El valor del estatus no es valido (true o false)'
//       })
//   }
//   res.json({
//       data: zonasregiones,
//       success: true,
//       message: 'Estatus actualizado'
//   })
// }
//# sourceMappingURL=situacion_ubicacion_estatus.controller.js.map