import { Request, Response } from "express";
import Tipos from '../models/tipos.model';

//Función para obtener todos los elementos de una tabla
export const getTipos = async( req: Request , res: Response ) => {

    const tipos = await Tipos.findAll();

    res.json( tipos);
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getTiposById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const tipos = await Tipos.findByPk( id );

    if(tipos){
        res.json(tipos)
    }else{
        res.status(404).json({
            msg: "No existe IdTipo en la base de datos"
        });
    } 
}

//Función para agregar un elemento a la tabla de nuestra base de datos accesorios
export const postTipos = async( req: Request , res: Response ) => {

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

        const tipos = await Tipos.create(body);
        await tipos.save();

        res.json(tipos);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos Tipos
export const putTipos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const tipos = await Tipos.findByPk( id );
        if (!tipos){
            return res.status(404).json({
                msg: 'No existe un tipo con el id ' + id
            })
        }

        await tipos.update ( body );
        res.json( tipos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos tipos (Solo se dehabilita)
export const deleteTipos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const tipos : any = await Tipos.findByPk( id );
        if (!tipos){
            return res.status(404).json({
                msg: 'No existe un tipo con el id ' + id
            })
        }

       // await usuario.destroy ();
       //await tipos.update({ fk_status: 6 });
       const estado= tipos.estatus;
       
       if ( estado == true)
       {
           //Si el estatus viene con valor 'true' deshabilitada el registro
           await tipos.update({ estatus: false })
       }
       else if (estado == false)
       {
        await tipos.update({ estatus: true})
       }
       else
       {
           return res.status(400).json({
               
               success: false,
               message: 'El valor del estatus no es valido (true o false)'
           })
       }
        res.json( tipos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

//Función para habilitar y deshabilitar el estatus de Tipos
export const updateEstatusPuestos = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idTipos no es un valor válido'
      });
    }
    
    const tipos = await Tipos.findByPk(id);

    
  if (!tipos)
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
      tipos.update({ estatus: false })
  }
  else if (fk_status == 'false')
  {
      tipos.update({ estatus: true})
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
      data: tipos,
      success: true,
      message: 'Estatus actualizado'
  })

}




