import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Asig_Usuarios = db.define('asignaciones', {
    idasignacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    usuarios_idusuarios: {     
        type: DataTypes.INTEGER
    },
    radios_idradios: {
        type: DataTypes.INTEGER
    },
    fk_accesorio_cargador: {
        type: DataTypes.INTEGER
    },
    fk_accesorio_bateria: {
        type: DataTypes.INTEGER
    },
    fk_accesorio_gps: {
        type: DataTypes.INTEGER
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
    fk_vehiculo: {
        type: DataTypes.INTEGER
    },
    rfsi: {
        type: DataTypes.STRING
    },
    fecha_asignacion: {
        type: DataTypes.DATE
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

export default Asig_Usuarios;