import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ConfigReportes = db.define('configreportes', {
    id_config_repo: {
        type: DataTypes.INTEGER,
        primaryKey: true
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
    fk_encargado_revision: {
        type: DataTypes.INTEGER
    },
    fk_entrego: {
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
    fk_status: {
        type: DataTypes.INTEGER
    },
    fecha_creacion: {
        type: DataTypes.DATE
    },
    fk_user: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

export default ConfigReportes;