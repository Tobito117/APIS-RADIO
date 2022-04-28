import { Request, Response } from "express";
import Modelos from '../models/modelos.model';

export const getModelos = async( req: Request , res: Response ) => {

    const modelos = await Modelos.findAll();

    res.json({ modelos });
}

export const getModelosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const modelos = await Modelos.findByPk( id );

    if(modelos){
        res.json(modelos)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

export const postModelos = async( req: Request , res: Response ) => {

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

        const modelos = await Modelos.create(body);
        await modelos.save();

        res.json(modelos);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

export const putModelos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const modelos = await Modelos.findByPk( id );
        if (!modelos){
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
            })
        }

        await modelos.update ( body );
        res.json( modelos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

export const deleteModelos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const modelos = await Modelos.findByPk( id );
        if (!modelos){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();
       await modelos.update({ fk_status: 6 });
        res.json( modelos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

export const updateEstatusModelos = async (req: Request, res: Response) => {

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
    
    const modelos = await Modelos.findByPk(id);

    
  if (!modelos)
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
      modelos.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      modelos.update({ fk_status: 1})
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
      data: modelos,
      success: true,
      message: 'Estatus actualizado'
  })

}






