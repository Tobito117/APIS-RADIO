import { Router } from "express";
// import { getAsig_Usuarios, getAsignacionPorUsuario, getAsig_UsuariosById, postAsig_Usuarios, putAsig_Usuarios, deleteAsig_Usuarios, updateEstatusAsig_Usuarios, actualizarSueRadio, getAsignacionPorRfsi, getAsig, getAsignacionPorSoloRfsi, getAsigOrderUsuario } from "../controllers/asig_usuarios.controller";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-role";
import { deleteArmar_Radio, getArmarRadioEstatus, getArmar_Radio, postArmar_Radio, putArmar_Radio } from "../controllers/armar-radio.controller";

const router = Router();

 router.get('/',                    getArmar_Radio );
//  router.get('/usuarios/:nombre',    getAsignacionPorUsuario );
 router.get('/estatus/',           getArmarRadioEstatus );
//  router.get('/filtrado/listo/',     getAsig );
//  router.get('/radio/:rfsi/:usuarioBuscar', getAsignacionPorRfsi );
//  router.get('/radio/:rfsi',         getAsignacionPorSoloRfsi );
//  router.get('/:id',                 getAsig_UsuariosById );
 router.post('/',                   [validarJWT,esAdminRole],postArmar_Radio );
 router.put('/:id',                 [validarJWT,esAdminRole],putArmar_Radio );
//  router.put('/ActualizarSue/:id',   [validarJWT,esAdminRole],actualizarSueRadio );
 router.delete('/:id',              [validarJWT,esAdminRole],deleteArmar_Radio );
//  router.put('/status/:id',          [validarJWT,esAdminRole],updateEstatusAsig_Usuarios );

export default router;