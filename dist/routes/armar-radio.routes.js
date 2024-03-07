"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const armar_radio_controller_1 = require("../controllers/armar-radio.controller");
const router = (0, express_1.Router)();
router.get('/', armar_radio_controller_1.getArmar_Radio);
//  router.get('/usuarios/:nombre',    getAsignacionPorUsuario );
//  router.get('/orderUsuarios/',           getAsigOrderUsuario );
//  router.get('/filtrado/listo/',     getAsig );
//  router.get('/radio/:rfsi/:usuarioBuscar', getAsignacionPorRfsi );
//  router.get('/radio/:rfsi',         getAsignacionPorSoloRfsi );
//  router.get('/:id',                 getAsig_UsuariosById );
//  router.post('/',                   [validarJWT,esAdminRole],postAsig_Usuarios );
//  router.put('/:id',                 [validarJWT,esAdminRole],putAsig_Usuarios );
//  router.put('/ActualizarSue/:id',   [validarJWT,esAdminRole],actualizarSueRadio );
//  router.delete('/:id',              [validarJWT,esAdminRole],deleteAsig_Usuarios );
//  router.put('/status/:id',          [validarJWT,esAdminRole],updateEstatusAsig_Usuarios );
exports.default = router;
//# sourceMappingURL=armar-radio.routes.js.map