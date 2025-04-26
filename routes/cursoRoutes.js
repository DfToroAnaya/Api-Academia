const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

// CRUD Cursos
router.post('/', cursoController.createCurso);
router.get('/', cursoController.getCursos);
router.get('/:id', cursoController.getCursoById);
router.put('/:id', cursoController.updateCurso);
router.delete('/:id', cursoController.deleteCurso);

// Extra: Obtener estudiantes de un curso
router.get('/:id/estudiantes', require('../controllers/matriculaController').getEstudiantesCurso);

module.exports = router;
