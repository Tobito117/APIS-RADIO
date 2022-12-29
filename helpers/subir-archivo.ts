import {  request, Request, Response } from "express";
import fileUpload from 'express-fileupload';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export const subirArchivo = async ( req: Request, files: any, extensionesValidas = ['png', 'jpg', 'jpeg', 'gif', 'docx', 'xlsx', 'pdf', 'txt'], carpeta = ''  ) => {

    return new Promise((resolve, reject,  ) => {
        
        const archivo = req.files?.archivo as fileUpload.UploadedFile;
        console.log(archivo);
        const nombreCortado = archivo.name.split('.')
        const extension = nombreCortado[nombreCortado.length - 1];

        //Validar la extensión
        if (!extensionesValidas.includes(extension)) {
            return reject ( `La extensión ${extension} no es permitida, ${extensionesValidas}`)
        }

        const nombreTemp = uuidv4() + '.' + extension;
        const uploadPath = path.join( __dirname, '../uploads/', carpeta, nombreTemp)

        archivo?.mv(uploadPath, (err) => {
            if (err) {
                reject(err);
            }

            resolve( nombreTemp );
        })

    });
}