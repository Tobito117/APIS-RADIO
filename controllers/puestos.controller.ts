import { Request, Response } from "express";
import Puestos from '../models/puestos.model';

//Función para obtener todos los elementos de una tabla
export const getPuestos = async( req: Request , res: Response ) => {

     //CONSULTA DONDE SE TRAE LOS ELEMENTOS MOSTRADOS DEL QUERY
     const puestos: any = await Puestos.sequelize?.query("SELECT puestos.idpuesto, puestos.nombre, corporaciones.nombreCorporacion, puestos.estatus, puestos.createdAt, puestos.updatedAt FROM puestos INNER JOIN corporaciones ON puestos.idpuesto = corporaciones.idcorporaciones", {
        replacements: [],
        model: Puestos,
        mapToModel: true
    });

    res.json( puestos);
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getPuestosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
        //CONSULTA DONDE SE TRAE LOS ELEMENTOS MOSTRADOS DEL QUERY
        const puestos: any = await Puestos.sequelize?.query("SELECT puestos.idpuesto, puestos.nombre, corporaciones.nombreCorporacion, puestos.estatus FROM puestos INNER JOIN corporaciones ON puestos.idpuesto = corporaciones.idcorporaciones where idpuesto = ?", {
            replacements: [ id ],
            model: Puestos,
            mapToModel: true
        });

        let idp

        for(let i of puestos){
    
          idp = i.dataValues.idpuesto
    
        }
        console.log(idp);

    if(idp ){
        res.json({
            Datos: puestos,
            success: true,
            messagge: "Datos Obtenidos Correctamente" 
        });
    }else{
        res.status(404).json({
            msg: "No existe puesto en la base de datos"
        });
    } 

}

//Función para agregar un elemento a la tabla de nuestra base de datos puestos
export const postPuestos = async( req: Request , res: Response ) => {

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

        const puestos = await Puestos.create(body);
        await puestos.save();

        res.json({
            Datos: puestos,
            success: true,
            messagge: "Datos Obtenidos Correctamente" 
        });
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos puestos
export const putPuestos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const puestos = await Puestos.findByPk( id );
        if (!puestos){
            return res.status(404).json({
                msg: 'No existe un puesto con el id ' + id
            })
        }

        await puestos.update ( body );
        res.json( puestos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos puestos (Solo se dehabilita)
export const deletePuestos = async( req: Request , res: Response ) => {

    const { id } = req.params;
    
    try {

        const puestos : any = await Puestos.findByPk( id );
        if (!puestos){
            return res.status(404).json({
                msg: 'No existe un puesto con el id ' + id
            })
        }

       // await usuario.destroy ();
       //await puestos.update({ fk_status: 6 });
       const estado= puestos.estatus;
       
       if ( estado == true)
       {
           //Si el estatus viene con valor 'true' deshabilitada el registro
           await puestos.update({ estatus: false })
       }
       else if (estado == false)
       {
        await puestos.update({ estatus: true})
       }
       else
       {
           return res.status(400).json({
               
               success: false,
               message: 'El valor del estatus no es valido (true o false)'
           })
       }
        res.json( puestos );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
}

//Función para habilitar y deshabilitar el estatus de puestos
export const updateEstatusPuestos = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El id no es un valor válido'
      });
    }
    
    const puestos = await Puestos.findByPk(id);

    
  if (!puestos)
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
      puestos.update({ estatus: false })
  }
  else if (fk_status == 'false')
  {
      puestos.update({ estatus: true})
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
      data: puestos,
      success: true,
      message: 'Estatus actualizado'
  })

}




