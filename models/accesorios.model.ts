import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Accesorios = db.define('accesorios', {
    idaccesorios: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    accesorio: {
        type: DataTypes.STRING
    },
    serie_bateria: {
        type: DataTypes.STRING
    },
    serie_cargador: {
        type: DataTypes.STRING
    },
    serie_gps: {
        type: DataTypes.STRING
    },
    marcas_idMarcas: {
        type: DataTypes.INTEGER
    },
    inventario_interno: {
        type: DataTypes.STRING
    },
    inventario_segpub: {
        type: DataTypes.STRING
    },
    contrato_compra: {
        type: DataTypes.STRING
    },
    observaciones: {
        type: DataTypes.STRING
    },
    fecha_recepcion: {
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
    },
});

export default Accesorios;