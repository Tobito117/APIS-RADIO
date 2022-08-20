import {   Model,DataTypes } from 'sequelize';
import db from '../db/connection';

const User = db.define('users', {
    idusers: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        // get(){
        //     const rawValue = this.getDataValue('id');
        //     return rawValue? rawValue.toUpperCase(): null;
        // }
      },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    roles_idrol: {
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


export default User;