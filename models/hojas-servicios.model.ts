import { DataTypes } from 'sequelize';
import db from '../db/connection';

const HojasServicios = db.define('hojaservicios', {
    id_hoja_servicio: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    fecha_servicio: {
        type: DataTypes.DATE
    },
    fk_usuario: {
        type: DataTypes.INTEGER
      },
    fk_servicio: {
        type: DataTypes.INTEGER
      },
    fk_radio: {
        type: DataTypes.INTEGER
      },
    fk_accesorio: {
        type: DataTypes.INTEGER
      },
    descripcion: {
        type: DataTypes.STRING
      },
    entrego_equipo: {
        type: DataTypes.BOOLEAN
      },
    fecha_entrega: {
        type: DataTypes.DATE
      },
    hora_entrega: {
        type: DataTypes.TIME
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

export default HojasServicios;