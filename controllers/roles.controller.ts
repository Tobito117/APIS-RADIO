import { Request, Response } from "express";
import Roles from '../models/roles.model';

//Función para obtener todos los elementos de una tabla
export const getRoles = async( req: Request , res: Response ) => {

    const roles = await Roles.findAll({
        order: [
            // Will escape title and validate DESC against a list of valid direction parameters
            ['idrol', 'DESC'],
            ]
    });

    res.json(roles);
}
//Función para obtener todos los elementos de una tabla por estatus
export const getRolesEstatus = async( req: Request , res: Response ) => {

    const roles = await Roles.findAll({
        where: {
            estatus: true
        }
    });

    res.json(roles);
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getRolesById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const roles = await Roles.findByPk( id );

    if(roles){
        res.json(roles)
    }else{
        res.status(404).json({
            msg: "No existe IdTipo en la base de datos"
        });
    } 
}

//Función para agregar un elemento a la tabla de nuestra base de datos accesorios
export const postRoles = async( req: Request , res: Response ) => {

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

        const roles = await Roles.create(body);
        await roles.save();

        res.json(roles);

    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos Tipos
export const putRoles = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const roles = await Roles.findByPk( id );
        if (!roles){
            return res.status(404).json({
                msg: 'No existe un tipo con el id ' + id
            })
        }

        await roles.update ( body );
        res.json( roles );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos tipos (Solo se dehabilita)
export const deleteTipos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const roles : any= await Roles.findByPk( id );
        if (!roles){
            return res.status(404).json({
                msg: 'No existe un tipo con el id ' + id
            })
        }

       // await usuario.destroy ();
       //await tipos.update({ fk_status: 6 });
       const estado= roles.estatus;
       // await usuario.destroy ();
       //await zonasregiones.update({estatus: 6 });
       if ( estado == true)
       {
           //Si el estatus viene con valor 'true' deshabilitada el registro
           await roles.update({ estatus: false })
       }
       else if (estado == false)
       {
        await roles.update({ estatus: true})
       }
       else
       {
           return res.status(400).json({
               success: false,
               message: 'El valor del estatus no es valido (true o false)'
           })
       }
        res.json( roles );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

//Función para habilitar y deshabilitar el estatus de Tipos
export const updateEstatusRoles = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idTipos no es un valor válido'
      });
    }
    
    const roles = await Roles.findByPk(id);

    
  if (!roles)
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
      roles.update({ estatus: false })
  }
  else if (fk_status == 'false')
  {
      roles.update({ estatus: true})
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
      data: roles,
      success: true,
      message: 'Estatus actualizado'
  })

}