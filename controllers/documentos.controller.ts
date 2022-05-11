import { Request, Response } from "express";
import Documentos from '../models/documentos.model';

export const getDocumentos = async( req: Request , res: Response ) => {

    const documentos = await Documentos.findAll();

    res.json({ documentos });
}

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

export const postDocumentos = async( req: Request , res: Response ) => {

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

        const documentos = await Documentos.create(body);
        await documentos.save();

        res.json(documentos);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

export const putDocumentos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const documentos = await Documentos.findByPk( id );
        if (!documentos){
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
            })
        }

        await documentos.update ( body );
        res.json( documentos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}


export const deleteDocumentos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const documentos = await Documentos.findByPk( id );
        if (!documentos){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
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

export const updateEstatusDocumentos = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idZonasRegiones no es un valor válido'
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
