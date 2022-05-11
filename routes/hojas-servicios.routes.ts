import { Router } from "express";
import { getHojasServicios, getHojasServiciosById, postHojasServicios, putHojasServicios, deleteHojasServicios, updateEstatusHojasServicios  } from "../controllers/hojas-servicios.controller";

const router = Router();

 router.get('/',           getHojasServicios   );
 router.get('/:id',        getHojasServiciosById   );
 router.post('/',          postHojasServicios   );
 router.put('/:id',        putHojasServicios   );
 router.delete('/:id',     deleteHojasServicios );
 router.put('/status/:id', updateEstatusHojasServicios);

export default router;