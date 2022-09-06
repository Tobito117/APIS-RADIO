import { Router } from "express";
import { check } from "express-validator";
import { getDocumentos, getDocumentosById, postDocumentos, putDocumentos, deleteDocumentos, updateEstatusDocumentos } from "../controllers/documentos.controller";

const router = Router();

 router.get('/',           getDocumentos);
 router.get('/:id',        getDocumentosById);
 router.post('/',          postDocumentos);
 router.put('/:id',[],     putDocumentos);
 router.delete('/:id',     deleteDocumentos);
 router.put('/status/:id', updateEstatusDocumentos);

export default router;