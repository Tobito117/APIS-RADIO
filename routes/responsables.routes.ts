import { Router } from "express";
import { check } from "express-validator";
import { getResponsables } from "../controllers/responsables.controller";
import { validarJWT } from "../middlewares/validar-jwt";

const router = Router();
// Todas tienen que pasar por la validación del JWT
//router.use( validarJWT );

router.get('/',                     getResponsables   );


export default router;