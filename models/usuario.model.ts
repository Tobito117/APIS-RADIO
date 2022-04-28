import {   Model,DataTypes } from 'sequelize';
import db from '../db/connection';

const User = db.define('User', {
    id: {
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
    auth_key: {
        type: DataTypes.STRING
    },
    password_hash: {
        type: DataTypes.STRING
    },
    confirmation_token: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.INTEGER
    },
    superadmin: {
        type: DataTypes.SMALLINT
    },
    created_at: {
        type: DataTypes.INTEGER
    },
    updated_at: {
        type: DataTypes.INTEGER
    },
    registration_ip: {
        type: DataTypes.STRING
    },
    bind_to_ip: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }, 
    email_confirmed: {
        type: DataTypes.SMALLINT
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
    
}); 


export default User;