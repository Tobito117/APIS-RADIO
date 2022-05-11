import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Marcas = db.define('marcas', {
    id_marca: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    nombre: {
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

export default Marcas;