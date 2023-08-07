import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import User from '../models/usuario.model';

export const  validarJWT = async ( req: Request, res: Response, next: NextFunction) => {

    // interface JwtPayload {
    //     id: string
    //   }

    const token = req.header('x-token');

    if ( !token ){
        return res.status(401).json({
            msg: "No hay token en la peticion"

        });
    }
    try {

        const { id } : any  = jwt.verify( token, process.env.SECRETORPRIVATEKEY as string);

        const user: any = await User.findByPk( id );   
        console.log(user);
req.id= id;

        //verificar si el usuario no existe en la base de datos
        if(!user){

            return res.status(401).json({
                msg: "Token no válido - usuario no existe en BD"
            });

        }
        
        //Verificar si el usuario esta en estado true

         if(!user.dataValues.estatus){
            return res.status(401).json({
                msg: "Token no válido - usuario con estado_ false"
            }); 
        }

        req.user = user; //AQUI SE EXTRAE DE LA CARPETA @TYPES EN EL ARCHIVO INDEX.D.TS, se hizo una interface manual

        console.log(user);

        next();
        
    } catch (error) {
        console.log(error);
        // res.status(401).json({
        //     msg: 'Token no válido'
        // });
    }

} 