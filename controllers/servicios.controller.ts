import { Request, Response } from "express";
import Servicios from '../models/servicios.model';

export const getServicios = async( req: Request , res: Response ) => {

    const servicios = await Servicios.findAll();

    res.json({ servicios });
}

export const getServiciosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const servicios = await Servicios.findByPk( id );

    if(servicios){
        res.json(servicios)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

export const postServicios = async( req: Request , res: Response ) => {

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

        const servicios = await Servicios.create(body);
        await servicios.save();

        res.json(servicios);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}


export const putServicios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const servicios = await Servicios.findByPk( id );
        if (!servicios){
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
            })
        }

        await servicios.update ( body );
        res.json( servicios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}


export const deleteServicios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const servicios = await Servicios.findByPk( id );
        if (!servicios){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();
       await servicios.update({ fk_status: 6 });
        res.json( servicios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

export const updateEstatusServicios = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idServicios no es un valor válido'
      });
    }
    
    const servicios = await Servicios.findByPk(id);

    
  if (!servicios)
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
      servicios.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      servicios.update({ fk_status: 1})
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
      data: servicios,
      success: true,
      message: 'Estatus actualizado'
  })

}







