import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Asig_Vehiculos = db.define('asig_vehiculos', {
    id_asigveh: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    fecha_asigveh: {
        type: DataTypes.DATE
    },
    fecha_canveh: {
        type: DataTypes.DATE
      },
    fk_vehiculo: {
        type: DataTypes.INTEGER
    },
    fk_radio: {
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

export default Asig_Vehiculos;