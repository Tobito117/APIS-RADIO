import { Request, Response } from "express";
import HojasServicios from '../models/hojas-servicios.model';

//Función para obtener todos los elementos de una tabla
export const getHojasServicios = async( req: Request , res: Response ) => {

//    const hojasservicios = await HojasServicios.findAll();
//    res.json( hojasservicios );
    const hojasservicios: any = await HojasServicios.sequelize?.query(
        `SELECT hojaservicios.idhojaservicios, hojaservicios.folio, hojaservicios.fecha_servicio, hojaservicios.servicios, hojaservicios.fk_idasignacion_ur,  
            asignaciones.idasignacion, 
            CONCAT (usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo, 
            usuarios.nombre, 
            usuarios.apellido_pat,
            usuarios.apellido_mat,
            corporaciones.nombreCorporacion,
            puestos.nombre AS nombrePuesto,
            radios.idradios,  
            radios.serie, 
            radios.tipo, 
            radios.inventario_interno, 
            radios.inventario_segpub,
            asignaciones.rfsi,
            baterias.idaccesorios AS idbateria, 
            baterias.serie_bateria, 
            baterias.inventario_segpub AS inventario_sp_bateria,
            cargadores.idaccesorios AS idcargador, 
            cargadores.serie_cargador,
            baterias.inventario_segpub AS inventario_segpub_cargador,
            gps.idaccesorios AS idgps,
            gps.serie_gps,
            gps.inventario_segpub AS inventario_segpub_gps, 
            vehiculos.unidad,
            zonasregiones.nombreZonasRegiones,
            hojaservicios.descripcion,
            hojaservicios.foto1,
            hojaservicios.fk_foto1,
            hojaservicios.foto2,
            hojaservicios.fk_foto2,
            hojaservicios.folio, 
            hojaservicios.entrego_equipo, 
            hojaservicios.fecha_entrega, 
            hojaservicios.fk_supervisortec, 
            supervisortec.idusuarios AS id_supervisortec, 
            supervisortec.idusuarios AS idSup, supervisortec.nombre AS nombreSup, supervisortec.apellido_pat AS appatSup, supervisortec.apellido_mat AS apmatSup,
            CONCAT (supervisortec.nombre, ' ', supervisortec.apellido_pat, ' ', supervisortec.apellido_mat ) AS nombreSupervisorTec,
            hojaservicios.usuario_servicio, 
            hojaservicios.usuario_entrega, 
            hojaservicios.fk_tecnico_entrega, 
            tecnicos.idusuarios AS id_tecnico_entrega,
            tecnicos.idusuarios AS idRes, tecnicos.nombre AS nombreRes, tecnicos.apellido_pat AS appatRes, tecnicos.apellido_mat AS apmatRes, 
            CONCAT (tecnicos.nombre, ' ', tecnicos.apellido_pat, ' ', tecnicos.apellido_mat ) AS nombreTecEntrega, 
            hojaservicios.estatus, 
            hojaservicios.createdAt, 
            hojaservicios.updatedAt 
        FROM hojaservicios 
            LEFT JOIN asignaciones ON hojaservicios.fk_idasignacion_ur = asignaciones.idasignacion 
            LEFT JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
            LEFT JOIN usuarios AS supervisortec ON hojaservicios.fk_supervisortec = supervisortec.idusuarios  
            LEFT JOIN usuarios AS tecnicos ON hojaservicios.fk_tecnico_entrega = tecnicos.idusuarios 
            LEFT JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
            LEFT JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
            LEFT JOIN radios ON asignaciones.radios_idradios = radios.idradios 
            LEFT JOIN accesorios AS baterias ON asignaciones.fk_accesorio_bateria = baterias.idaccesorios
            LEFT JOIN accesorios AS cargadores ON asignaciones.fk_accesorio_cargador = cargadores.idaccesorios
            LEFT JOIN accesorios AS gps ON asignaciones.fk_accesorio_gps = gps.idaccesorios
            LEFT JOIN vehiculos ON asignaciones.fk_vehiculo = vehiculos.idvehiculo
            LEFT JOIN zonasregiones ON vehiculos.fk_zonaregion = zonasregiones.idzonasregiones
            ORDER BY hojaservicios.idhojaservicios DESC`
        , {
            replacements: [],
            model: HojasServicios,
            mapToModel: true
    });

    res.json(hojasservicios);
}
export const getHojasServiciosUltimo = async( req: Request , res: Response ) => {

//    const hojasservicios = await HojasServicios.findAll();
//    res.json( hojasservicios );
    //const hojasservicios: any = await HojasServicios.sequelize?.query(
    //    `SELECT folio, createdAt FROM hojaservicios ORDER BY idhojaservicios DESC LIMIT 1`
    //    , {
    //        replacements: [],
    //        model: HojasServicios,
    //        mapToModel: true
    //});
    const hojasservicios = await HojasServicios.findOne({
        attributes: ['folio', 'createdAt'],
        order: [
            // Will escape title and validate DESC against a list of valid direction parameters
            ['idhojaservicios', 'DESC'],
            ]
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

    // const { id } = req.params;
    
    // try {

    //     const hojasservicios = await HojasServicios.findByPk( id );
    //     if (!hojasservicios){
    //         return res.status(404).json({
    //             msg: 'No existe una hoja-servicios con el id ' + id
    //         })
    //     }

    //    // await usuario.destroy (); //se elimina el elemento total de la base de datos
    //    await hojasservicios.update({ fk_status: 6 });
    //     res.json( hojasservicios );
        
    // } catch (error) {

    //     console.log(error);
    //     res.status(500).json({
    //         msg: 'Hable con el Administrador'
    //     })
        
    // }
    const { id } = req.params;
    
    try {

        const hojasservicios : any= await HojasServicios.findByPk( id );
        if (!hojasservicios){
            return res.status(404).json({
                msg: 'No existe un tipo con el id ' + id
            })
        }

       // await usuario.destroy ();
       //await tipos.update({ fk_status: 6 });
       const estado= hojasservicios.estatus;
       // await usuario.destroy ();
       //await zonasregiones.update({estatus: 6 });
       if ( estado == true)
       {
           //Si el estatus viene con valor 'true' deshabilitada el registro
           await hojasservicios.update({ estatus: false })
       }
       else if (estado == false)
       {
        await hojasservicios.update({ estatus: true})
       }
       else
       {
           return res.status(400).json({
               success: false,
               message: 'El valor del estatus no es valido (true o false)'
           })
       }
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
