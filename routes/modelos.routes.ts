import { Router } from "express";
import { getModelos, getModelosById, postModelos, putModelos, deleteModelos, updateEstatusModelos} from "../controllers/modelos.controller";

const router = Router();

 router.get('/',           getModelos   );
 router.get('/:id',        getModelosById   );
 router.post('/',          postModelos   );
 router.put('/:id',        putModelos   );
 router.delete('/:id',     deleteModelos );
 router.put('/status/:id', updateEstatusModelos);

export default router;