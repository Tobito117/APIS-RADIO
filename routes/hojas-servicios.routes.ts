import { Router } from "express";
import { getHojasServicios, getHojasServiciosById, postHojasServicios, putHojasServicios, deleteHojasServicios, updateEstatusHojasServicios  } from "../controllers/hojas-servicios.controller";
import { esAdminRole } from "../middlewares/validar-role";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();

 router.get('/',           getHojasServicios   );
 router.get('/:id',        getHojasServiciosById   );
 router.post('/',          [validarJWT,esAdminRole],postHojasServicios   );
 router.put('/:id',        [validarJWT,esAdminRole],putHojasServicios   );
 router.delete('/:id',     [validarJWT,esAdminRole],deleteHojasServicios );
 router.put('/status/:id', [validarJWT,esAdminRole],updateEstatusHojasServicios);

export default router;