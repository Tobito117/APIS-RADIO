import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Asig_Vehiculos = db.define('asig_vehiculos', {
    idasig_tipo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    fecha_asig: {
        type: DataTypes.DATE
    },
    fecha_can: {
        type: DataTypes.DATE
      },
    vehiculos_idvehiculo: {
        type: DataTypes.INTEGER
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

export default Asig_Vehiculos;