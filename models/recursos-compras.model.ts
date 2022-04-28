import { DataTypes } from 'sequelize';
import db from '../db/connection';

const RecursosCompras = db.define('recursoscompras', {
    id_recurso_compra: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    nombre: {
        type: DataTypes.STRING
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

export default RecursosCompras;