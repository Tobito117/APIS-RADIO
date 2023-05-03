import { Router } from "express";
import { getMarcas, getMarcasById, getMarcasByTipo, postMarcas, putMarcas, deleteMarcas, updateEstatusMarcas } from "../controllers/marcas.controller";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();
// Todas tienen que pasar por la validación del JWT
//router.use( validarJWT );

 router.get('/',           getMarcas   );
 router.get('/:id',        getMarcasById   );
 router.get('/tipo/:id',      getMarcasByTipo  );
 router.post('/',          postMarcas   );
 router.put('/:id',        putMarcas   );
 router.delete('/:id',     deleteMarcas );
 router.put('/status/:id', updateEstatusMarcas);

export default router;