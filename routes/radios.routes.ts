import { Router } from "express";
import { getRadios, getRadiosById, postRadios, putRadios, deleteRadios, updateEstatusRadios } from "../controllers/radios.controller";

const router = Router();

 router.get('/',           getRadios   );
 router.get('/:id',        getRadiosById   );
 router.post('/',          postRadios   );
 router.put('/:id',        putRadios   );
 router.delete('/:id',     deleteRadios );
 router.put('/status/:id', updateEstatusRadios);

export default router;