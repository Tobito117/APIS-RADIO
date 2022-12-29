import Documentos from '../models/documentos.model';
import User from '../models/usuario.model';


const existeUsuarioPorId = async( id: any ) => {

    // Verificar si el correo existe
    const existeUsuario = await User.findByPk(id);
    if ( !existeUsuario ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

const coleccionesPermitidas = ( coleccion = '', colecciones: any = []) => {

    const incluida = colecciones.includes( coleccion );
    if ( !incluida ) {
        throw new Error(`La colección ${ coleccion } no es permitida, ${ colecciones }`);
    }

    return true;   
}

export {
    existeUsuarioPorId,
    coleccionesPermitidas
}
