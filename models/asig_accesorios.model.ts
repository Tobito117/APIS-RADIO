import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Asig_Accesorios = db.define('asig_accesorios', {
    idasig_accesorio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    radios_idradios:{
      type:DataTypes.INTEGER
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
    accesorios_idaccesorios_bateria: {
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
