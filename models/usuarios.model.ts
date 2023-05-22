import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuarios = db.define('usuarios', {
    idusuarios: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    nombre: {
        type: DataTypes.STRING
    },
    nombreRes: {
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
    imagen_cuip: {
        type: DataTypes.STRING
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