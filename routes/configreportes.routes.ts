import { Router } from "express";
import { getConfigReportes, getConfigReportesById, postConfigReportes, putConfigReportes, deleteConfigReportes, updateEstatusConfigReportes, getConfigReportesByStatus  } from "../controllers/configreportes.controller";
import { esAdminRole } from "../middlewares/validar-role";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();
router.use( validarJWT );

 router.get('/',           getConfigReportes   );
 router.get('/estatus/',   getConfigReportesByStatus );
 router.get('/:id',        getConfigReportesById   );
 router.post('/',          [validarJWT,esAdminRole],postConfigReportes   );
 router.put('/:id',        [validarJWT,esAdminRole],putConfigReportes   );
 router.delete('/:id',     [validarJWT,esAdminRole],deleteConfigReportes );
 router.put('/status/:id', [validarJWT,esAdminRole],updateEstatusConfigReportes);

export default router;