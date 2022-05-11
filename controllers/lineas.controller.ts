import { Request, Response } from "express";
import Lineas from '../models/lineas.model';

export const getLineas = async( req: Request , res: Response ) => {

    const lineas = await Lineas.findAll();

    res.json({ lineas });
}

export const getLineasById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const lineas = await Lineas.findByPk( id );

    if(lineas){
        res.json(lineas)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

export const postLineas = async( req: Request , res: Response ) => {

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

        const lineas = await Lineas.create(body);
        await lineas.save();

        res.json(lineas);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

export const putLineas = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const lineas = await Lineas.findByPk( id );
        if (!lineas){
            return res.status(404).json({
                msg: 'No existe una linea con el id ' + id
            })
        }

        await lineas.update ( body );
        res.json( lineas );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

export const deleteLineas = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const lineas = await Lineas.findByPk( id );
        if (!lineas){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();
       await lineas.update({ fk_status: 6 });
        res.json( lineas );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

export const updateEstatusLineas = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idLineas no es un valor válido'
      });
    }
    
    const lineas = await Lineas.findByPk(id);

    
  if (!lineas)
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
      lineas.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      lineas.update({ fk_status: 1})
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
      data: lineas,
      success: true,
      message: 'Estatus actualizado'
  })

}

