import { Request, Response } from "express";
import RecursosCompras from '../models/recursos-compras.model';

export const getRecursosCompras = async( req: Request , res: Response ) => {

    const recursoscompras = await RecursosCompras.findAll();

    res.json({ recursoscompras });
}

export const getRecursosComprasById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const recursoscompras = await RecursosCompras.findByPk( id );

    if(recursoscompras){
        res.json(recursoscompras)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

export const postRecursosCompras = async( req: Request , res: Response ) => {

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

        const recursoscompras = await RecursosCompras.create(body);
        await recursoscompras.save();

        res.json(recursoscompras);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

export const putRecursosCompras = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const recursoscompras = await RecursosCompras.findByPk( id );
        if (!recursoscompras){
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
            })
        }

        await recursoscompras.update ( body );
        res.json( recursoscompras );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}


export const deleteRecursosCompras = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const recursoscompras = await RecursosCompras.findByPk( id );
        if (!recursoscompras){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();
       await recursoscompras.update({ fk_status: 6 });
        res.json( recursoscompras );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}


export const updateEstatusRecursosCompras = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idRecursosCompras no es un valor válido'
      });
    }
    
    const recursoscompras = await RecursosCompras.findByPk(id);

    
  if (!recursoscompras)
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
      recursoscompras.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      recursoscompras.update({ fk_status: 1})
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
      data: recursoscompras,
      success: true,
      message: 'Estatus actualizado'
  })

}



