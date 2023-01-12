import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Radios = db.define('radios', {
    idradios: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tipo: {
        type: DataTypes.INTEGER
    },
    serie: {
        type: DataTypes.STRING
    },
    logico: {
        type: DataTypes.STRING
    },
    inventario_interno: {
        type: DataTypes.STRING
    },
    inventario_segpub: {
        type: DataTypes.STRING
    },
    fk_propietario: {
        type: DataTypes.INTEGER
    },
    fk_recurso_compra: {
        type: DataTypes.INTEGER
    },
    contrato_compra: {
        type: DataTypes.STRING
    },
    rfsi: {
        type: DataTypes.STRING
    },
    fk_marca: {
        type: DataTypes.INTEGER
    },
    
    fecha_actualizacion: {
        type: DataTypes.DATE
    },
    
    fecha_asignacion: {
        type: DataTypes.DATE
    },
    observaciones: {
        type: DataTypes.TEXT
    },
    fecha_recepcion: {
        type: DataTypes.DATE
    },
    fk_sue:{
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
    },
   
});

export default Radios;