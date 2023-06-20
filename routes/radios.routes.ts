import { Router } from "express";
import { getRadios, getRadiosById, postRadios, putRadios, deleteRadios, updateEstatusRadios, getRadiosFiltrado } from "../controllers/radios.controller";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-role";

const router = Router();
// Todas tienen que pasar por la validación del JWT
 router.use( validarJWT );

 router.get('/',           getRadios   );
 router.get('/filtrado/',    getRadiosFiltrado);
 router.get('/:id',        getRadiosById   );
 router.post('/',          [validarJWT,esAdminRole],postRadios   );
 router.put('/:id',        [validarJWT,esAdminRole],putRadios   );
 router.delete('/:id',     [validarJWT,esAdminRole],deleteRadios );
 router.put('/status/:id', [validarJWT,esAdminRole],updateEstatusRadios);

export default router;