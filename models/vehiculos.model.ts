import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Vehiculos = db.define('vehiculos', {
    id_vehiculo: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    placa: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
      },
    fk_tipovehiculo: {
        type: DataTypes.INTEGER
    },
    fk_linea: {
        type: DataTypes.INTEGER
    },
    fk_modelo: {
        type: DataTypes.INTEGER
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

export default Vehiculos;