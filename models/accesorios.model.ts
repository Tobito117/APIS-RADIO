import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Accesorios = db.define('accesorios', {
    id_accesorio: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    num_serie: {
        type: DataTypes.STRING
    },
    fk_tipo_accesorio: {
        type: DataTypes.INTEGER
      },
    fk_linea: {
        type: DataTypes.INTEGER
    },
    inventario_interno: {
        type: DataTypes.STRING
    },
    inventario_segpub: {
        type: DataTypes.STRING
    },
    fk_recurso_compra: {
        type: DataTypes.INTEGER
    },
    contrato_compra: {
        type: DataTypes.STRING
    },
    observaciones: {
        type: DataTypes.STRING
    },
    fk_status_ubicacion: {
        type: DataTypes.INTEGER
    },
    fecha_recepcion: {
        type: DataTypes.DATE
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

export default Accesorios;