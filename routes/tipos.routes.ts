import { Router } from "express";
import { deleteTipos, getTipos, getTiposById, postTipos, putTipos, /*deleteTipos,*/ updateEstatusPuestos } from "../controllers/tipos.controller";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();
// Todas tienen que pasar por la validación del JWT
//router.use( validarJWT );

 router.get('/',           getTipos   );
 router.get('/:id',        getTiposById   );
 router.post('/',          postTipos   );
 router.put('/:id',        putTipos   );
  router.delete('/:id',     deleteTipos );
 router.put('/status/:id', updateEstatusPuestos);

export default router;