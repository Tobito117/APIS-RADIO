import { DataTypes } from 'sequelize';
import db from '../db/connection';

const HojasServicios = db.define('hojaservicios', {
    idhojaservicios: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    fecha_servicio:{
        type: DataTypes.DATE
      },
    fk_idasignacion_ur: {
        type: DataTypes.INTEGER
      },
      servicios: {
        type: DataTypes.STRING
      },
    descripcion: {
        type: DataTypes.STRING
      },
    entrego_equipo: {
        type: DataTypes.BOOLEAN
      },
    fecha_entrega: {
        type: DataTypes.DATE(6)
      },
    fk_supervisortec: {
        type: DataTypes.INTEGER
      },
    usuario_servicio: {
        type: DataTypes.STRING
      },
    usuario_entrega: {
        type: DataTypes.STRING
    },
    fk_tecnico_entrega: {
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

export default HojasServicios;