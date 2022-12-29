import { Request, Response } from "express";
import Radios from '../models/radios.model';

//Función para obtener todos los elementos de una tabla
export const getRadios = async( req: Request , res: Response ) => {

    const radios = await Radios.findAll();

    res.json( radios );
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getRadiosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const radios = await Radios.findByPk( id );

    if(radios){
        res.json(radios)
    }else{
        res.status(404).json({
            msg: "No existe radio en la base de datos"
        });
    } 

}

//Función para agregar un elemento a la tabla de nuestra base de datos radios
export const postRadios = async( req: Request , res: Response ) => {

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

        const radios = await Radios.create(body);
        await radios.save();

        res.json(radios);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos radio
export const putRadios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const radios = await Radios.findByPk( id );
        if (!radios){
            return res.status(404).json({
                msg: 'No existe un radio con el id ' + id
            })
        }

        await radios.update ( body );
        res.json( radios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos radios (Solo se dehabilita)
export const deleteRadios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const radios : any = await Radios.findByPk( id );
        if (!radios){
            return res.status(404).json({
                msg: 'No existe un radio con el id ' + id
            })
        }

       // await usuario.destroy ();
       //await radios.update({ fk_status: 6 });
       const estado= radios.estatus;
       
       if ( estado == true)
       {
           //Si el estatus viene con valor 'true' deshabilitada el registro
           await radios.update({ estatus: false })
       }
       else if (estado == false)
       {
        await radios.update({ estatus: true})
       }
       else
       {
           return res.status(400).json({
               
               success: false,
               message: 'El valor del estatus no es valido (true o false)'
           })
       }
        res.json( radios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

//Función para habilitar y deshabilitar el estatus de radios
export const updateEstatusRadios = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idradio no es un valor válido'
      });
    }
    
    const radios = await Radios.findByPk(id);

    
  if (!radios)
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
      radios.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      radios.update({ fk_status: 1})
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
      data: radios,
      success: true,
      message: 'Estatus actualizado'
  })

}
