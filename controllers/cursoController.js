const { Curso } = require('../models');

exports.createCurso = async (req, res) => {
  try {
    const curso = await Curso.create(req.body);
    res.status(201).json(curso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCursos = async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCursoById = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (!curso) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }
    res.json(curso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCurso = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (!curso) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }
    await curso.update(req.body);
    res.json(curso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCurso = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (!curso) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }
    await curso.destroy();
    res.json({ message: 'Curso eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
