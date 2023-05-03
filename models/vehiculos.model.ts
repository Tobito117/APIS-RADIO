import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Vehiculos = db.define('vehiculos', {
    idvehiculo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    marcas_idmarcas: {
        type: DataTypes.INTEGER
    },
    anio: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
    },
    placa: {
        type: DataTypes.STRING
    },
    unidad: {
        type: DataTypes.STRING
    },
    fk_zonaregion: {
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

export default Vehiculos;