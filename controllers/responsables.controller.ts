import { Request, Response } from "express";
import Responsables from '../models/responsables.model';

//Función para obtener todos los elementos de una tabla
export const getResponsables = async( req: Request , res: Response ) => {

    const usuariosResponsables = await Responsables.findAll();

    res.json( usuariosResponsables);
}