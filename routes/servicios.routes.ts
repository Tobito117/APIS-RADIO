import { Router } from "express";
import { deleteServicios, getServicios, getServiciosById, postServicios,putServicios,/*deleteServicios,*/ updateEstatusServicios } from "../controllers/servicios.controller"
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();
// Todas tienen que pasar por la validación del JWT
router.use( validarJWT );

 router.get('/',           getServicios   );
 router.get('/:id',        getServiciosById   );
 router.post('/',          postServicios   );
 router.put('/:id',        putServicios   );
 router.delete('/:id',     deleteServicios );
 router.put('/status/:id', updateEstatusServicios);

export default router;