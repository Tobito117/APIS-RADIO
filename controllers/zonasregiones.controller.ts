import { Request, Response } from "express";
import ZonasRegiones from '../models/zonasregiones.model';

export const getZonasRegiones = async( req: Request , res: Response ) => {

    const zonasregiones = await ZonasRegiones.findAll();

    res.json({ zonasregiones });
}

export const getZonasRegionesById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const zonasregiones = await ZonasRegiones.findByPk( id );

    if(zonasregiones){
        res.json(zonasregiones)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

export const postZonasRegiones = async( req: Request , res: Response ) => {

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

        const zonasregiones = await ZonasRegiones.create(body);
        await zonasregiones.save();

        res.json(zonasregiones);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}