import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Tipos_Tipos = db.define('tipos_tipos', {
    id_tipo_tipo: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
      },
    fk_tipo: {
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

export default Tipos_Tipos;