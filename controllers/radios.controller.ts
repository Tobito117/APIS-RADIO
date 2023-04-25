import { Request, Response } from "express";
import Radios from '../models/radios.model';

//Función para obtener todos los elementos de una tabla
export const getRadios = async( req: Request , res: Response ) => {

    //const radios = await Radios.findAll();
//
    //res.json( radios );
    const radios: any = await Radios.sequelize?.query("SELECT  radios.idradios, radios.serie, radios.logico, radios.inventario_interno, radios.inventario_segpub,radios.fk_propietario, corporaciones.nombreCorporacion,radios.fk_recurso_compra, recursocompras.nombreRecursoCompra,radios.contrato_compra, radios.fk_marca, marcas.nombreMarcas, radios.fecha_actualizacion, radios.fecha_asignacion, radios.observaciones, radios.fecha_recepcion,radios.fk_sue, situacion_ubicacion_estatus.nombreStatus,radios.estatus,radios.createdAt, radios.updatedAt, radios.tipo FROM radios INNER JOIN corporaciones ON radios.fk_propietario = corporaciones.idcorporaciones INNER JOIN recursocompras ON radios.fk_recurso_compra = recursocompras.idrecursoCompras INNER JOIN marcas ON radios.fk_marca = marcas.idmarcas INNER JOIN situacion_ubicacion_estatus ON radios.fk_sue = situacion_ubicacion_estatus.id_sue", {
        replacements: [],
        model: Radios,
        mapToModel: true
    });

    res.json(radios);
}

export const getRadiosFiltrado = async (req:Request, res:Response)=>{
    const radios: any = await Radios.sequelize?.query("SELECT  radios.idradios,"+ 
    "radios.serie,"+ 
    "radios.logico,"+ 
    "radios.inventario_interno," +
    "radios.inventario_segpub,"+
    "radios.fk_propietario, "+
    "corporaciones.nombreCorporacion,"+
    "radios.fk_recurso_compra,"+ 
    "recursocompras.nombreRecursoCompra,"+
    "radios.contrato_compra,"+ 
    "radios.fk_marca,"+
    "marcas.nombreMarcas,"+
    "radios.fecha_actualizacion,"+
    "radios.fecha_asignacion,"+
    "radios.observaciones, "+
    "radios.fecha_recepcion,"+
    "radios.fk_sue, "+
    "situacion_ubicacion_estatus.nombreStatus,"+
    "radios.estatus,"+
    "radios.createdAt,"+
    "radios.updatedAt, "+ 
    "radios.tipo "+
    "FROM radios INNER JOIN corporaciones ON radios.fk_propietario = corporaciones.idcorporaciones "+
    "INNER JOIN recursocompras ON radios.fk_recurso_compra = recursocompras.idrecursoCompras "+
    "INNER JOIN marcas ON radios.fk_marca = marcas.idmarcas "+
    "INNER JOIN situacion_ubicacion_estatus ON radios.fk_sue = situacion_ubicacion_estatus.id_sue "+
    "WHERE radios.estatus = true ", {
        replacements: [], 
        model: Radios,
        mapToModel: true
    });
 
    res.json(radios);
}
//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getRadiosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
   //CONSULTA DONDE SE TRAE LOS ELEMENTOS MOSTRADOS DEL QUERY
    const radios: any = await Radios.sequelize?.query("SELECT  radios.idradios, tipos.nombreTipo, radios.serie, radios.logico, radios.inventario_interno, radios.inventario_segpub, corporaciones.nombreCorporacion, recursocompras.nombreRecursoCompra,radios.contrato_compra, marcas.nombreMarcas, radios.fecha_actualizacion, radios.fecha_asignacion, radios.observaciones, radios.fecha_recepcion, situacion_ubicacion_estatus.nombreStatus,radios.estatus,radios.createdAt, radios.updatedAt FROM radios INNER JOIN corporaciones ON radios.idradios = corporaciones.idcorporaciones INNER JOIN recursocompras ON radios.idradios = recursocompras.idrecursoCompras INNER JOIN marcas ON radios.idradios = marcas.idmarcas  INNER JOIN situacion_ubicacion_estatus ON radios.idradios = situacion_ubicacion_estatus.id_sue where idradios = ?", {
        replacements: [id],
        model: Radios,
        mapToModel: true
    });

        let idradio
   
        for(let i of radios){
    
          idradio = i.dataValues.idradios
          console.log(idradio)
        }
        

    if(idradio ){
        res.json({
            Datos: radios,
            success: true,
            messagge: "Datos Obtenidos Correctamente" 
        });
    }else{
        res.status(404).json({
            msg: "No existe Radio en la base de datos"
        });
    } 


}

//Función para agregar un elemento a la tabla de nuestra base de datos radios
export const postRadios = async( req: Request , res: Response ) => {

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

        const radios = await Radios.create(body);
        
        await radios.save();

        res.json(radios);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos radio
export const putRadios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const radios = await Radios.findByPk( id );
        if (!radios){
            return res.status(404).json({
                msg: 'No existe un radio con el id ' + id
            })
        }

        await radios.update ( body );
        res.json( radios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos radios (Solo se dehabilita)
export const deleteRadios = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const radios : any = await Radios.findByPk( id );
        if (!radios){
            return res.status(404).json({
                msg: 'No existe un radio con el id ' + id
            })
        }

       // await usuario.destroy ();
       //await radios.update({ fk_status: 6 });
       const estado= radios.estatus;
       
       if ( estado == true)
       {
           //Si el estatus viene con valor 'true' deshabilitada el registro
           await radios.update({ estatus: false, fecha_baja:new Date() })
       }
       else if (estado == false)
       {
        await radios.update({ estatus: true, fecha_baja:new Date()})
       }
       else
       {
           return res.status(400).json({
        
               success: false,
               message: 'El valor del estatus no es valido (true o false)'
           })
       }
        res.json( radios );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

//Función para habilitar y deshabilitar el estatus de radios
export const updateEstatusRadios = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idradio no es un valor válido'
      });
    }
    
    const radios = await Radios.findByPk(id);

    
  if (!radios)
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
      radios.update({ fk_status: 6 })
  }
  else if (fk_status == 'false')
  {
      radios.update({ fk_status: 1})
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
      data: radios,
      success: true,
      message: 'Estatus actualizado'
  })

}
