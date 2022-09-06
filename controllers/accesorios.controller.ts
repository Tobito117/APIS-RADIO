import { Request, Response } from "express";
import Accesorios from '../models/accesorios.model';

//Función para obtener todos los elementos de unafkewnfkmewn
export const getAccesorios = async( req: Request , res: Response ) => {

    const accesorios = await Accesorios.findAll();

    res.json({ 
        Datos: accesorios, 
        messagge: "Datos Obtenidos Correctamente",
        estatus: true 
    });
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getAccesoriosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const accesorios = await Accesorios.findByPk( id );

    if(accesorios){
        res.json(accesorios)
    }else{
        res.status(404).json({
            msg: "No existe accesorio en la base de datos"
        });
    } 

}

// Función para agregar un elemento a la tabla de nuestra base de datos accesorios
export const postAccesorios = async( req: Request , res: Response ) => {

    const { body } = req;

    //Validacion para que no se repita mismos usuarios, en este caso con el mismo correo EMAIL 
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

        const accesorios = await Accesorios.create(body);
        await accesorios.save();

        res.json(accesorios);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para aztualizar un elemento a la tabla de nuestra base de datos accesorios
export const putAccesorios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const accesorios = await Accesorios.findByPk( id );
        if (!accesorios){
            return res.status(404).json({
                msg: 'No existe un Accesorio con el id ' + id
            })
        }

        await accesorios.update ( body );
        res.json( accesorios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos accesorios
export const deleteAccesorios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const accesorios = await Accesorios.findByPk( id );
        if (!accesorios){
            return res.status(404).json({
                msg: 'No existe un accesorio con el id ' + id
            })
        }

       // await usuario.destroy ();
       await accesorios.update({ fk_status: 6 });
        res.json( accesorios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

//Función para habilitar y deshabilitar el estatus de Accesorios 
export const updateEstatusAccesorios = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idAccesorio no es un valor válido'
      });
    }
    
    const accesorios = await Accesorios.findByPk(id);

    
  if (!accesorios)
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
      accesorios.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      accesorios.update({ fk_status: 1})
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
      data: accesorios,
      success: true,
      message: 'Estatus actualizado'
  })

}
