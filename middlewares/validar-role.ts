import { Request, Response, NextFunction } from "express";

export const esAdminRole = (req: Request, res: Response, next: NextFunction) => {

    if(!req.user){
        return res.status(500).json({
            msg: 'Se quiere verificar el role sin validar el token primero'
        });
    }

    const { roles_idrol, username } = req.user;

    if ( roles_idrol > 2){
        return res.status(401).json({
            msg: ` ${username} no es administrador - no puede hacer eso`
        })
    }

    next();
}