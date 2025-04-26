const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudianteController');

// CRUD Estudiantes
router.post('/', estudianteController.createEstudiante);
router.get('/', estudianteController.getEstudiantes);
router.get('/:id', estudianteController.getEstudianteById);
router.put('/:id', estudianteController.updateEstudiante);
router.delete('/:id', estudianteController.deleteEstudiante);

// Extra: Obtener cursos de un estudiante
router.get('/:id/cursos', estudianteController.getCursosEstudiante);

module.exports = router;
