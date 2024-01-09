import { Request, Response } from "express";
import Imagenes from '../models/imagenes.model';

//Función para obtener todos los elementos de una tabla
export const getImagenes = async( req: Request , res: Response ) => {

     // const radios = await Radios.findAll();
        //CONSULTA DONDE SE TRAE LOS ELEMENTOS MOSTRADOS DEL QUERY
        const radios: any = await Imagenes.sequelize?.query("SELECT imagenes.idimagen, imagenes.ruta, imagenes.asignacion, imagenes.fecha_creacion, tipos.nombreTipo, imagenes.estatus, imagenes.createdAt, imagenes.updatedAt FROM imagenes INNER JOIN tipos ON imagenes.idimagen = tipos.idtipos", {
            replacements: [],
            model: Imagenes,
            mapToModel: true
        });

        res.json({
            Datos: radios,
            success: true,
            messagge: "Datos Obtenidos Correctamente" 
        });
}
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getImagenesById = async( req: Request , res: Response ) => {

    const { id } = req.params;
        //CONSULTA DONDE SE TRAE LOS ELEMENTOS MOSTRADOS DEL QUERY
        const imagenes: any = await Imagenes.sequelize?.query("SELECT imagenes.idimagen, imagenes.ruta, imagenes.asignacion, imagenes.fecha_creacion, tipos.nombreTipo, imagenes.estatus, imagenes.createdAt, imagenes.updatedAt FROM imagenes INNER JOIN tipos ON imagenes.idimagen = tipos.idtipos where idimagen= ?", {
            replacements: [ id ],
            model: Imagenes,
            mapToModel: true
        });

        let idimagenes

        for(let i of imagenes){

          idimagenes = i.dataValues.idimagen
    
        }
        console.log(idimagenes);

    if(idimagenes ){
        res.json({
            Datos: imagenes,
            success: true,
            messagge: "Datos Obtenidos Correctamente" 
        });
    }else{
        res.status(404).json({
            msg: "No existe imagen en la base de datos"
        });
    } 

}
//Función para agregar un elemento a la tabla de nuestra base de datos imagenes
export const postImagenes = async( req: Request , res: Response ) => {

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

        const imagenes = await Imagenes.create(body);
        await imagenes.save();

        res.json(imagenes);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}
//Función para actualizar un elemento a la tabla de nuestra base de datos imagenes
export const putImagenes = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const imagenes = await Imagenes.findByPk( id );
        if (!imagenes){
            return res.status(404).json({
                msg: 'No existe una Imagen con el id ' + id
            })
        }

        await imagenes.update ( body );
        res.json( imagenes );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para borrar un elemento a la tabla de nuestra base de datos imagenes (Solo se dehabilita)
export const deleteImagenes = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const imagenes = await Imagenes.findByPk( id );
        if (!imagenes){
            return res.status(404).json({
                msg: 'No existe una Imagen con el id ' + id
            })
        }

       // await usuario.destroy ();
       await imagenes.update({ fk_status: 6 });
        res.json( imagenes );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
}
//Función para habilitar y deshabilitar el estatus de Imagenes 
export const updateEstatusImagenes = async (req: Request, res: Response) => {
    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idImagen no es un valor válido'
      });
    }
    
    const imagenes = await Imagenes.findByPk(id);
    
  if (!imagenes)
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
      imagenes.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      imagenes.update({ fk_status: 1})
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
      data: imagenes,
      success: true,
      message: 'Estatus actualizado'
  })

}
