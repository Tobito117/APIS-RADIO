import { Request, Response } from "express";
import Marcas from '../models/marcas.model';

export const getMarcas = async( req: Request , res: Response ) => {

    const marcas = await Marcas.findAll();

    res.json({ marcas });
}

export const getMarcasById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const marcas = await Marcas.findByPk( id );

    if(marcas){
        res.json(marcas)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

export const postMarcas = async( req: Request , res: Response ) => {

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

        const marcas = await Marcas.create(body);
        await marcas.save();

        res.json(marcas);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

export const putMarcas = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const marcas = await Marcas.findByPk( id );
        if (!marcas){
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
            })
        }

        await marcas.update ( body );
        res.json( marcas );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

export const deleteMarcas = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const marcas = await Marcas.findByPk( id );
        if (!marcas){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();
       await marcas.update({ fk_status: 6 });
        res.json( marcas );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

export const updateEstatusMarcas = async (req: Request, res: Response) => {

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
    
    const marcas = await Marcas.findByPk(id);

    
  if (!marcas)
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
      marcas.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      marcas.update({ fk_status: 1})
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
      data: marcas,
      success: true,
      message: 'Estatus actualizado'
  })

}





