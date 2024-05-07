import { Request, Response } from "express";
import Armar_Radio from "../models/armar-radio.model";
import Radios from "../models/radios.model";
// import Asig_Usuarios from '../models/asig_usuario_radio.model';

//Función para obtener todos los elementos de una tabla
export const getArmar_Radio = async( req: Request , res: Response ) => {

   // const asig_usuarios = await Asig_Usuarios.findAll();
   const armar_radio: any = await Armar_Radio.sequelize?.query(
    `SELECT 
        armarradios.idarmar, 
        armarradios.fk_accesorio_bateria,
        baterias.accesorio AS nombreBateria,
        baterias.serie_bateria, 
        baterias.inventario_interno AS inventarioSpBateria, 
        marcasBaterias.idmarcas AS idmarcaBateria,
        marcasBaterias.nombreMarcas AS marcaBateria,
        marcasBaterias.nombreModelos AS modeloBateria,
        armarradios.fk_accesorio_cargador,
        cargadores.accesorio AS nombreCargador,
        cargadores.serie_cargador, 
        cargadores.inventario_interno AS inventarioSpCargador,
        marcasCargadores.idmarcas AS idmarcaCargador,
        marcasCargadores.nombreMarcas AS marcaCargador,
        marcasCargadores.nombreModelos AS modeloCargador,
        armarradios.fk_accesorio_gps, 
        gps.accesorio AS nombreGps,
        gps.serie_gps,
        gps.inventario_interno AS inventarioSpGps,
        marcasGps.idmarcas AS idmarcaGps,
        marcasGps.nombreMarcas AS marcaGps,
        marcasGps.nombreModelos AS modeloGps,
        radios.idradios, 
        marcasRadios.idmarcas,
        marcasRadios.nombreMarcas AS marcaRadio,
        marcasRadios.nombreModelos AS modeloRadio,
        radios.serie,
        radios.tipo,
        radios.inventario_segpub,
        radios.inventario_interno,
        radios.serie AS serie_radio, 
        vehiculos.idvehiculo, 
        vehiculos.placa, 
        vehiculos.unidad,
        vehiculos.anio, 
        vehiculos.tipo AS tipoVehiculo, 
        vehiculos.color,
        marcasVehiculos.idmarcas,
        marcasVehiculos.nombreMarcas AS marcaVehiculo,
        marcasVehiculos.nombreModelos AS modeloVehiculo, 
        zonasregiones.nombreZonasRegiones,
        armarradios.rfsi,
        armarradios.funda, 
        armarradios.antena,
        armarradios.bocina, 
        armarradios.c2h, 
        armarradios.cable_principal, 
        armarradios.caratula, 
        armarradios.micro, 
        armarradios.cofre, 
        armarradios.porta_caratula, 
        armarradios.cuello_cisne,
        armarradios.estatusArmar, 
        armarradios.createdAt, 
        armarradios.updatedAt, 
        armarradios.radios_idradios 
    FROM armarradios
    LEFT JOIN radios ON armarradios.radios_idradios = radios.idradios
    LEFT JOIN marcas AS marcasRadios ON radios.fk_marca = marcasRadios.idmarcas
    LEFT JOIN vehiculos ON armarradios.fk_vehiculo = vehiculos.idvehiculo
    LEFT JOIN marcas AS marcasVehiculos ON vehiculos.marcas_idMarcas = marcasVehiculos.idmarcas
    LEFT JOIN zonasregiones ON vehiculos.fk_zonaregion= zonasregiones.idzonasregiones
    LEFT JOIN accesorios AS baterias  ON armarradios.fk_accesorio_bateria = baterias.idaccesorios 
    LEFT JOIN marcas AS marcasBaterias ON baterias.marcas_idMarcas = marcasBaterias.idmarcas
    LEFT JOIN accesorios AS cargadores ON armarradios.fk_accesorio_cargador = cargadores.idaccesorios 
    LEFT JOIN marcas AS marcasCargadores ON cargadores.marcas_idMarcas = marcasCargadores.idmarcas
    LEFT JOIN accesorios AS gps ON armarradios.fk_accesorio_gps = gps.idaccesorios
    LEFT JOIN marcas AS marcasGps ON gps.marcas_idMarcas = marcasGps.idmarcas `
    ,{ 
    replacements: [],
    model: Armar_Radio,
    mapToModel: true
});
//gkdjgposd
    res.json(armar_radio );
}
export const getArmarRadioEstatus = async( req: Request , res: Response ) => {

   // const armar_radio = await Asig_Usuarios.findAll(); //No se está usando
   const asig_usuarios: any = await Armar_Radio.sequelize?.query(
    `SELECT 
    armarradios.idarmar, 
    armarradios.fk_accesorio_bateria,
    baterias.accesorio AS nombreBateria,
    baterias.serie_bateria, 
    baterias.inventario_interno AS inventarioSpBateria, 
    marcasBaterias.idmarcas AS idmarcaBateria,
    marcasBaterias.nombreMarcas AS marcaBateria,
    marcasBaterias.nombreModelos AS modeloBateria,
    armarradios.fk_accesorio_cargador,
    cargadores.accesorio AS nombreCargador,
    cargadores.serie_cargador, 
    cargadores.inventario_interno AS inventarioSpCargador,
    marcasCargadores.idmarcas AS idmarcaCargador,
    marcasCargadores.nombreMarcas AS marcaCargador,
    marcasCargadores.nombreModelos AS modeloCargador,
    armarradios.fk_accesorio_gps, 
    gps.accesorio AS nombreGps,
    gps.serie_gps,
    gps.inventario_interno AS inventarioSpGps,
    marcasGps.idmarcas AS idmarcaGps,
    marcasGps.nombreMarcas AS marcaGps,
    marcasGps.nombreModelos AS modeloGps,
    radios.idradios, 
    marcasRadios.idmarcas,
    marcasRadios.nombreMarcas AS marcaRadio,
    marcasRadios.nombreModelos AS modeloRadio,
    radios.serie,
    radios.tipo,
    radios.inventario_segpub,
    radios.inventario_interno,
    radios.serie AS serie_radio, 
    vehiculos.idvehiculo, 
    vehiculos.placa, 
    vehiculos.unidad,
    vehiculos.anio, 
    vehiculos.tipo AS tipoVehiculo, 
    vehiculos.color,
    marcasVehiculos.idmarcas,
    marcasVehiculos.nombreMarcas AS marcaVehiculo,
    marcasVehiculos.nombreModelos AS modeloVehiculo, 
    zonasregiones.nombreZonasRegiones,
    armarradios.rfsi,
    armarradios.funda, 
    armarradios.antena,
    armarradios.bocina, 
    armarradios.c2h, 
    armarradios.cable_principal, 
    armarradios.caratula, 
    armarradios.micro, 
    armarradios.cofre, 
    armarradios.porta_caratula, 
    armarradios.cuello_cisne,
    armarradios.estatusArmar, 
    armarradios.createdAt, 
    armarradios.updatedAt, 
    armarradios.radios_idradios 
FROM armarradios
INNER JOIN radios ON armarradios.radios_idradios = radios.idradios
LEFT JOIN marcas AS marcasRadios ON radios.fk_marca = marcasRadios.idmarcas
LEFT JOIN vehiculos ON armarradios.fk_vehiculo = vehiculos.idvehiculo
LEFT JOIN marcas AS marcasVehiculos ON vehiculos.marcas_idMarcas = marcasVehiculos.idmarcas
LEFT JOIN zonasregiones ON vehiculos.fk_zonaregion= zonasregiones.idzonasregiones
LEFT JOIN accesorios AS baterias  ON armarradios.fk_accesorio_bateria = baterias.idaccesorios 
LEFT JOIN marcas AS marcasBaterias ON baterias.marcas_idMarcas = marcasBaterias.idmarcas
LEFT JOIN accesorios AS cargadores ON armarradios.fk_accesorio_cargador = cargadores.idaccesorios 
LEFT JOIN marcas AS marcasCargadores ON cargadores.marcas_idMarcas = marcasCargadores.idmarcas
LEFT JOIN accesorios AS gps ON armarradios.fk_accesorio_gps = gps.idaccesorios
LEFT JOIN marcas AS marcasGps ON gps.marcas_idMarcas = marcasGps.idmarcas
    WHERE armarradios.estatusArmar=1 `
    ,{ 
    replacements: [],
    model: Armar_Radio,
    mapToModel: true
});
//gkdjgposd
    res.json(asig_usuarios );
}




export const getAsig = async( req: Request , res: Response ) => {

    const corporaciones=["Centro de Mando y Comunicaciones","Secretaria de Seguridad y Proteccion Ciudadana","Fiscalia del Estado de Tabasco"];
    let x="";
    function pasarLista(nombre:any, indice:any) {
        x=`corporaciones.nombreCorporacion="${nombre}" and`
        return x;
        ;}
console.log(x);
    corporaciones.forEach((nombre, indice) => pasarLista(nombre, indice));

   // const asig_usuarios = await Asig_Usuarios.findAll();
   const asig_usuarios: any = await Armar_Radio.sequelize?.query(
    `SELECT asignaciones.idasignacion, 
        usuarios.idusuarios, 
        usuarios.nombre, 
        usuarios.apellido_pat,
        usuarios.apellido_mat, 
        usuarios.titulo,
        CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo, 
        usuarios.clave_elector,
        puestos.idpuesto AS idPuestoUsuario,
        puestos.nombre AS nombrePuesto,
        corporaciones.idcorporaciones,
        corporaciones.nombreCorporacion,
        asignaciones.fk_accesorio_bateria,
        baterias.accesorio AS nombreBateria,
        baterias.serie_bateria, 
        baterias.inventario_segpub AS inventarioSpBateria, 
        asignaciones.fk_accesorio_cargador,
        marcasBaterias.idmarcas AS idmarcaBateria,
        marcasBaterias.nombreMarcas AS marcaBateria,
        marcasBaterias.nombreModelos AS modeloBateria,
        cargadores.accesorio AS nombreCargador,
        cargadores.serie_cargador, 
        cargadores.inventario_segpub AS inventarioSpCargador,
        marcasCargadores.idmarcas AS idmarcaCargador,
        marcasCargadores.nombreMarcas AS marcaCargador,
        marcasCargadores.nombreModelos AS modeloCargador,
        asignaciones.fk_accesorio_gps, 
        gps.accesorio AS nombreGps,
        gps.serie_gps,
        gps.inventario_segpub AS inventarioSpGps,
        marcasGps.idmarcas AS idmarcaGps,
        marcasGps.nombreMarcas AS marcaGps,
        marcasGps.nombreModelos AS modeloGps,
        radios.idradios, 
        radios.serie,
        radios.tipo,
        radios.inventario_segpub,
        radios.inventario_interno,
        radios.serie AS serie_radio, 
        marcasRadios.idmarcas,
        marcasRadios.nombreMarcas AS marcaRadio,
        marcasRadios.nombreModelos AS modeloRadio,
        vehiculos.idvehiculo, 
        vehiculos.placa, 
        vehiculos.unidad,
        vehiculos.anio, 
        vehiculos.tipo AS tipoVehiculo, 
        vehiculos.color,
        marcasVehiculos.idmarcas,
        marcasVehiculos.nombreMarcas AS marcaVehiculo,
        marcasVehiculos.nombreModelos AS modeloVehiculo, 
        zonasregiones.nombreZonasRegiones,
        asignaciones.rfsi,
        asignaciones.funda, 
        asignaciones.antena,
        asignaciones.bocina, 
        asignaciones.c2h, 
        asignaciones.cable_principal, 
        asignaciones.caratula, 
        asignaciones.micro, 
        asignaciones.cofre, 
        asignaciones.porta_caratula, 
        asignaciones.cuello_cisne,
        asignaciones.estatus, 
        asignaciones.fecha_asignacion, 
        asignaciones.createdAt, 
        asignaciones.updatedAt, 
        asignaciones.usuarios_idusuarios,
        asignaciones.radios_idradios 
    FROM asignaciones 
    INNER JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
    INNER JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
    INNER JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
    INNER JOIN radios ON asignaciones.radios_idradios = radios.idradios
    LEFT JOIN marcas AS marcasRadios ON radios.fk_marca = marcasRadios.idmarcas
    LEFT JOIN vehiculos ON asignaciones.fk_vehiculo = vehiculos.idvehiculo
    LEFT JOIN marcas AS marcasVehiculos ON vehiculos.marcas_idMarcas = marcasVehiculos.idmarcas
    LEFT JOIN zonasregiones ON vehiculos.fk_zonaregion= zonasregiones.idzonasregiones
    LEFT JOIN accesorios AS baterias  ON asignaciones.fk_accesorio_bateria = baterias.idaccesorios 
    LEFT JOIN marcas AS marcasBaterias ON baterias.marcas_idMarcas = marcasBaterias.idmarcas
    LEFT JOIN accesorios AS cargadores ON asignaciones.fk_accesorio_cargador = cargadores.idaccesorios 
    LEFT JOIN marcas AS marcasCargadores ON cargadores.marcas_idMarcas = marcasCargadores.idmarcas
    LEFT JOIN accesorios AS gps ON asignaciones.fk_accesorio_gps = gps.idaccesorios
    LEFT JOIN marcas AS marcasGps ON gps.marcas_idMarcas = marcasGps.idmarcas
    ORDER By asignaciones.idasignacion DESC 
    
     `
    ,{ 
    replacements: [],
    model: Armar_Radio,
    mapToModel: true
});
//gkdjgposd
    res.json(asig_usuarios );
}

//Función para obtener todos los datos con el filtro de RFSI
export const getAsignacionPorUsuario = async( req: Request , res: Response ) => {
   const { nombre } = req.params;
   const asig_usuarios: any = await Armar_Radio.sequelize?.query(
    `SELECT asignaciones.idasignacion, 
        usuarios.idusuarios, 
        usuarios.nombre, 
        usuarios.apellido_pat,
        usuarios.apellido_mat, 
        usuarios.titulo,
        CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo,  
        usuarios.clave_elector,
        puestos.idpuesto,
        puestos.nombre AS nombrePuesto,
        corporaciones.idcorporaciones,
        corporaciones.nombreCorporacion,
        asignaciones.fk_accesorio_bateria,
        baterias.serie_bateria, 
        asignaciones.fk_accesorio_cargador,
        cargadores.serie_cargador, 
        asignaciones.fk_accesorio_gps, 
        gps.serie_gps,
        radios.idradios,
        radios.tipo, 
        radios.serie, 
        radios.inventario_interno,  
        radios.serie AS serie_radio, 
        vehiculos.idvehiculo, 
        vehiculos.placa, 
        vehiculos.unidad,
        zonasregiones.nombreZonasRegiones,
        asignaciones.rfsi,
        asignaciones.funda, 
        asignaciones.antena,
        asignaciones.bocina, 
        asignaciones.c2h, 
        asignaciones.cable_principal, 
        asignaciones.caratula, 
        asignaciones.micro, 
        asignaciones.cofre, 
        asignaciones.porta_caratula, 
        asignaciones.cuello_cisne,
        asignaciones.estatus, 
        asignaciones.fecha_asignacion, 
        asignaciones.createdAt, 
        asignaciones.updatedAt, 
        asignaciones.usuarios_idusuarios,
        asignaciones.radios_idradios 
    FROM asignaciones 
    INNER JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
    INNER JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
    INNER JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
    INNER JOIN radios ON asignaciones.radios_idradios = radios.idradios 
    LEFT JOIN vehiculos ON asignaciones.fk_vehiculo = vehiculos.idvehiculo
    LEFT JOIN zonasregiones ON vehiculos.fk_zonaregion= zonasregiones.idzonasregiones
    LEFT JOIN accesorios AS baterias  ON asignaciones.fk_accesorio_bateria = baterias.idaccesorios 
    LEFT JOIN accesorios AS cargadores ON asignaciones.fk_accesorio_cargador = cargadores.idaccesorios 
    LEFT JOIN accesorios AS gps ON asignaciones.fk_accesorio_gps = gps.idaccesorios 
    WHERE asignaciones.estatus = true 
    AND CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) = '${nombre}' `
,{ 
    replacements: [],
    model: Armar_Radio,
    mapToModel: true
});
    res.json(asig_usuarios );
}

export const getAsignacionPorRfsi= async( req: Request , res: Response ) => {
   const { rfsi,usuarioBuscar } = req.params;
   const asig_usuarios: any = await Armar_Radio.sequelize?.query(
    `SELECT asignaciones.idasignacion, 
        usuarios.idusuarios, 
        usuarios.nombre, 
        usuarios.apellido_pat,
        usuarios.apellido_mat, 
        usuarios.titulo,
        CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo, 
        usuarios.clave_elector,
        puestos.idpuesto,
        puestos.nombre AS nombrePuesto,
        corporaciones.idcorporaciones,
        corporaciones.nombreCorporacion,
        asignaciones.fk_accesorio_bateria,
        baterias.serie_bateria, 
        asignaciones.fk_accesorio_cargador,
        cargadores.serie_cargador, 
        asignaciones.fk_accesorio_gps, 
        gps.serie_gps,
        radios.idradios,
        radios.tipo, 
        radios.serie, 
        radios.inventario_interno, 
        radios.inventario_segpub, 
        radios.serie AS serie_radio, 
        vehiculos.idvehiculo, 
        vehiculos.placa, 
        vehiculos.unidad,
        zonasregiones.nombreZonasRegiones,
        asignaciones.rfsi,
        asignaciones.funda, 
        asignaciones.antena,
        asignaciones.bocina, 
        asignaciones.c2h, 
        asignaciones.cable_principal, 
        asignaciones.caratula, 
        asignaciones.micro, 
        asignaciones.cofre, 
        asignaciones.porta_caratula, 
        asignaciones.cuello_cisne,
        asignaciones.estatus, 
        asignaciones.fecha_asignacion, 
        asignaciones.createdAt, 
        asignaciones.updatedAt, 
        asignaciones.usuarios_idusuarios,
        asignaciones.radios_idradios 
    FROM asignaciones 
    INNER JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
    INNER JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
    INNER JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
    INNER JOIN radios ON asignaciones.radios_idradios = radios.idradios 
    LEFT JOIN vehiculos ON asignaciones.fk_vehiculo = vehiculos.idvehiculo
    LEFT JOIN zonasregiones ON vehiculos.fk_zonaregion= zonasregiones.idzonasregiones
    LEFT JOIN accesorios AS baterias  ON asignaciones.fk_accesorio_bateria = baterias.idaccesorios 
    LEFT JOIN accesorios AS cargadores ON asignaciones.fk_accesorio_cargador = cargadores.idaccesorios 
    LEFT JOIN accesorios AS gps ON asignaciones.fk_accesorio_gps = gps.idaccesorios 
    WHERE asignaciones.estatus = true
    AND CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) = '${usuarioBuscar}' 
    AND asignaciones.rfsi = '${rfsi}' `
,{ 
    replacements: [],
    model: Armar_Radio,
    mapToModel: true
});
    res.json(asig_usuarios );
}
export const getAsignacionPorSoloRfsi= async( req: Request , res: Response ) => {
    const { rfsi,usuarioBuscar } = req.params;
    const asig_usuarios: any = await Armar_Radio.sequelize?.query(
     `SELECT asignaciones.idasignacion, 
         usuarios.idusuarios, 
         usuarios.nombre, 
         usuarios.apellido_pat,
         usuarios.apellido_mat, 
         usuarios.titulo,
         CONCAT(usuarios.nombre, ' ', usuarios.apellido_pat, ' ', usuarios.apellido_mat ) AS nombre_completo, 
         usuarios.clave_elector,
         puestos.idpuesto,
         puestos.nombre AS nombrePuesto,
         corporaciones.idcorporaciones,
         corporaciones.nombreCorporacion,
         asignaciones.fk_accesorio_bateria,
         baterias.serie_bateria, 
         asignaciones.fk_accesorio_cargador,
         cargadores.serie_cargador, 
         asignaciones.fk_accesorio_gps, 
         gps.serie_gps,
         radios.idradios,
         radios.tipo, 
         radios.serie, 
         radios.inventario_interno, 
         radios.inventario_segpub, 
         radios.serie AS serie_radio, 
         vehiculos.idvehiculo, 
         vehiculos.placa, 
         vehiculos.unidad,
         zonasregiones.nombreZonasRegiones,
         asignaciones.rfsi,
         asignaciones.funda, 
         asignaciones.antena,
         asignaciones.bocina, 
         asignaciones.c2h, 
         asignaciones.cable_principal, 
         asignaciones.caratula, 
         asignaciones.micro, 
         asignaciones.cofre, 
         asignaciones.porta_caratula, 
         asignaciones.cuello_cisne,
         asignaciones.estatus, 
         asignaciones.fecha_asignacion, 
         asignaciones.createdAt, 
         asignaciones.updatedAt, 
         asignaciones.usuarios_idusuarios,
         asignaciones.radios_idradios 
     FROM asignaciones 
     LEFT JOIN usuarios ON asignaciones.usuarios_idusuarios = usuarios.idusuarios 
     LEFT JOIN puestos ON usuarios.fk_puesto = puestos.idpuesto
     LEFT JOIN corporaciones ON puestos.fk_corporacion = corporaciones.idcorporaciones
     LEFT JOIN radios ON asignaciones.radios_idradios = radios.idradios 
     LEFT JOIN vehiculos ON asignaciones.fk_vehiculo = vehiculos.idvehiculo
     LEFT JOIN zonasregiones ON vehiculos.fk_zonaregion= zonasregiones.idzonasregiones
     LEFT JOIN accesorios AS baterias  ON asignaciones.fk_accesorio_bateria = baterias.idaccesorios 
     LEFT JOIN accesorios AS cargadores ON asignaciones.fk_accesorio_cargador = cargadores.idaccesorios 
     LEFT JOIN accesorios AS gps ON asignaciones.fk_accesorio_gps = gps.idaccesorios 
     WHERE asignaciones.estatus = true 
     AND asignaciones.rfsi = '${rfsi}' `
 ,{ 
     replacements: [],
     model: Armar_Radio,
     mapToModel: true
 });
     res.json(asig_usuarios );
 }
 

//Funcion para obtener un elemento de una tabla en especifico por medio de su ID 
export const getAsig_UsuariosById = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const asig_usuarios = await Armar_Radio.findByPk( id );

    if(asig_usuarios){
        res.json(asig_usuarios)
    }else{
        res.status(404).json({
            msg: "No existe Usuario en la base de datos"
        });
    } 

}

// export const getAsig_UsuariosByRfsi= async( req: Request , res: Response ) => {

//     // const { rfsi } = req.params;
//     const asig_usuarios = await Asig_Usuarios.sequelize?.query(
//         ,
//         { 
//             replacements: [],
//             model: Asig_Usuarios,
//             mapToModel: true
//         });
//         res.json(asig_usuarios );

//     // if(asig_usuarios){
//     //     res.json(asig_usuarios)
//     // }else{
//     //     res.status(404).json({
//     //         msg: "No existe Usuario en la base de datos"
//     //     });
//     // } 

// }

// Función para agregar un elemento a la tabla de nuestra base de datos asig_usuarios
export const postArmar_Radio = async( req: Request , res: Response ) => {

    const { body } = req;

    try {
        const existeRFSI = await Armar_Radio.findOne({
            where: {
                rfsi: body.rfsi
            }
        })

        if (existeRFSI){
            return res.status(400).json({
                message: 'Ya existe un registro con el rfsi ' + body.rfsi
            });
        }

        const armar_radio = await Armar_Radio.create(body);
        await armar_radio.save();

        res.json(armar_radio);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el Administrador',
            errores:error
        })
    }
}

//Función para actualizar un elemento a la tabla de nuestra base de datos asig_usuarios
export const putArmar_Radio = async( req: Request , res: Response ) => {

    const { id } = req.params;
    const { body } =  req;

    try {

        const armar_radio = await Armar_Radio.findByPk( id );
        if (!armar_radio){
            return res.status(404).json({
                msg: 'No existe un armar_radio con el id ' + id
            })
        }

        await armar_radio.update ( body );
        res.json( armar_radio );
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
   
}

//Función para borrar un elemento a la tabla de nuestra base de datos asig_usuarios (Solo se dehabilita)
export const deleteArmar_Radio = async( req: Request , res: Response ) => {

    const { id } = req.params;

    try {

        const armar_radio : any= await Armar_Radio.findByPk( id );
        if (!armar_radio){
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            })
        }

       // await usuario.destroy ();

       //const UsuarioAutenticado = req.user;
         
       const estado= armar_radio.estatusArmar;
        console.log('dfwwfeffg',estado);
        
       //await usuario.update({ estatus: false });

       if ( estado == true)
       {
           //Si el estatus viene con valor 'true' deshabilitada el registro
           await armar_radio.update({ estatusArmar: false })
       }
       else if (estado == false)
       {
        await armar_radio.update({ estatusArmar: true})
       }
       else
       {
           return res.status(400).json({
               
               success: false,
               message: 'El valor del estatus no es valido (true o false)'
           })
       }
        res.json( armar_radio);
        
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
       await sueRadio.update({ situacion: "Asignado",ubicacion:"Operativo", fecha_asignacion:new Date() })
        res.json( sueRadio);
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el Administrador'
        })
        
    }
}


//Función para habilitar y deshabilitar el estatus de asig_usuarios
export const updateEstatusArmar_Radio = async (req: Request, res: Response) => {

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
    
    const asig_usuarios = await Armar_Radio.findByPk(id);

    
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
