import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Imagenes = db.define('imagenes', {
    idimagen: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    ruta: {
        type: DataTypes.STRING
    },
    asignacion: {
        type: DataTypes.STRING
      },
    fecha_creacion: {
        type: DataTypes.DATE
    },
    tipos_idtipos: {
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

export default Imagenes;