import { Request, Response } from "express";
import Servicios from '../models/servicios.model';

//Función para obtener todos los elementos de una tabla
export const getServicios = async( req: Request , res: Response ) => {

    const servicios = await Servicios.findAll();

    res.json({ servicios });
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getServiciosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const servicios = await Servicios.findByPk( id );

    if(servicios){
        res.json(servicios)
    }else{
        res.status(404).json({
            msg: "No existe servicio en la base de datos"
        });
    } 

}

//Función para agregar un elemento a la tabla de nuestra base de datos recursos-compras
export const postServicios = async( req: Request , res: Response ) => {

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

        const servicios = await Servicios.create(body);
        await servicios.save();

        res.json(servicios);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos accesorios
export const putServicios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const servicios = await Servicios.findByPk( id );
        if (!servicios){
            return res.status(404).json({
                msg: 'No existe un servicio con el id ' + id
            })
        }

        await servicios.update ( body );
        res.json( servicios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos recursos-compras (Solo se dehabilita)
export const deleteServicios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const servicios = await Servicios.findByPk( id );
        if (!servicios){
            return res.status(404).json({
                msg: 'No existe un servicio con el id ' + id
            })
        }

       // await usuario.destroy (); elimina el elemento totalmente 
       await servicios.update({ fk_status: 6 });
        res.json( servicios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

//Función para habilitar y deshabilitar el estatus de servicios
export const updateEstatusServicios = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idServicios no es un valor válido'
      });
    }
    
    const servicios = await Servicios.findByPk(id);

    
  if (!servicios)
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
      servicios.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      servicios.update({ fk_status: 1})
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
      data: servicios,
      success: true,
      message: 'Estatus actualizado'
  })

}







