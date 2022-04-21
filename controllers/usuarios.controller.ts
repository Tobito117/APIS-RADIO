import { Request, Response } from "express";
import Usuarios from '../models/usuarios.model';

export const getUsuarios = async( req: Request , res: Response ) => {

    const usuarios = await Usuarios.findAll();

    res.json({ usuarios });
}

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

export const deleteUsuario = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const usuario = await Usuarios.findByPk( id );
        if (!usuario){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();
       await usuario.update({ fk_status: 6 });
        res.json( usuario );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}
