import { Router } from "express";
import { getCorporaciones, getCorporacionesById, postCorporaciones, putCorporaciones, /*deleteCorporaciones*/ updateEstatusCorporaciones } from "../controllers/corporaciones.controller";

const router = Router();

 router.get('/',           getCorporaciones   );
 router.get('/:id',        getCorporacionesById   );
 router.post('/',          postCorporaciones   );
 router.put('/:id',        putCorporaciones   );
//  router.delete('/:id',     deleteCorporaciones );
 router.put('/status/:id', updateEstatusCorporaciones);

export default router;