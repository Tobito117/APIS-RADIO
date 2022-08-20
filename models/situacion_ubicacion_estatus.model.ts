import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Sue = db.define('situacion_ubicacion_estatus', {
    id_sue: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombreStatus: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
},{
    tableName: 'situacion_ubicacion_estatus'
}
);


export default Sue;