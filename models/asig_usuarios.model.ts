import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Asig_Usuarios = db.define('asig_usuarios', {
    id_asigusu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    fecha_asigusu: {
        type: DataTypes.DATE
    },
    fecha_canusu: {
        type: DataTypes.DATE
      },
    fk_usuario: {
        type: DataTypes.INTEGER
    },
    fk_radio: {
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

export default Asig_Usuarios;