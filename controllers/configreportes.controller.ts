import { Request, Response } from "express";
import ConfigReportes from '../models/configreportes.model';
import Usuarios from "../models/usuarios.model";

//Función para obtener todos los elementos de una tabla
export const getConfigReportes = async( req: Request , res: Response ) => {

    const configreportes: any = await ConfigReportes.sequelize?.query(
        `   SELECT configreportes.idconfigReportes, 
	        configreportes.encabezado_carta, 
	        configreportes.articulo1, 
	        configreportes.articulo2, 
	        configreportes.articulo3, 
	        configreportes.articulo4, 
	        configreportes.articulo5, 
	        configreportes.articulo6, 
	        configreportes.articulo7, 
	        configreportes.logoc4, 
	        configreportes.logo_ssypc,
	        configreportes.fk_logo_c4,
	        configreportes.fk_logo_ssypc, 
	        configreportes.fk_revisor, 
	        CONCAT(revisores.nombre, ' ' , revisores.apellido_pat, ' ' , revisores.apellido_mat) AS nombre_revisor,
	        revisores.nombre, 
	        revisores.apellido_pat, 
	        revisores.apellido_mat, 
	        revisores.titulo as titulorev,
	        configreportes.fk_responsable_entrega, 
	        CONCAT(responsables.nombre, ' ' , responsables.apellido_pat, ' ' , responsables.apellido_mat) AS nombre_responsable,
	        responsables.idusuarios AS idRes, 
	        responsables.nombre AS nombreRes, 
	        responsables.apellido_pat AS appatRes, 
	        responsables.apellido_mat AS apmatRes, 
	        responsables.titulo as titulores,
	        configreportes.ccp_carta, 
	        configreportes.fecha_inicial, 
	        configreportes.fecha_final, 
	        configreportes.estatus, 
	        configreportes.createdAt, 
	        configreportes.updatedAt 
        FROM configreportes
        LEFT JOIN usuarios AS revisores ON configreportes.fk_revisor = revisores.idusuarios 
        LEFT JOIN usuarios AS responsables ON configreportes.fk_responsable_entrega = responsables.idusuarios
        ORDER BY configreportes.idconfigReportes DESC `,
    { 
        replacements: [],
        model: ConfigReportes,
        mapToModel: true
    });

    res.json( configreportes );
}
export const getConfigReportesByStatus = async( req: Request , res: Response ) => {

    const configreportes: any = await ConfigReportes.sequelize?.query(
        `SELECT configreportes.idconfigReportes, 
        configreportes.encabezado_carta, 
        configreportes.articulo1,
        configreportes.articulo2,
        configreportes.articulo3,
        configreportes.articulo4,
        configreportes.articulo5,
        configreportes.articulo6,
        configreportes.articulo7,
        configreportes.logoc4 ,
        configreportes.fk_logo_c4,
        configreportes.logo_ssypc,
        configreportes.fk_logo_ssypc,
        configreportes.fk_revisor,
        CONCAT(revisores.nombre, ' ' , revisores.apellido_pat, ' ' , revisores.apellido_mat) AS nombre_revisor,
        revisores.nombre,
        revisores.apellido_pat,
        revisores.apellido_mat,
        revisores.titulo as titulorev,
        puestosRevisores.nombre AS nombrePuestoRevisor,
        corporacionesRevisores.nombreCorporacion AS corporacionRevisor,
        configreportes.fk_responsable_entrega,
        CONCAT(responsables.nombre, ' ' , responsables.apellido_pat, ' ' , responsables.apellido_mat) AS nombre_responsable,
        responsables.idusuarios AS idRes,
        responsables.nombre AS nombreRes,
        responsables.apellido_pat AS appatRes,
        responsables.apellido_mat AS apmatRes,
        responsables.titulo as titulores,
        puestosResponsables.nombre AS nombrePuestoRes,
        corporacionesResponsables.nombreCorporacion AS corporacionResponsable,
        configreportes.ccp_carta,
        configreportes.fecha_inicial,
        configreportes.fecha_final,
        configreportes.estatus,
        configreportes.createdAt,
        configreportes.updatedAt
    FROM configreportes
    LEFT JOIN usuarios AS revisores ON configreportes.fk_revisor = revisores.idusuarios
    INNER JOIN puestos AS puestosRevisores ON revisores.fk_puesto = puestosRevisores.idpuesto
    INNER JOIN corporaciones AS corporacionesRevisores ON puestosRevisores.fk_corporacion = corporacionesRevisores.idcorporaciones
    LEFT JOIN usuarios AS responsables ON configreportes.fk_responsable_entrega = responsables.idusuarios
    INNER JOIN puestos AS puestosResponsables ON responsables.fk_puesto = puestosResponsables.idpuesto
    INNER JOIN corporaciones AS corporacionesResponsables ON puestosResponsables.fk_corporacion = corporacionesResponsables.idcorporaciones
    WHERE configreportes.estatus = true
    ORDER BY configreportes.idconfigReportes DESC`
    ,{ 
        replacements: [],
        model: ConfigReportes,
        mapToModel: true
    });

    res.json( configreportes );
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getConfigReportesById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const configreportes = await ConfigReportes.findByPk( id );

    if(configreportes){
        res.json(configreportes)
    }else{
        res.status(404).json({
            msg: "No existe configreportes en la base de datos"
        });
    } 

}

// Función para agregar un elemento a la tabla de nuestra base de datos configreportes
export const postConfigReportes = async( req: Request , res: Response ) => {

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

        const configreportes = await ConfigReportes.create(body);
        await configreportes.save();

        res.json(configreportes);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos configreportes
export const putConfigReportes = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const configreportes = await ConfigReportes.findByPk( id );
        if (!configreportes){
            return res.status(404).json({
                msg: 'No existe una configreportes con el id ' + id
            })
        }

        await configreportes.update ( body );
        res.json( configreportes );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos configreportes (Solo se dehabilita)
export const deleteConfigReportes = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const configreportes: any = await ConfigReportes.findByPk( id );
        if (!configreportes){
            return res.status(404).json({
                msg: 'No existe una configreportes con el id ' + id
            })
        }

        const estado = configreportes.estatus;

        if ( estado == true )
        {
            await configreportes.update({ estatus: false })
        }
        else if ( estado == false )
        {
            // await usuario.destroy (); //elimina elemento verdadero de la base de datos
            await configreportes.update({ estatus: true });
        }
        else{
            return res.status(400).json({
               
                success: false,
                message: 'El valor del estatus no es valido (true o false)'
            })
        }
        res.json( configreportes );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

//Función para habilitar y deshabilitar el estatus de configreportes
export const updateEstatusConfigReportes = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idConfigReportes no es un valor válido'
      });
    }
    
    const configreportes = await ConfigReportes.findByPk(id);

    
  if (!configreportes)
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
      configreportes.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      configreportes.update({ fk_status: 1})
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
      data: configreportes,
      success: true,
      message: 'Estatus actualizado'
  })

}
