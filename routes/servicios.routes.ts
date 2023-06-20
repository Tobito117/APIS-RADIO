import { Router } from "express";
import { deleteServicios, getServicios, getServiciosById, getServiciosEstatus, postServicios,putServicios,/*deleteServicios,*/ updateEstatusServicios } from "../controllers/servicios.controller"
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-role";

const router = Router();
// Todas tienen que pasar por la validación del JWT
router.use( validarJWT );

 router.get('/',           getServicios   );
 router.get('/estatus/',           getServiciosEstatus   );
 router.get('/:id',        getServiciosById   );
 router.post('/',          [validarJWT,esAdminRole],postServicios   );
 router.put('/:id',        [validarJWT,esAdminRole],putServicios   );
 router.delete('/:id',     [validarJWT,esAdminRole],deleteServicios );
 router.put('/status/:id', [validarJWT,esAdminRole],updateEstatusServicios);

export default router;