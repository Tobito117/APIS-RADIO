import { Request, Response } from "express";
import HojasServicios from '../models/hojas-servicios.model';

//Función para obtener todos los elementos de una tabla
export const getHojasServicios = async( req: Request , res: Response ) => {

//    const hojasservicios = await HojasServicios.findAll();
//    res.json( hojasservicios );
    const hojasservicios: any = await HojasServicios.sequelize?.query(
        "SELECT hojaservicios.idhojaservicios, hojaservicios.fecha_servicio, " + 
            "asignaciones.idasignacion, " +
            "CONCAT (usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo, " +
            "radios.idradios, radios.serie, radios.tipo, radios.inventario_interno, radios.inventario_segpub, " +
            "hojaservicios.fk_idservicios, " + 
            "servicios.idservicios, servicios.nombreServicios, " +
            "hojaservicios.fk_idaccesorios, " +
            "accesorios.idaccesorios, accesorios.inventario_interno, accesorios.inventario_segpub, " +
            "hojaservicios.descripcion, hojaservicios.entrego_equipo, hojaservicios.fecha_entrega, " +
            "hojaservicios.fk_supervisortec, " +
            "supervisortec.idusuarios, CONCAT (supervisortec.nombre, ' ', supervisortec.apellido_pat, ' ', supervisortec.apellido_mat ) AS nombreSupervisorTec, " +
            "hojaservicios.usuario_servicio, hojaservicios.usuario_entrega, " +
            "hojaservicios.fk_tecnico_entrega, " +
            "tecnico_entrega.idusuarios, CONCAT (tecnico_entrega.nombre, ' ', tecnico_entrega.apellido_pat, ' ', tecnico_entrega.apellido_mat ) AS nombreTecEntrega, " +
            "hojaservicios.estatus, hojaservicios.createdAt, hojaservicios.updatedAt " +
        "FROM hojaservicios " + 
        "INNER JOIN asignaciones ON hojaservicios.fk_idasignacion_ur = asignaciones.idasignacion " + 
        "INNER JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios " +
        "INNER JOIN usuarios AS supervisortec ON hojaservicios.fk_supervisortec = supervisortec.idusuarios " + 
        "INNER JOIN usuarios AS tecnico_entrega ON hojaservicios.fk_tecnico_entrega = tecnico_entrega.idusuarios " + 
        "INNER JOIN servicios ON hojaservicios.fk_idservicios = servicios.idservicios " + 
        "INNER JOIN radios ON asignaciones.radios_idradios = radios.idradios " + 
        "INNER JOIN accesorios ON hojaservicios.fk_idaccesorios = accesorios.idaccesorios", {
            replacements: [],
            model: HojasServicios,
            mapToModel: true
    });

    res.json(hojasservicios);
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getHojasServiciosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const hojasservicios = await HojasServicios.findByPk( id );

    if(hojasservicios){
        res.json(hojasservicios)
    }else{
        res.status(404).json({
            msg: "No existe hoja-servicio en la base de datos"
        });
    }
}

//Función para agregar un elemento a la tabla de nuestra base de datos hoja-servicio
export const postHojasServicios = async( req: Request , res: Response ) => {

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

        const hojasservicios = await HojasServicios.create(body);
        await hojasservicios.save();

        res.json(hojasservicios);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos hoja-servicios
export const putHojasServicios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const hojasservicios = await HojasServicios.findByPk( id );
        if (!hojasservicios){
            return res.status(404).json({
                msg: 'No existe una hoja-servicios con el id ' + id
            })
        }

        await hojasservicios.update ( body );
        res.json( hojasservicios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos asig_usuarios (Solo se dehabilita)
export const deleteHojasServicios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const hojasservicios = await HojasServicios.findByPk( id );
        if (!hojasservicios){
            return res.status(404).json({
                msg: 'No existe una hoja-servicios con el id ' + id
            })
        }

       // await usuario.destroy (); //se elimina el elemento total de la base de datos
       await hojasservicios.update({ fk_status: 6 });
        res.json( hojasservicios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

//Función para habilitar y deshabilitar el estatus de hojas-servicios
export const updateEstatusHojasServicios = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idHojasServicios no es un valor válido'
      });
    }
    
    const hojasservicios = await HojasServicios.findByPk(id);

    
  if (!hojasservicios)
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
      hojasservicios.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      hojasservicios.update({ fk_status: 1})
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
      data: hojasservicios,
      success: true,
      message: 'Estatus actualizado'
  })

}
