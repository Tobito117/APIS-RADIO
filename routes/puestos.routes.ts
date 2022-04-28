import { Router } from "express";
import { getPuestos, getPuestosById, postPuestos, putPuestos, deletePuestos, updateEstatusPuestos } from "../controllers/puestos.controller";

const router = Router();

 router.get('/',           getPuestos   );
 router.get('/:id',        getPuestosById   );
 router.post('/',          postPuestos   );
 router.put('/:id',        putPuestos   );
 router.delete('/:id',     deletePuestos );
 router.put('/status/:id', updateEstatusPuestos);

export default router;