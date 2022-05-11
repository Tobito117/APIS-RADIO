import { Request, Response } from "express";
import Asig_Accesorios from '../models/asig_accesorios.model';

//Función para obtener todos los elementos de una tabla
export const getAsig_Accesorios = async( req: Request , res: Response ) => {

    const asig_accesorios = await Asig_Accesorios.findAll();

    res.json({ asig_accesorios });
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getAsig_AccesoriosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const asig_accesorios = await Asig_Accesorios.findByPk( id );

    if(asig_accesorios){
        res.json(asig_accesorios)
    }else{
        res.status(404).json({
            msg: "No existe asig_accesorio en la base de datos"
        });
    } 

}

// Función para agregar un elemento a la tabla de nuestra base de datos asig_accesorios
export const postAsig_Accesorios = async( req: Request , res: Response ) => {

    const { body } = req;

    //era un metodo de sequelize para buscar el correo y verificar que no se registre dos veces el mismo correo
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

        const asig_accesorios = await Asig_Accesorios.create(body);
        await asig_accesorios.save();

        res.json(asig_accesorios);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos accesorios
export const putAsig_Accesorios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const asig_accesorios = await Asig_Accesorios.findByPk( id );
        if (!asig_accesorios){
            return res.status(404).json({
                msg: 'No existe un asi_accesorio con el id ' + id
            })
        }

        await asig_accesorios.update ( body );
        res.json( asig_accesorios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos asig_accesorios
export const deleteAsig_Accesorios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const asig_accesorios = await Asig_Accesorios.findByPk( id );
        if (!asig_accesorios){
            return res.status(404).json({
                msg: 'No existe un asig_accesorio con el id ' + id
            })
        }

       // await usuario.destroy ();
       await asig_accesorios.update({ fk_status: 6 });
        res.json( asig_accesorios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

//Función para habilitar y deshabilitar el estatus de Asig_accesorios 
export const updateEstatusAsig_Accesorios = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idasi_accesorios no es un valor válido'
      });
    }
    
    const asig_accesorios = await Asig_Accesorios.findByPk(id);

    
  if (!asig_accesorios)
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
      asig_accesorios.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      asig_accesorios.update({ fk_status: 1})
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
      data: asig_accesorios,
      success: true,
      message: 'Estatus actualizado'
  })

}
