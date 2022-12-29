import { Router } from "express";
import { deleteCorporaciones, getCorporaciones, getCorporacionesById, postCorporaciones, putCorporaciones, /*deleteCorporaciones*/ updateEstatusCorporaciones } from "../controllers/corporaciones.controller";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();
// Todas tienen que pasar por la validación del JWT
//router.use( validarJWT );

 router.get('/',           getCorporaciones   );
 router.get('/:id',        getCorporacionesById   );
 router.post('/',          postCorporaciones   );
 router.put('/:id',        putCorporaciones   );
 router.delete('/:id',     deleteCorporaciones );
 router.put('/status/:id', updateEstatusCorporaciones);

export default router;