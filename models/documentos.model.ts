import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Documentos = db.define('documentos', {
    id_documentos: {
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
    ruta: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    },
    tamanio: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.TINYINT
    },
    descripcion: {
        type: DataTypes.STRING
    },
    fk_asignacion: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

export default Documentos;