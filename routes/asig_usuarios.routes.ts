import { Router } from "express";
import { getAsig_Usuarios, getAsignacionPorUsuario, getAsig_UsuariosById, postAsig_Usuarios, putAsig_Usuarios, deleteAsig_Usuarios, updateEstatusAsig_Usuarios, actualizarSueRadio, getAsignacionPorRfsi } from "../controllers/asig_usuarios.controller";

const router = Router();

 router.get('/',                  getAsig_Usuarios );
 router.get('/usuarios/:nombre',  getAsignacionPorUsuario );
 router.get('/radio/:rfsi/:usuarioBuscar',       getAsignacionPorRfsi );
 router.get('/:id',               getAsig_UsuariosById );
 router.post('/',                 postAsig_Usuarios );
 router.put('/:id',               putAsig_Usuarios );
 router.put('/ActualizarSue/:id', actualizarSueRadio );
 router.delete('/:id',            deleteAsig_Usuarios );
 router.put('/status/:id',        updateEstatusAsig_Usuarios );

export default router;