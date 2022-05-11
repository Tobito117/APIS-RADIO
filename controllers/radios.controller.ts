import { Request, Response } from "express";
import Radios from '../models/radios.model';

export const getRadios = async( req: Request , res: Response ) => {

    const radios = await Radios.findAll();

    res.json({ radios });
}

export const getRadiosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const radios = await Radios.findByPk( id );

    if(radios){
        res.json(radios)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

export const postRadios = async( req: Request , res: Response ) => {

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

        const radios = await Radios.create(body);
        await radios.save();

        res.json(radios);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

export const putRadios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const radios = await Radios.findByPk( id );
        if (!radios){
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
            })
        }

        await radios.update ( body );
        res.json( radios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}


export const deleteRadios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const radios = await Radios.findByPk( id );
        if (!radios){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();
       await radios.update({ fk_status: 6 });
        res.json( radios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

export const updateEstatusRadios = async (req: Request, res: Response) => {

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
    
    const radios = await Radios.findByPk(id);

    
  if (!radios)
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
      radios.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      radios.update({ fk_status: 1})
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
      data: radios,
      success: true,
      message: 'Estatus actualizado'
  })

}
