const express = require('express');
const path = require('path');
const router = require('./routes/router');

const app = express();
const port = 7501;

// Configurar middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurar archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Usar rutas
app.use('/', router);

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
