import { Request, Response } from "express";
import Usuarios from '../models/usuarios.model';

//Función para obtener todos los elementos de una tabla
export const getUsuarios = async( req: Request , res: Response ) => {

    const usuarios = await Usuarios.findAll();

    res.json( usuarios);
}
export const getUsuariosIdNombre = async( req: Request , res: Response ) => {

    const usuarios: any = await Usuarios.sequelize?.query(
      "SELECT idusuarios, CONCAT(nombre, ' ', apellido_pat, ' ', apellido_mat) AS nombreUsuario FROM usuarios"  
    );

    res.json( usuarios);
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID
export const getUsuarioById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const usuario = await Usuarios.findByPk( id );

    if(usuario){
        res.json(usuario)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

//Función para agregar un elemento a la tabla de nuestra base de datos accesorios
export const postUsuario = async( req: Request , res: Response ) => {

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

        const usuario = await Usuarios.create(body);
        await usuario.save();

        res.json(usuario);

    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos USUARIOS
export const putUsuario = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const usuario = await Usuarios.findByPk( id );
        if (!usuario){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

        await usuario.update ( body );
        res.json( usuario );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}


//Función para borrar un elemento a la tabla de nuestra base de datos usuarios (Solo se dehabilita)
export const deleteUsuario = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const usuario : any = await Usuarios.findByPk( id );
        if (!usuario){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();
       //await usuario.update({ fk_status: 6 });
       const estado= usuario.estatus;
       
       if ( estado == true)
       {
           //Si el estatus viene con valor 'true' deshabilitada el registro
           await usuario.update({ estatus: false })
       }
       else if (estado == false)
       {
        await usuario.update({ estatus: true})
       }
       else
       {
           return res.status(400).json({
               
               success: false,
               message: 'El valor del estatus no es valido (true o false)'
           })
       }
        res.json( usuario );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
}

//Función para habilitar y deshabilitar el estatus de usuarios
export const updateEstatusUsuarios = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;

    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idusuarios no es un valor válido'
      });
    }
    
    const usuarios = await Usuarios.findByPk(id);

    
  if (!usuarios)
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
      usuarios.update({ estatus: false })
  }
  else if (fk_status == 'false')
  {
      usuarios.update({ estatus: true})
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
      data: usuarios,
      success: true,
      message: 'Estatus actualizado'
  })

}