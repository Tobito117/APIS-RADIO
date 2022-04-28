import { Request, Response, NextFunction } from "express";


export const esAdminRole = (req: Request, res: Response, next: NextFunction) => {

    if(!req.user){
        return res.status(500).json({
            msg: 'Se quiere verificat el role sin validar el token primero'
        });
    }

    const { superadmin, username } = req.user;

    if ( superadmin !== 1){
        return res.status(401).json({
            msg: ` ${username} no es administrador - no puede hacer eso`
        })
    }

    next();
}