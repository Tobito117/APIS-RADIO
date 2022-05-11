import { Request, Response } from "express";
import HojasServicios from '../models/hojas-servicios.model';

export const getHojasServicios = async( req: Request , res: Response ) => {

    const hojasservicios = await HojasServicios.findAll();

    res.json({ hojasservicios });
}

export const getHojasServiciosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const hojasservicios = await HojasServicios.findByPk( id );

    if(hojasservicios){
        res.json(hojasservicios)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

export const postHojasServicios = async( req: Request , res: Response ) => {

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

        const hojasservicios = await HojasServicios.create(body);
        await hojasservicios.save();

        res.json(hojasservicios);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

export const putHojasServicios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const hojasservicios = await HojasServicios.findByPk( id );
        if (!hojasservicios){
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
            })
        }

        await hojasservicios.update ( body );
        res.json( hojasservicios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}


export const deleteHojasServicios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const hojasservicios = await HojasServicios.findByPk( id );
        if (!hojasservicios){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();
       await hojasservicios.update({ fk_status: 6 });
        res.json( hojasservicios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

export const updateEstatusHojasServicios = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idHojasServicios no es un valor válido'
      });
    }
    
    const hojasservicios = await HojasServicios.findByPk(id);

    
  if (!hojasservicios)
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
      hojasservicios.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      hojasservicios.update({ fk_status: 1})
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
      data: hojasservicios,
      success: true,
      message: 'Estatus actualizado'
  })

}
