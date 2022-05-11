import { Request, Response } from "express";
import Imagenes from '../models/imagenes.model';

export const getImagenes = async( req: Request , res: Response ) => {

    const imagenes = await Imagenes.findAll();

    res.json({ imagenes });
}

export const getImagenesById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const imagenes = await Imagenes.findByPk( id );

    if(imagenes){
        res.json(imagenes)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

export const postImagenes = async( req: Request , res: Response ) => {

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

        const imagenes = await Imagenes.create(body);
        await imagenes.save();

        res.json(imagenes);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

export const putImagenes = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const imagenes = await Imagenes.findByPk( id );
        if (!imagenes){
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
            })
        }

        await imagenes.update ( body );
        res.json( imagenes );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}


export const deleteImagenes = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const imagenes = await Imagenes.findByPk( id );
        if (!imagenes){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();
       await imagenes.update({ fk_status: 6 });
        res.json( imagenes );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

export const updateEstatusImagenes = async (req: Request, res: Response) => {

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
    
    const imagenes = await Imagenes.findByPk(id);

    
  if (!imagenes)
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
      imagenes.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      imagenes.update({ fk_status: 1})
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
      data: imagenes,
      success: true,
      message: 'Estatus actualizado'
  })

}
