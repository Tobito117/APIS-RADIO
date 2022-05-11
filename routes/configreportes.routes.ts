import { Router } from "express";
import { getConfigReportes, getConfigReportesById, postConfigReportes, putConfigReportes, deleteConfigReportes, updateEstatusConfigReportes  } from "../controllers/configreportes.controller";

const router = Router();

 router.get('/',           getConfigReportes   );
 router.get('/:id',        getConfigReportesById   );
 router.post('/',          postConfigReportes   );
 router.put('/:id',        putConfigReportes   );
 router.delete('/:id',     deleteConfigReportes );
 router.put('/status/:id', updateEstatusConfigReportes);

export default router;