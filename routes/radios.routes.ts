import { Router } from "express";
import { getRadios, getRadiosById, postRadios, putRadios, deleteRadios, updateEstatusRadios, getRadiosFiltrado } from "../controllers/radios.controller";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();
// Todas tienen que pasar por la validación del JWT
// router.use( validarJWT );

 router.get('/',           getRadios   );
 router.get('/filtrado/',    getRadiosFiltrado);
 router.get('/:id',        getRadiosById   );
 router.post('/',          postRadios   );
 router.put('/:id',        putRadios   );
 router.delete('/:id',     deleteRadios );
 router.put('/status/:id', updateEstatusRadios);

export default router;