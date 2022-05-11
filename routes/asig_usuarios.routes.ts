import { Router } from "express";
import { getAsig_Usuarios, getAsig_UsuariosById, postAsig_Usuarios, putAsig_Usuarios, deleteAsig_Usuarios, updateEstatusAsig_Usuarios } from "../controllers/asig_usuarios.controller";

const router = Router();

 router.get('/',           getAsig_Usuarios   );
 router.get('/:id',        getAsig_UsuariosById   );
 router.post('/',          postAsig_Usuarios   );
 router.put('/:id',        putAsig_Usuarios   );
 router.delete('/:id',     deleteAsig_Usuarios );
 router.put('/status/:id', updateEstatusAsig_Usuarios);

export default router;