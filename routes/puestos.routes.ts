import { Router } from "express";
import { deletePuestos, getPuestos, getPuestosById, postPuestos, putPuestos, /*deletePuestos*/ updateEstatusPuestos } from "../controllers/puestos.controller";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();
// Todas tienen que pasar por la validación del JWT
router.use( validarJWT );

 router.get('/',           getPuestos   );
 router.get('/:id',        getPuestosById   );
 router.post('/',          postPuestos   );
 router.put('/:id',        putPuestos   );
 router.delete('/:id',     deletePuestos );
 router.put('/status/:id', updateEstatusPuestos);

export default router;