import { Router } from "express";
import { getMarcas, getMarcasById, getMarcasByTipo, postMarcas, putMarcas, deleteMarcas, updateEstatusMarcas } from "../controllers/marcas.controller";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-role";

const router = Router();
// Todas tienen que pasar por la validación del JWT
router.use( validarJWT );

 router.get('/',           getMarcas   );
 router.get('/:id',        getMarcasById   );
 router.get('/tipo/:id',   getMarcasByTipo  );
 router.post('/',          [validarJWT,esAdminRole],postMarcas   );
 router.put('/:id',        [validarJWT,esAdminRole],putMarcas   );
 router.delete('/:id',     [validarJWT,esAdminRole],deleteMarcas );
 router.put('/status/:id', [validarJWT,esAdminRole],updateEstatusMarcas);

export default router;