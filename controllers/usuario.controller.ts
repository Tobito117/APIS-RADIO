import { NextFunction, Request, Response } from 'express';
import User from '../models/usuario.model';
import { generarJWT } from '../helpers/generar-jwt';


export const getUsuarios = async( req: Request , res: Response ) => {

    const usuarios = await User.findAll();

    res.json({ usuarios });
}

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

export const postUsuario = async( req: Request , res: Response ) => {

    const { body } = req;

    try {
        const existeEmail = await User.findOne({
            where: {
                email: body.email
            }
        })

        if (existeEmail){
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email
            });
        }

        const usuario = await User.create(body);
        await usuario.save();

        res.json(usuario);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

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


export const deleteUsuario = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const usuario = await User.findByPk( id );
        if (!usuario){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();

       const UsuarioAutenticado = req.user;


       await usuario.update({ status: false });
        res.json({ usuario, UsuarioAutenticado });
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

//GENERAR JWT PRUEBAAAA

export const validarUsuarioPrueba = async ( req: Request, res: Response) => {

    

    const { body } = req
    try {
        //verificar si el usuario existe
        const existeUsuario: any = await User.findOne({
            where: {
                username: body.username,
                password_hash : body.password_hash

            }
        });

        //Verificar si el email existe
        if(!existeUsuario){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - name'
            });
        }

        //si el usuario está activo
        if (!existeUsuario.dataValues.status){
            return res.status(400).json({
                msg: 'Usuario / Passwordno son correctos - estado: inactivo'
            })
        }

        //Genenerar JWT 
        const token = await generarJWT( existeUsuario.dataValues.id)


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


