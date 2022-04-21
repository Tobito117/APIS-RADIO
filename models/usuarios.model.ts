import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuarios = db.define('usuarios', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true
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
    cuip: {
        type: DataTypes.STRING
    },
    clave_elector: {
        type: DataTypes.STRING
    },
    fk_puesto: {
        type: DataTypes.INTEGER
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
    fk_status: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

export default Usuarios;