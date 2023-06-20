import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuarios = db.define('usuarios', {
    idusuarios: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    nombre: {
        type: DataTypes.STRING
    },
    apellido_pat: {
        type: DataTypes.STRING
      },
    apellido_mat: {
        type: DataTypes.STRING
    },
    fk_puesto: {
        type: DataTypes.INTEGER
    },
    cuip: {
        type: DataTypes.STRING
    },
    clave_elector: {
        type: DataTypes.STRING
    },
    imagen_ine: {
        type: DataTypes.STRING
    },
    fk_documento_ine: {
        type: DataTypes.INTEGER
    },
    imagen_cuip: {
        type: DataTypes.STRING
    },
    fk_documento_cuip: {
        type: DataTypes.INTEGER
    },
    titulo: {
        type: DataTypes.STRING
    },
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

export default Usuarios;