import { Request, Response } from "express";
import Puestos from '../models/puestos.model';

export const getPuestos = async( req: Request , res: Response ) => {

    const puestos = await Puestos.findAll();

    res.json({ puestos });
}

export const getPuestosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const puestos = await Puestos.findByPk( id );

    if(puestos){
        res.json(puestos)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

export const postPuestos = async( req: Request , res: Response ) => {

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

        const puestos = await Puestos.create(body);
        await puestos.save();

        res.json(puestos);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

export const putPuestos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const puestos = await Puestos.findByPk( id );
        if (!puestos){
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
            })
        }

        await puestos.update ( body );
        res.json( puestos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

export const deletePuestos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const puestos = await Puestos.findByPk( id );
        if (!puestos){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();
       await puestos.update({ fk_status: 6 });
        res.json( puestos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

export const updateEstatusPuestos = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El id no es un valor válido'
      });
    }
    
    const puestos = await Puestos.findByPk(id);

    
  if (!puestos)
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
      puestos.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      puestos.update({ fk_status: 1})
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
      data: puestos,
      success: true,
      message: 'Estatus actualizado'
  })

}




