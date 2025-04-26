const express = require('express');
const app = express();
const sequelize = require('./config/database');

// Importar rutas
const cursoRoutes = require('./routes/cursoRoutes');
const estudianteRoutes = require('./routes/estudianteRoutes');
const matriculaRoutes = require('./routes/matriculaRoutes');

// Middleware para leer JSON
app.use(express.json());

// Rutas
app.use('/cursos', cursoRoutes);
app.use('/estudiantes', estudianteRoutes);
app.use('/matriculas', matriculaRoutes);

// Conexión y sincronización con la base de datos
sequelize.sync({ force: false }).then(() => {
  console.log('Base de datos conectada y sincronizada');
});

// Levantar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
