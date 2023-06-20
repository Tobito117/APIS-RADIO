import { Router } from "express";
import { getAsig_Usuarios, getAsignacionPorUsuario, getAsig_UsuariosById, postAsig_Usuarios, putAsig_Usuarios, deleteAsig_Usuarios, updateEstatusAsig_Usuarios, actualizarSueRadio, getAsignacionPorRfsi } from "../controllers/asig_usuarios.controller";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-role";

const router = Router();

 router.get('/',                  getAsig_Usuarios );
 router.get('/usuarios/:nombre',  getAsignacionPorUsuario );
 router.get('/radio/:rfsi/:usuarioBuscar',       getAsignacionPorRfsi );
 router.get('/:id',               getAsig_UsuariosById );
 router.post('/',                 [validarJWT,esAdminRole],postAsig_Usuarios );
 router.put('/:id',               [validarJWT,esAdminRole],putAsig_Usuarios );
 router.put('/ActualizarSue/:id', [validarJWT,esAdminRole],actualizarSueRadio );
 router.delete('/:id',            [validarJWT,esAdminRole],deleteAsig_Usuarios );
 router.put('/status/:id',        [validarJWT,esAdminRole],updateEstatusAsig_Usuarios );

export default router;