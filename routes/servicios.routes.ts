import { Router } from "express";
import { getServicios, getServiciosById, postServicios,putServicios,deleteServicios, updateEstatusServicios } from "../controllers/servicios.controller"

const router = Router();

 router.get('/',           getServicios   );
 router.get('/:id',        getServiciosById   );
 router.post('/',          postServicios   );
 router.put('/:id',        putServicios   );
 router.delete('/:id',     deleteServicios );
 router.put('/status/:id', updateEstatusServicios);

export default router;