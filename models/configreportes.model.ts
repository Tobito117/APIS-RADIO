import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ConfigReportes = db.define('configreportes', {
    idconfigReportes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    encabezado_carta: {
        type: DataTypes.STRING
    },
    articulo1: {
        type: DataTypes.TEXT
    },
    articulo2: {
        type: DataTypes.TEXT
    },
    articulo3: {
        type: DataTypes.TEXT
    },
    articulo4: {
        type: DataTypes.STRING
    },
    articulo5: {
        type: DataTypes.STRING
    },
    articulo6: {
        type: DataTypes.STRING
    },
    articulo7: {
        type: DataTypes.STRING
    },
    logoc4: {
        type: DataTypes.STRING
      },
      fk_logo_c4: {
        type: DataTypes.INTEGER
    },
    logo_ssypc: {
        type: DataTypes.STRING
    },
    fk_logo_ssypc: {
        type: DataTypes.INTEGER
    },
    fk_revisor: {
        type: DataTypes.INTEGER
    },
    fk_responsable_entrega: {
        type: DataTypes.INTEGER
    },
    ccp_carta: {
        type: DataTypes.STRING
    },
    fecha_inicial: {
        type: DataTypes.DATE
    },
    fecha_final: {
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

export default ConfigReportes;