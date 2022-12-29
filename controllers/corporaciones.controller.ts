import { Request, Response } from "express";
import Corporaciones from '../models/corporaciones.model';

//Función para obtener todos los elementos de una tabla
export const getCorporaciones = async( req: Request , res: Response ) => {

    const corporaciones = await Corporaciones.findAll();

    res.json( corporaciones );
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getCorporacionesById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const corporaciones = await Corporaciones.findByPk( id );

    if(corporaciones){
        res.json(corporaciones)
    }else{
        res.status(404).json({
            msg: "No existe corporacion en la base de datos"
        });
    } 

}

// Función para agregar un elemento a la tabla de nuestra base de datos corporaciones
export const postCorporaciones = async( req: Request , res: Response ) => {

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

        const corporaciones = await Corporaciones.create(body);
        await corporaciones.save();

        res.json(corporaciones);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos corporaciones
export const putCorporaciones = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const corporaciones = await Corporaciones.findByPk( id );
        if (!corporaciones){
            return res.status(404).json({
                msg: 'No existe una corporacion con el id ' + id
            })
        }

        await corporaciones.update ( body );
        res.json( corporaciones );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos corporaciones (Solo se dehabilita)
export const deleteCorporaciones = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const corporaciones: any = await Corporaciones.findByPk( id );
        if (!corporaciones){
            return res.status(404).json({
                msg: 'No existe una corporacion con el id ' + id
            })
        }

       // await usuario.destroy ();
       //await corporaciones.update({ fk_status: 6 });
       const estado= corporaciones.estatus;
       
       if ( estado == true)
       {
           //Si el estatus viene con valor 'true' deshabilitada el registro
           await corporaciones.update({ estatus: false })
       }
       else if (estado == false)
       {
        await corporaciones.update({ estatus: true})
       }
       else
       {
           return res.status(400).json({
               
               success: false,
               message: 'El valor del estatus no es valido (true o false)'
           })
       }
        res.json( corporaciones );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

//Función para habilitar y deshabilitar el estatus de corporaciones
export const updateEstatusCorporaciones = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idCorporaciones no es un valor válido'
      });
    }
    
    const corporaciones = await Corporaciones.findByPk(id);

    
  if (!corporaciones)
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
      corporaciones.update({ estatus: false })
  }
  else if (fk_status == 'false')
  {
      corporaciones.update({ estatus: true })
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
      data: corporaciones,
      success: true,
      message: 'Estatus actualizado'
  })

}
