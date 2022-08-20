import { Request, Response } from "express";
import Sue from '../models/situacion_ubicacion_estatus.model';

//Función para obtener todos los elementos de una tabla
export const getStatus = async( req: Request , res: Response ) => {

    const status = await Sue.findAll();

    res.json({ 
        Datos: status,
        estatus: true,
        messagge: 'Datos Obtenidos Correctamente'
     });
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getStatusById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const status = await Sue.findByPk( id );

    if(status){
        res.json(status)
    }else{
        res.status(404).json({
            msg: "No existe situacion_ubicacion en la base de datos"
        });
    } 

}

//Función para agregar un elemento a la tabla de nuestra base de datos staus
export const postStatus = async( req: Request , res: Response ) => {

    const { body } = req;

    try {
        // const existeEmail = await Usuarios.findOne({
        //     where: {
        //         email: body.email
        //     }
        // })

        // if (existeEmail){
        //     return res.status(400).json({
        //         msg: 'Ya existe un usuario con el email ' + body.email
        //     });
        // }

        const status = await Sue.create(body);
        await status.save();

        res.json(status);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos status
export const putStatus = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const status = await Sue.findByPk( id );
        if (!status){
            return res.status(404).json({
                msg: 'No existe un situacion_ubicacion con el id ' + id
            })
        }

        await status.update ( body );
        res.json( status );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos status (Solo se dehabilita)
export const deleteStatus = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const status = await Sue.findByPk( id );
        if (!status){
            return res.status(404).json({
                msg: 'No existe un situacion_ubicacion con el id ' + id
            })
        }

       // await usuario.destroy ();
        await status.update({ nombreStatus: 'Cancelado' });
        res.json( status );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
 
}

// export const updateEstatusZonasRegiones = async (req: Request, res: Response) => {

//     const  id  = Number(req.params.id);
//     const fk_status = req.query.fk_status;
  
//     if (isNaN(id))
//     {
//       return res.status(400).json({
//         data: null,
//         success: false,
//         message: 'El idZonasRegiones no es un valor válido'
//       });
//     }
    
//     const zonasregiones = await ZonasRegiones.findByPk(id);

    
//   if (!zonasregiones)
//   {
//     return res.status(404).json({
//       data: null,
//       success: false,
//       message: 'No existe registro con el id ' + id
//     });
//   }

//   if(fk_status == undefined)
//   {
//       return res.status(400).json({
//           data: null,
//           success: false,
//           message: 'El Valor del estatus es requerido (true o false)'
//       });
//   }

//   //Habilitar o deshabilitar un registro (Update estatus)
//   if ( fk_status == 'true')
//   {
//       //Si el estatus viene con valor 'true' deshabilitada el registro
//       zonasregiones.update({ fk_status: 6 })
//   }
//   else if (fk_status == 'false')
//   {
//       zonasregiones.update({ fk_status: 1})
//   }
//   else
//   {
//       return res.status(400).json({
//           data: null,
//           success: false,
//           message: 'El valor del estatus no es valido (true o false)'
//       })
//   }

//   res.json({
//       data: zonasregiones,
//       success: true,
//       message: 'Estatus actualizado'
//   })

// }





