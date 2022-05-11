import { Router } from "express";
import { getMarcas, getMarcasById, postMarcas, putMarcas, deleteMarcas, updateEstatusMarcas } from "../controllers/marcas.controller";

const router = Router();

 router.get('/',           getMarcas   );
 router.get('/:id',        getMarcasById   );
 router.post('/',          postMarcas   );
 router.put('/:id',        putMarcas   );
 router.delete('/:id',     deleteMarcas );
 router.put('/status/:id', updateEstatusMarcas);

export default router;