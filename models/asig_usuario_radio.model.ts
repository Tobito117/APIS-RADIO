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
    rfsi: {
        type: DataTypes.STRING
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