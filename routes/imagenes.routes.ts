import { Router } from "express";
import { getImagenes, getImagenesById, postImagenes, putImagenes, deleteImagenes, updateEstatusImagenes } from "../controllers/imagenes.controller";

const router = Router();

 router.get('/',           getImagenes   );
 router.get('/:id',        getImagenesById   );
 router.post('/',          postImagenes   );
 router.put('/:id',        putImagenes   );
 router.delete('/:id',     deleteImagenes );
 router.put('/status/:id', updateEstatusImagenes);

export default router;