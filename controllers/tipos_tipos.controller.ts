import { Request, Response } from "express";
import Tipos_Tipos from '../models/tipos_tipos.model';

export const getTipos_Tipos = async( req: Request , res: Response ) => {

    const tipos_tipos = await Tipos_Tipos.findAll();

    res.json({ tipos_tipos });
}

export const getTipos_TiposById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const tipos_tipos = await Tipos_Tipos.findByPk( id );

    if(tipos_tipos){
        res.json(tipos_tipos)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 
}

export const postTipos_Tipos = async( req: Request , res: Response ) => {

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

        const tipos_tipos = await Tipos_Tipos.create(body);
        await tipos_tipos.save();

        res.json(tipos_tipos);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

export const putTipos_Tipos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const tipos_tipos = await Tipos_Tipos.findByPk( id );
        if (!tipos_tipos){
            return res.status(404).json({
                msg: 'No existe un Tipo_Tipo con el id ' + id
            })
        }

        await tipos_tipos.update ( body );
        res.json( tipos_tipos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

export const deleteTipos_Tipos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const tipos_tipos = await Tipos_Tipos.findByPk( id );
        if (!tipos_tipos){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();
       await tipos_tipos.update({ fk_status: 2 });
        res.json( tipos_tipos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
}


export const updatedEstatusTipos_Tipos = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idEstatus no es un valor válido'
      });
    }
    
    const tipos_tipos = await Tipos_Tipos.findByPk(id);

    
  if (!tipos_tipos)
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
      tipos_tipos.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      tipos_tipos.update({ fk_status: 1})
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
      data: tipos_tipos,
      success: true,
      message: 'Estatus actualizado'
  })

}
