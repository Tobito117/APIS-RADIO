import { Request, Response } from "express";
import RecursosCompras from '../models/recursos-compras.model';

//Función para obtener todos los elementos de una tabla
export const getRecursosCompras = async( req: Request , res: Response ) => {

    const recursoscompras = await RecursosCompras.findAll({
        order: [
            // Will escape title and validate DESC against a list of valid direction parameters
            ['idrecursoCompras', 'DESC'],
            ]
    });

    res.json( recursoscompras );
}
//Función para obtener todos los elementos de una tabla por estatus
export const getRecursosComprasEstatus = async( req: Request , res: Response ) => {

    const recursoscompras = await RecursosCompras.findAll({
        where: {
            estatus: true
        }
    });

    res.json( recursoscompras );
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getRecursosComprasById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const recursoscompras = await RecursosCompras.findByPk( id );

    if(recursoscompras){
        res.json(recursoscompras)
    }else{
        res.status(404).json({
            msg: "No existe recursos-compras en la base de datos"
        });
    } 

}

//Función para agregar un elemento a la tabla de nuestra base de datos recursos-compras
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

//Función para actualizar un elemento a la tabla de nuestra base de datos recursos-compras
export const putRecursosCompras = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const recursoscompras = await RecursosCompras.findByPk( id );
        if (!recursoscompras){
            return res.status(404).json({
                msg: 'No existe un recurso-compra con el id ' + id
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

//Función para borrar un elemento a la tabla de nuestra base de datos recursos-compras (Solo se dehabilita)
export const deleteRecursosCompras = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const recursoscompras : any = await RecursosCompras.findByPk( id );
        if (!recursoscompras){
            return res.status(404).json({
                msg: 'No existe un recurso-compra con el id ' + id
            })
        }

       // await usuario.destroy (); //elimnina el elemento por completo
       //await recursoscompras.update({ fk_status: 6 });
       const estado= recursoscompras.estatus;
       
       if ( estado == true)
       {
           //Si el estatus viene con valor 'true' deshabilitada el registro
           await recursoscompras.update({ estatus: false })
       }
       else if (estado == false)
       {
        await recursoscompras.update({ estatus: true})
       }
       else
       {
           return res.status(400).json({
               
               success: false,
               message: 'El valor del estatus no es valido (true o false)'
           })
       }
        res.json( recursoscompras );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

//Función para habilitar y deshabilitar el estatus de recursos-compras 
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



