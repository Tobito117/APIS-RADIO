import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Vehiculos = db.define('vehiculos', {
    idvehiculo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    nombreVehiculo: {
        type: DataTypes.STRING
    },
    placa: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
      },
    anio: {
        type: DataTypes.STRING
      },
    marcas_idmarcas: {
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

export default Vehiculos;