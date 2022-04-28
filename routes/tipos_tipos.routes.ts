import { Router } from "express";
import { getTipos_Tipos, getTipos_TiposById, postTipos_Tipos,putTipos_Tipos,deleteTipos_Tipos, updatedEstatusTipos_Tipos } from "../controllers/tipos_tipos.controller";

const router = Router();

router.get('/',            getTipos_Tipos);
router.get('/:id',         getTipos_TiposById);
router.post('/',           postTipos_Tipos);
router.put('/:id',         putTipos_Tipos);
router.delete('/:id',      deleteTipos_Tipos );
router.put('/status/:id', updatedEstatusTipos_Tipos);

export default router;