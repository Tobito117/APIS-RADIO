import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Armar_Radio = db.define('armarradios', {
    idarmar: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    radios_idradios: {
        type: DataTypes.INTEGER
    },
    rfsi: {
        type: DataTypes.STRING
    },
    fk_accesorio_bateria: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fk_accesorio_cargador: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fk_accesorio_gps: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fk_vehiculo: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    funda: {
        type: DataTypes.BOOLEAN
    },
    antena: {
        type: DataTypes.BOOLEAN
    },
    bocina: {
        type: DataTypes.BOOLEAN
    },
    c2h: {
        type: DataTypes.BOOLEAN
    },
    cable_principal: {
        type: DataTypes.BOOLEAN
    },
    caratula: {
        type: DataTypes.BOOLEAN
    },
    micro: {
        type: DataTypes.BOOLEAN
    },
    cofre: {
        type: DataTypes.BOOLEAN
    },
    porta_caratula: {
        type: DataTypes.BOOLEAN
    },
    cuello_cisne: {
        type: DataTypes.BOOLEAN
    },
    estatusArmar: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}); 

export default Armar_Radio;