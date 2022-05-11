import { Router } from "express";
import { getAsig_Vehiculos, getAsig_VehiculosById, postAsig_Vehiculos, putAsig_Vehiculos, deleteAsig_Vehiculos, updateEstatusAsig_Vehiculos } from "../controllers/asig_vehiculos.controller";

const router = Router();

 router.get('/',           getAsig_Vehiculos   );
 router.get('/:id',        getAsig_VehiculosById  );
 router.post('/',          postAsig_Vehiculos   );
 router.put('/:id',        putAsig_Vehiculos   );
 router.delete('/:id',     deleteAsig_Vehiculos );
 router.put('/status/:id', updateEstatusAsig_Vehiculos);

export default router;