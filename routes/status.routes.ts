import { Router } from "express";
import { getStatus, getStatusById, postStatus, putStatus, deleteStatus } from "../controllers/status.controller";
const router = Router();

 router.get('/',           getStatus);
 router.get('/:id',        getStatusById);
 router.post('/',          postStatus);
 router.put ('/:id',          putStatus);
 router.delete ('/:id',    deleteStatus);


export default router;