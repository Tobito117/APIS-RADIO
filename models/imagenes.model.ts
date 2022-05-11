import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Imagenes = db.define('imagenes', {
    id_imagen: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    ruta: {
        type: DataTypes.STRING
    },
    fk_asignacion: {
        type: DataTypes.INTEGER
      },
    fk_tipoasignacion: {
        type: DataTypes.INTEGER
    },
    fecha_creacion: {
        type: DataTypes.DATE
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

export default Imagenes;