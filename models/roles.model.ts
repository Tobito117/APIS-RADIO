import {   Model,DataTypes } from 'sequelize';
import db from '../db/connection';

const Roles = db.define('roles', {
    idrol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        // get(){
        //     const rawValue = this.getDataValue('id');
        //     return rawValue? rawValue.toUpperCase(): null;
        // }
      },
    rol: {
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


export default Roles;