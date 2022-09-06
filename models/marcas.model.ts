import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Marcas = db.define('marcas', {
    idmarcas: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    nombreMarcas: {
        type: DataTypes.STRING
    },
    nombreModelos: {
        type: DataTypes.STRING
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
export default Marcas;