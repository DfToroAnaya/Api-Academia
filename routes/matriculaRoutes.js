const express = require('express');
const router = express.Router();
const matriculaController = require('../controllers/matriculaController');

// Crear Matrícula
router.post('/', matriculaController.createMatricula);

// Obtener todas las matrículas (con datos relacionados)
router.get('/', matriculaController.getMatriculas);

module.exports = router;
