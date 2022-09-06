import { Request, Response } from "express";
import Vehiculos from '../models/vehiculos.model';

//Función para obtener todos los elementos de una tabla
export const getVehiculos = async( req: Request , res: Response ) => {

    // const vehiculos: any = await Vehiculos.findAll();
        //CONSULTA DONDE SE TRAE LOS ELEMENTOS MOSTRADOS DEL QUERY
        const vehiculos: any = await Vehiculos.sequelize?.query("SELECT vehiculos.idvehiculo, vehiculos.nombreVehiculo, vehiculos.placa, vehiculos.color, vehiculos.anio, marcas.nombreMarcas, vehiculos.estatus FROM vehiculos INNER JOIN marcas ON vehiculos.idvehiculo = marcas.idmarcas", {
            replacements: [],
            model: Vehiculos,
            mapToModel: true
        });
  

    res.json(
        vehiculos
    );

    console.log(vehiculos);

    
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getVehiculosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    // const vehiculos = await Vehiculos.findByPk( id );
    const vehiculos: any = await Vehiculos.sequelize?.query("SELECT vehiculos.idvehiculo, vehiculos.nombreVehiculo, vehiculos.placa, vehiculos.color, vehiculos.anio, marcas.nombreMarcas, vehiculos.estatus FROM vehiculos INNER JOIN marcas ON vehiculos.idvehiculo = marcas.idmarcas WHERE idvehiculo = ?", {
        replacements: [ id ],
        model: Vehiculos,
        mapToModel: true
    });

    // console.log(vehiculos)
    let idvehiculo
   
    for(let i of vehiculos){

      idvehiculo = i.dataValues.idvehiculo

    }
    console.log(idvehiculo);

if(idvehiculo ){
    res.json({
        Datos: vehiculos,
        success: true,
        messagge: "Datos Obtenidos Correctamente" 
    });
}else{
    res.status(404).json({
        msg: "No existe puesto en la base de datos"
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
      vehiculos.update({ estatus: false })
  }
  else if (fk_status == 'false')
  {
      vehiculos.update({ estatus: true})
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

