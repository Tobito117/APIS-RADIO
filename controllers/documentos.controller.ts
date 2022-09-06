import { Request, Response } from "express";
import fileUpload from 'express-fileupload';
import path from 'path';
import Documentos from '../models/documentos.model';
import { v4 as uuidv4 } from 'uuid';
import { subirArchivo } from "../helpers/subir-archivo";

//Función para obtener todos los elementos de una tabla
export const getDocumentos = async( req: Request , res: Response ) => {

    const documentos = await Documentos.findAll();

    res.json({ documentos });
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getDocumentosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const documentos = await Documentos.findByPk( id );

    if(documentos){
        res.json(documentos)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

//Función para actualizar un elemento a la tabla de nuestra base de datos documentos
// export const postDocumentos = async( req: Request , res: Response ) => {

//     const { body } = req;

//     try {
//         // const existeEmail = await Usuarios.findOne({
//         //     where: {
//         //         email: body.email
//         //     }
//         // })

//         // if (existeEmail){
//         //     return res.status(400).json({
//         //         msg: 'Ya existe un usuario con el email ' + body.email
//         //     });
//         // }

//         const documentos = await Documentos.create(body);
//         await documentos.save();

//         res.json(documentos);
        
//     } catch (error) {
//         res.status(500).json({
//             msg: 'Hable con el Administrador'
//         })
//     }
// }

//Función para actualizar un elemento a la tabla de nuestra base de datos documentos
export const putDocumentos = async( req: Request , res: Response ) => {

    // const { id } = req.params;
    // const { body } =  req;

    // try {

    //     const documentos = await Documentos.findByPk( id );
    //     if (!documentos){
    //         return res.status(404).json({
    //             msg: 'No existe un Documento con el id ' + id
    //         })
    //     }

    //     await documentos.update ( body );
    //     res.json( documentos );
        
    // } catch (error) {

    //     console.log(error);
    //     res.status(500).json({
    //         msg: 'Hable con el Administrador'
    //     })
        
    // }

    const { id } = req.params;

    res.json({
        id: id
    })
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos documentos (Solo se dehabilita)
export const deleteDocumentos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const documentos = await Documentos.findByPk( id );
        if (!documentos){
            return res.status(404).json({
                msg: 'No existe un documento con el id ' + id
            })
        }

       // await usuario.destroy ();
       await documentos.update({ status: 0 });
        res.json( documentos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

//Función para habilitar y deshabilitar el estatus de Accesorios 
export const updateEstatusDocumentos = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idDocumento no es un valor válido'
      });
    }
    
    const documentos = await Documentos.findByPk(id);

    
  if (!documentos)
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
      documentos.update({ status: 0 })
  }
  else if (fk_status == 'false')
  {
      documentos.update({ status: 1})
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
      data: documentos,
      success: true,
      message: 'Estatus actualizado'
  })

}

//Cargar Archivo 
export const postDocumentos = async( req: Request , res: Response ) => {
    
    if (!req.files || Object.keys(req.files).length === 0 || !req.files?.archivo) {
        res.status(400).json({ msg: 'No hay archivos que subir' })
        return
      }

      try {

        //   const nombre = await subirArchivo(req, req.files, ['docx', 'xlsx', 'pdf', 'txt'], 'textos');
          const nombre = await subirArchivo(req, req.files, undefined, 'archivos' );
          res.json({ nombre });
        
      } catch (msg) {
        res.status(400).json({ msg });
      }
     
      

}

