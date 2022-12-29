import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Documentos = db.define('documentos', {
    iddocumentos: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    fecha_carga: {
        type: DataTypes.DATE
    },
    fecha_actualizacion: {
        type: DataTypes.DATE
      },
    nombre: {
        type: DataTypes.STRING
    },
    // ruta: {
    //     type: DataTypes.STRING
    // },
    // tipo: {
    //     type: DataTypes.STRING
    // },
    // tamanio: {
    //     type: DataTypes.STRING
    // },
    // descripcion: {
    //     type: DataTypes.STRING
    // },
    estatus: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

export default Documentos;