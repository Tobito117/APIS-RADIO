import { Request, Response } from "express";
import ZonasRegiones from '../models/zonasregiones.model';

//Función para obtener todos los elementos de una tabla
export const getZonasRegiones = async( req: Request , res: Response ) => {

    const zonasregiones = await ZonasRegiones.findAll();

    res.json( zonasregiones );
}

//Función para obtener todos los elementos de una tabla filtrados por estatus=true
export const getZonasRegionesEstatusActivo = async( req: Request , res: Response ) => {

    const zonasregiones = await ZonasRegiones.findAll({
        where: {
            estatus: true
        }
    });

    res.json( zonasregiones );
}


//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getZonasRegionesById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const zonasregiones = await ZonasRegiones.findByPk( id );

    if(zonasregiones){
        res.json(zonasregiones)
    }else{
        res.status(404).json({
            msg: "No existe zonasregiones en la base de datos"
        });
    } 

}

//Función para agregar un elemento a la tabla de nuestra base de datos zonasregiones
export const postZonasRegiones = async( req: Request , res: Response ) => {

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

        const zonasregiones = await ZonasRegiones.create(body);
        await zonasregiones.save();

        res.json(zonasregiones);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos zonasregiones
export const putZonasRegiones = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const zonasregiones = await ZonasRegiones.findByPk( id );
        if (!zonasregiones){
            return res.status(404).json({
                msg: 'No existe una zonasregion con el id ' + id
            })
        }

        await zonasregiones.update ( body );
        res.json( zonasregiones );

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para borrar un elemento a la tabla de nuestra base de datos zonasregiones (Solo se dehabilita)
export const deleteZonasRegiones = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const zonasregiones : any = await ZonasRegiones.findByPk( id );
        if (!zonasregiones){
            return res.status(404).json({
                msg: 'No existe un zonasregiones con el id ' + id
            })
        }
// await usuario.destroy ();
       //await zonasregiones.update({estatus: 6 });
        const estado= zonasregiones.estatus;
       
       if ( estado == true)
       {
           //Si el estatus viene con valor 'true' deshabilitada el registro
           await zonasregiones.update({ estatus: false })
       }
       else if (estado == false)
       {
        await zonasregiones.update({ estatus: true})
       }
       else
       {
           return res.status(400).json({
               
               success: false,
               message: 'El valor del estatus no es valido (true o false)'
           })
       }
        res.json( zonasregiones );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

//Función para habilitar y deshabilitar el estatus de zonasregiones
export const updateEstatusZonasRegiones = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idZonasRegiones no es un valor válido'
      });
    }
    
    const zonasregiones = await ZonasRegiones.findByPk(id);

    
  if (!zonasregiones)
  {
    return res.status(404).json({
      data: null,
      success: false,
      message: 'No existe registro con el id ' + id
    });
  }

  if(fk_status == undefined)
  {
      return res.status(400).json({
          data: null,
          success: false,
          message: 'El Valor del estatus es requerido (true o false)'
      });
  }

  //Habilitar o deshabilitar un registro (Update estatus)
  if ( fk_status == 'true')
  {
      //Si el estatus viene con valor 'true' deshabilitada el registro
      zonasregiones.update({ estatus: false })
  }
  else if (fk_status == 'false')
  {
      zonasregiones.update({ estatus: true})
  }
  else
  {
      return res.status(400).json({
          data: null,
          success: false,
          message: 'El valor del estatus no es valido (true o false)'
      })
  }

  res.json({
      data: zonasregiones,
      success: true,
      message: 'Estatus actualizado'
  })

}
