import { Request, Response } from "express";
import Vehiculos from '../models/vehiculos.model';

export const getVehiculos = async( req: Request , res: Response ) => {

    const vehiculos = await Vehiculos.findAll();

    res.json({ vehiculos });
}

export const getVehiculosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const vehiculos = await Vehiculos.findByPk( id );

    if(vehiculos){
        res.json(vehiculos)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

export const postVehiculos = async( req: Request , res: Response ) => {

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

        const vehiculos = await Vehiculos.create(body);
        await vehiculos.save();

        res.json(vehiculos);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

export const putVehiculos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const vehiculos = await Vehiculos.findByPk( id );
        if (!vehiculos){
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
            })
        }

        await vehiculos.update ( body );
        res.json( vehiculos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

export const deleteVehiculos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const vehiculos = await Vehiculos.findByPk( id );
        if (!vehiculos){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();
       await vehiculos.update({ fk_status: 6 });
        res.json( vehiculos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

