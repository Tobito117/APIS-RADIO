import { Router } from "express";
import { getTipos, getTiposById, postTipos, putTipos, /*deleteTipos,*/ updateEstatusPuestos } from "../controllers/tipos.controller";

const router = Router();

 router.get('/',           getTipos   );
 router.get('/:id',        getTiposById   );
 router.post('/',          postTipos   );
 router.put('/:id',        putTipos   );
//  router.delete('/:id',     deleteTipos );
 router.put('/status/:id', updateEstatusPuestos);

export default router;