import { NextFunction, Request, Response } from 'express';
import User from '../models/usuario.model';
import { generarJWT } from '../helpers/generar-jwt';

//Función para obtener todos los elementos de una tabla
export const getUsuarios = async( req: Request , res: Response ) => {

//    const usuarios = await User.findAll();
//
//    res.json( usuarios ); 
const usuarios: any = await User.sequelize?.query("SELECT  users.idusers, users.username, users.password, users.email,users.roles_idrol, roles.rol, users.estatus,users.createdAt, users.updatedAt FROM users INNER JOIN roles ON users.roles_idrol = roles.idrol", {
    replacements: [],
    model: User,
    mapToModel: true
});
res.json(usuarios);
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getUsuarioById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const usuario = await User.findByPk( id );

    if(usuario){
        res.json(usuario)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    }
}

//Función para agregar un elemento a la tabla de nuestra base de datos usuario
export const postUsuario = async( req: Request , res: Response ) => {

    const { body } = req;

    try {
        // const existeEmail = await User.findOne({
        //     where: {
        //         email: body.email
        //     }
        // })

        // if (existeEmail){
        //     return res.status(400).json({
        //         msg: 'Ya existe un usuario con el email ' + body.email
        //     });
        // }

        const usuario = await User.create(body);
        await usuario.save();

        res.json(usuario);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos usuario
export const putUsuario = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const usuario = await User.findByPk( id );
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

        const usuario : any= await User.findByPk( id );
        if (!usuario){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();

       const UsuarioAutenticado = req.user;
         
       const estado= usuario.estatus;
        console.log('dfwwfeffg',estado);
        
       //await usuario.update({ estatus: false });

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
        res.json({ usuario, UsuarioAutenticado });
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

}
export const cambiarContraseña = async( req: Request , res: Response ) => {

    const { id,} = req.params;
    const { body } =  req;

    try {

        const usuario : any = await User.findByPk( id );
        if (!usuario){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       const UsuarioAutenticado = req.user;
         
       const contraseña= usuario.password;

       if (contraseña !== body.bpassword)
  {
    return res.status(500).json({
     
      message: 'Contraseña Incorrecta '
    });
  }
  if (body.password !== body.confirmNewPassword)
  {
    return res.status(500).json({
     
      message: 'La nueva contraseña no coincide'
    });
  }
       if ( contraseña == body.bpassword && body.password == body.confirmNewPassword )
       {
        await usuario.update({ password: body.password})
      }
       else
   {
          return res.status(500).json({
               
                success: false,
               message: 'error al actualizar contraseña'
           })
       }
        res.json({ usuario, UsuarioAutenticado });
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

//Función para habilitar y deshabilitar el estatus de status
export const updateEstatusUsuario = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El iduser no es un valor válido'
      });
    }
    
    const user = await User.findByPk(id);

  if (!user)
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
      user.update({ estatus: false })
  }
  else if (fk_status == 'false')
  {
      user.update({ estatus: true})
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
      data: user,
      success: true,
      message: 'Estatus actualizado'
  })

}

//GENERAR JWT PRUEBAAAA

//VALIDAMOS QUE EL USUARIO EXISTA, EL USERNAME EXISTA Y ESTE ACTIVO
export const validarUsuarioPrueba = async ( req: Request, res: Response) => {

    
    const { body } = req
    try {
        //verificar si el usuario existe
        const existeUsuario: any = await User.findOne({
            where: {
                username: body.username,
                password : body.password

            }
        });

        console.log(existeUsuario.dataValues.idusers);

        //Verificar si el email existe
        if(!existeUsuario){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - name'
            });
        }

        //si el usuario está activo
        if (!existeUsuario.dataValues.estatus){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: inactivo'
            })
        }

        //Genenerar JWT 
        const token = await generarJWT( existeUsuario.dataValues.idusers)

        res.json({
            existeUsuario,
            token
        })
     
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
   
    }
}

 export const revalidarToken = async (req: Request, res : Response ) => {

    const id = req.id;
    
    const existeUsuario: any = await User.findOne({
        where: {
            idusers: id
        }
    });
    
    // Generar JWT
    const token = await generarJWT(existeUsuario.dataValues.idusers);
    res.json({
        ok: true,
        idusers:existeUsuario.dataValues.idusers,
        username:existeUsuario.dataValues.username,
        token
    })
}

// AQUI ERA ERA UNA FUNCION DE LLAVE PARA VALIDAR CIERTOS CAMPOS
// export const validarCampos = async (req: Request, res: Response, next: NextFunction) => {

//   // const idUsers = Number(request.params.idUsers);
//   // const NameUser = request.query.NameUser;
//   // const PassUser = request.query.PassUser;

//    const body = req.body;
//    const idUser = body.idUser;

//    console.log("IdUsuario", idUser);
//   // const estatus = body.estatus;
//   const errors = validationResult(req);
//     if( !errors.isEmpty() ){
//         return res.status(400).json(errors);
//     }

//     next();

// }


