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
    encabezado2: {
        type: DataTypes.STRING
      },
    encabezado_hservicio: {
        type: DataTypes.STRING
      },
    logo1: {
        type: DataTypes.STRING
    },
    logo2: {
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
    revisor: {
        type: DataTypes.INTEGER
    },
    responsable_entrega: {
        type: DataTypes.INTEGER
    },
    pie_carta: {
        type: DataTypes.STRING
    },
    pie_hservicio: {
        type: DataTypes.STRING
    },
    fecha_inicial: {
        type: DataTypes.DATE
    },
    fecha_final: {
        type: DataTypes.DATE
    },
    fecha_creacion: {
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