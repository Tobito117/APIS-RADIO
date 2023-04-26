import { Request, Response } from "express";
import ConfigReportes from '../models/configreportes.model';

//Función para obtener todos los elementos de una tabla
export const getConfigReportes = async( req: Request , res: Response ) => {

    const configreportes = await ConfigReportes.findAll();

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
