import { Router } from "express";
import { getImagenes, getImagenesById, postImagenes, putImagenes, deleteImagenes, updateEstatusImagenes } from "../controllers/imagenes.controller";
import { esAdminRole } from "../middlewares/validar-role";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();

 router.get('/',           getImagenes   );
 router.get('/:id',        getImagenesById   );
 router.post('/',          [validarJWT,esAdminRole],postImagenes   );
 router.put('/:id',        [validarJWT,esAdminRole],putImagenes   );
 router.delete('/:id',     [validarJWT,esAdminRole],deleteImagenes );
 router.put('/status/:id', [validarJWT,esAdminRole],updateEstatusImagenes);

export default router;