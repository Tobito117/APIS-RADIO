import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Asig_Usuarios = db.define('asignacion_usuario_radios', {
    asignacion_usuario_radiocol: {
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