import { Request, Response } from "express";
import Asig_Vehiculos from '../models/asig_vehiculos.model';

export const getAsig_Vehiculos = async( req: Request , res: Response ) => {

    const asig_vehiculos = await Asig_Vehiculos.findAll();

    res.json({ asig_vehiculos });
}

export const getAsig_VehiculosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const asig_vehiculos = await Asig_Vehiculos.findByPk( id );

    if(asig_vehiculos){
        res.json(asig_vehiculos)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

export const postAsig_Vehiculos = async( req: Request , res: Response ) => {

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

        const asig_vehiculos = await Asig_Vehiculos.create(body);
        await asig_vehiculos.save();

        res.json(asig_vehiculos);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

export const putAsig_Vehiculos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const asig_vehiculos = await Asig_Vehiculos.findByPk( id );
        if (!asig_vehiculos){
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
            })
        }

        await asig_vehiculos.update ( body );
        res.json( asig_vehiculos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}


export const deleteAsig_Vehiculos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const asig_vehiculos = await Asig_Vehiculos.findByPk( id );
        if (!asig_vehiculos){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();
       await asig_vehiculos.update({ fk_status: 6 });
        res.json( asig_vehiculos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

export const updateEstatusAsig_Vehiculos = async (req: Request, res: Response) => {

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
    
    const asig_vehiculos = await Asig_Vehiculos.findByPk(id);

    
  if (!asig_vehiculos)
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
      asig_vehiculos.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      asig_vehiculos.update({ fk_status: 1})
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
      data: asig_vehiculos,
      success: true,
      message: 'Estatus actualizado'
  })

}
