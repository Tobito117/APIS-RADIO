import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Asig_Accesorios = db.define('asig_accesorios', {
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
    accesorios_idaccesorios: {
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

export default Asig_Accesorios;
