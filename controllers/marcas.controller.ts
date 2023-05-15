import { Request, Response } from "express";
import Marcas from '../models/marcas.model';

//Función para obtener todos los elementos de una tabla
export const getMarcas = async( req: Request , res: Response ) => {

    const marcas = await Marcas.findAll();

    res.json( marcas);
}

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getMarcasById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const marcas = await Marcas.findByPk( id );

    if(marcas){
        res.json(marcas)
    }else{
        res.status(404).json({
            msg: "No existe marcas en la base de datos"
        });
    } 

}

// Función para obtener marcas por tipo
export const getMarcasByTipo = async( req: Request , res: Response ) => {
    const { id } = req.params;
    const marcas: any = await Marcas.sequelize?.query(
        `SELECT * FROM marcas WHERE tipo=${id} AND estatus=1 ORDER BY marcas.idmarcas DESC` , 
        {
            replacements: [],
            model: Marcas,
            mapToModel: true
        });
         
        res.json(marcas);

}

//Función para agregar un elemento a la tabla de nuestra base de datos marcas
export const postMarcas = async( req: Request , res: Response ) => {

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

        const marcas = await Marcas.create(body);
        await marcas.save();

        res.json(marcas);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos marcas
export const putMarcas = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const marcas = await Marcas.findByPk( id );
        if (!marcas){
            return res.status(404).json({
                msg: 'No existe marcas con el id ' + id
            })
        }

        await marcas.update ( body );
        res.json( marcas );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

export const deleteMarcas = async( req: Request , res: Response ) => {

    const { id } = req.params; 
    
    try {

        const marcas : any= await Marcas.findByPk( id );
        if (!marcas){
            return res.status(404).json({
                msg: 'No existe una marca con el id ' + id
            })
        }

       // await usuario.destroy ();
       //await marcas.update({ fk_status: 6 });
       const estado= marcas.estatus;
       
       if ( estado == true)
       {
           //Si el estatus viene con valor 'true' deshabilitada el registro
           await marcas.update({ estatus: false })
       }
       else if (estado == false)
       {
        await marcas.update({ estatus: true})
       }
       else
       {
           return res.status(400).json({
               
               success: false,
               message: 'El valor del estatus no es valido (true o false)'
           })
       }
        res.json( marcas );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }

 
}

export const updateEstatusMarcas = async (req: Request, res: Response) => {

    const  id  = Number(req.params.id);
    const fk_status = req.query.fk_status;
  
    if (isNaN(id))
    {
      return res.status(400).json({
        data: null,
        success: false,
        message: 'El idMarcas no es un valor válido'
      });
    }
    
    const marcas = await Marcas.findByPk(id);

    
  if (!marcas)
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
      marcas.update({ estatus: false })
  }
  else if (fk_status == 'false')
  {
      marcas.update({ estatus: true})
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
      data: marcas,
      success: true,
      message: 'Estatus actualizado'
  })

}





