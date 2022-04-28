import { Request, Response } from "express";
import ZonasRegiones from '../models/zonasregiones.model';

export const getZonasRegiones = async( req: Request , res: Response ) => {

    const zonasregiones = await ZonasRegiones.findAll();

    res.json({ zonasregiones });
}

export const getZonasRegionesById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const zonasregiones = await ZonasRegiones.findByPk( id );

    if(zonasregiones){
        res.json(zonasregiones)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

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

export const putZonasRegiones = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const zonasregiones = await ZonasRegiones.findByPk( id );
        if (!zonasregiones){
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
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


export const deleteZonasRegiones = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const zonasregiones = await ZonasRegiones.findByPk( id );
        if (!zonasregiones){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();
       await zonasregiones.update({ fk_status: 6 });
        res.json( zonasregiones );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

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
      zonasregiones.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      zonasregiones.update({ fk_status: 1})
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
