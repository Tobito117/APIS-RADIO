import { Request, Response } from "express";
import Vehiculos from '../models/vehiculos.model';

//Función para obtener todos los elementos de una tabla
export const getVehiculos = async( req: Request , res: Response ) => {

    const vehiculos = await Vehiculos.findAll();

    res.json( vehiculos );
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getVehiculosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const vehiculos = await Vehiculos.findByPk( id );

    if(vehiculos){
        res.json(vehiculos)
    }else{
        res.status(404).json({
            msg: "No existe Vehiculo en la base de datos"
        });
    } 

}

//Función para agregar un elemento a la tabla de nuestra base de datos Vehiculos
export const postVehiculos = async( req: Request , res: Response ) => {

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

        const vehiculos = await Vehiculos.create(body);
        await vehiculos.save();

        res.json(vehiculos);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos Vehiculo
export const putVehiculos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const vehiculos = await Vehiculos.findByPk( id );
        if (!vehiculos){
            return res.status(404).json({
                msg: 'No existe un Vehiculo con el id ' + id
            })
        }

        await vehiculos.update ( body );
        res.json( vehiculos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos Vehiculos (Solo se dehabilita)
export const deleteVehiculos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const vehiculos = await Vehiculos.findByPk( id );
        if (!vehiculos){
            return res.status(404).json({
                msg: 'No existe un vehiculo con el id ' + id
            })
        }

       // await usuario.destroy ();
       await vehiculos.update({ fk_status: 6 });
        res.json( vehiculos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
}

//Función para habilitar y deshabilitar el estatus de Vehiculo 
export const updateEstatusVehiculos = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idVehiculos no es un valor válido'
      });
    }
    
    const vehiculos = await Vehiculos.findByPk(id);

    
  if (!vehiculos)
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
      vehiculos.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      vehiculos.update({ fk_status: 1})
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
      data: vehiculos,
      success: true,
      message: 'Estatus actualizado'
  })

}

