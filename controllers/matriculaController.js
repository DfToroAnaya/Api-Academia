const { Matricula, Estudiante, Curso } = require('../models');

exports.createMatricula = async (req, res) => {
  try {
    const { estudianteId, cursoId, fecha_matricula } = req.body;
    const matricula = await Matricula.create({
      estudianteId,
      cursoId,
      fecha_matricula
    });
    res.status(201).json(matricula);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMatriculas = async (req, res) => {
  try {
    const matriculas = await Matricula.findAll({
      include: [
        { model: Estudiante, as: 'Estudiante' },
        { model: Curso, as: 'Curso' }
      ]
    });
    res.json(matriculas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEstudiantesCurso = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id, {
      include: 'Estudiantes'
    });
    if (!curso) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }
    res.json(curso.Estudiantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
