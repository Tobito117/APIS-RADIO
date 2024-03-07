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
    fk_armar: {
        type: DataTypes.INTEGER,
        // allowNull: true
    },
    fecha_asignacion: {
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

export default Asig_Usuarios;