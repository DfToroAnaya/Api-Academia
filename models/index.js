const Curso = require('./Curso');
const Estudiante = require('./Estudiante');
const Matricula = require('./Matricula');

// Relaciones
Estudiante.belongsToMany(Curso, { through: Matricula });
Curso.belongsToMany(Estudiante, { through: Matricula });

module.exports = {
  Curso,
  Estudiante,
  Matricula
};
