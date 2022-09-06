import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Asig_Accesorios = db.define('asig_accesorios', {
    id_asigacc: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    fecha_asigacc: {
        type: DataTypes.DATE
    },
    fecha_canacc: {
        type: DataTypes.DATE
      },
    fk_accesorio: {
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

export default Asig_Accesorios;