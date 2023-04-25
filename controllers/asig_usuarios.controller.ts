import { Request, Response } from "express";
import Asig_Usuarios from "../models/asig_usuario_radio.model";
import Radios from "../models/radios.model";
//import Asig_Usuarios from '../models/asig_usuario_radio.model';

//Función para obtener todos los elementos de una tabla
export const getAsig_Usuarios = async( req: Request , res: Response ) => {

   // const asig_usuarios = await Asig_Usuarios.findAll();
   const asig_usuarios: any = await Asig_Usuarios.sequelize?.query("SELECT asignacion_usuario_radios.asignacion_usuario_radiocol, asignacion_usuario_radios.usuarios_idusuarios, usuarios.nombre,usuarios.clave_elector, asignacion_usuario_radios.rfsi, asignacion_usuario_radios.radios_idradios,radios.serie,radios.serie, asignacion_usuario_radios.estatus, asignacion_usuario_radios.createdAt,asignacion_usuario_radios.updatedAt  FROM asignacion_usuario_radios INNER JOIN usuarios ON asignacion_usuario_radios.usuarios_idusuarios = usuarios.idusuarios INNER JOIN radios ON asignacion_usuario_radios.radios_idradios = radios.idradios", {
    replacements: [],
    model: Asig_Usuarios,
    mapToModel: true
});

    res.json(asig_usuarios );
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getAsig_UsuariosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const asig_usuarios = await Asig_Usuarios.findByPk( id );

    if(asig_usuarios){
        res.json(asig_usuarios)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

// Función para agregar un elemento a la tabla de nuestra base de datos asig_usuarios
export const postAsig_Usuarios = async( req: Request , res: Response ) => {

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

        const asig_usuarios = await Asig_Usuarios.create(body);
        await asig_usuarios.save();

        res.json(asig_usuarios);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos asig_usuarios
export const putAsig_Usuarios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const asig_usuarios = await Asig_Usuarios.findByPk( id );
        if (!asig_usuarios){
            return res.status(404).json({
                msg: 'No existe un asig_usuarios con el id ' + id
            })
        }

        await asig_usuarios.update ( body );
        res.json( asig_usuarios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos asig_usuarios (Solo se dehabilita)
export const deleteAsig_Usuarios = async( req: Request , res: Response ) => {

    const { id } = req.params;

    try {

        const asignacion : any= await Asig_Usuarios.findByPk( id );
        if (!asignacion){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();

       //const UsuarioAutenticado = req.user;
         
       const estado= asignacion.estatus;
        //console.log('dfwwfeffg',estado);
        
       //await usuario.update({ estatus: false });

       if ( estado == true)
       {
           //Si el estatus viene con valor 'true' deshabilitada el registro
           await asignacion.update({ estatus: false })
       }
       else if (estado == false)
       {
        await asignacion.update({ estatus: true})
       }
       else
       {
           return res.status(400).json({
               
               success: false,
               message: 'El valor del estatus no es valido (true o false)'
           })
       }
        res.json( asignacion);
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

}

export const actualizarSueRadio =async (req:Request, res: Response) => {
    const { id } = req.params;
    try {

        const sueRadio : any = await Radios.findByPk(id);
       await sueRadio.update({ fk_sue: 7, fecha_asignacion:new Date() })
        res.json( sueRadio);
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
}


//Función para habilitar y deshabilitar el estatus de asig_usuarios
export const updateEstatusAsig_Usuarios = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idAsignacioUsuarios no es un valor válido'
      });
    }
    
    const asig_usuarios = await Asig_Usuarios.findByPk(id);

    
  if (!asig_usuarios)
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
      asig_usuarios.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      asig_usuarios.update({ fk_status: 1})
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
      data: asig_usuarios,
      success: true,
      message: 'Estatus actualizado'
  })

}
