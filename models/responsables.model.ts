import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Responsables = db.define('responsables', {
    idResponsable: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    nombreResponsable: {
        type: DataTypes.STRING
    },
    apellido_patResponsable: {
        type: DataTypes.STRING
      },
    apellido_matResponsable: {
        type: DataTypes.STRING
    },
    nombre_completoResponsable: {
        type: DataTypes.STRING
    },
    fk_puestoResponsable: {
        type: DataTypes.INTEGER
    },
    idpuestoResponsable: {
        type: DataTypes.INTEGER
    },
    nombrePuestoResponsable: {
        type: DataTypes.STRING
    },
    fk_corporacionResponsable: {
        type: DataTypes.INTEGER
    },
    idcorporacionesResponsable: {
        type: DataTypes.INTEGER
    },
    nombreCorporacionResponsable: {
        type: DataTypes.STRING
    },
    cuipResponsable: {
        type: DataTypes.STRING
    },
    clave_electorresponsable: {
        type: DataTypes.STRING
    },
    imagen_ineResponsable: {
        type: DataTypes.STRING
    },
    imagen_cuipResponsable: {
        type: DataTypes.STRING
    },
    tituloResponsable: {
        type: DataTypes.STRING
    },
    estatusResponsable: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

export default Responsables;