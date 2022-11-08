import { Router } from "express";
import { check } from "express-validator";
import { getDocumentos, getDocumentosById, postDocumentos, putDocumentos, deleteDocumentos, updateEstatusDocumentos, mostrarImange } from "../controllers/documentos.controller";
import { coleccionesPermitidas } from "../helpers/db-validators";
import   validarCampos  from "../middlewares/validar-campos"
import   validarArchivoSubir from "../middlewares/validar-archivo"

const router = Router();

router.get('/', getDocumentos);
router.get('/:id', getDocumentosById);
router.post('/', validarArchivoSubir, postDocumentos);
router.put('/:coleccion/:id', [validarArchivoSubir,
   check('coleccion').custom(c => coleccionesPermitidas(c, ['users'])),
   validarCampos], putDocumentos);
router.delete('/:id', deleteDocumentos);
router.put('/status/:id', updateEstatusDocumentos);

router.get('/:coleccion/:id', [
   check('coleccion').custom(c => coleccionesPermitidas(c, ['users'])),
   validarCampos], mostrarImange);
    
export default router;