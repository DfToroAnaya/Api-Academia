const Curso = require('./Curso');
const Estudiante = require('./Estudiante');
const Matricula = require('./Matricula');

// Relaciones
Estudiante.belongsToMany(Curso, {
  through: Matricula,
  foreignKey: 'estudianteId',
  otherKey: 'cursoId',
  as: 'Cursos'
});

Curso.belongsToMany(Estudiante, {
  through: Matricula,
  foreignKey: 'cursoId',
  otherKey: 'estudianteId',
  as: 'Estudiantes'
});

// Relaciones para incluir en consultas individuales
Matricula.belongsTo(Estudiante, { as: 'Estudiante', foreignKey: 'estudianteId' });
Matricula.belongsTo(Curso, { as: 'Curso', foreignKey: 'cursoId' });

module.exports = {
  Curso,
  Estudiante,
  Matricula
};

