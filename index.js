const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000; // Se selecciona el puesto

// Logger de solicitudes HTTP
app.use(morgan('dev'));

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor local!');
});

app.get('/home', (req, res) => {
    res.send('Bienvenido al mejor sitio de películas en la región');
  });

// Ruta /api/movie
app.get('/api/movie', (req, res) => {
  res.send('EL CATÁLOGO DE PELÍCULAS AÚN ESTÁ EN CONSTRUCCIÓN.');
});

// Ruta /api/cines
app.get('/api/cines', (req, res) => {
  res.send('EL CATÁLOGO DE CINES AÚN ESTÁ EN CONSTRUCCIÓN.');
});

// Utilice el modulo path que nos permite trabajar con rutas relativas o absolutas 
// 
app.get('/api/movie/expoferia', (req, res) => {
  const imagePath = app.use(express.static(path.join(__dirname, 'PT_PROTALENTO2023', 'betty_la_fea.jpg')));
  const message = 'GRAN ESTRENO DE LA NUEVA TEMPORADA DE BETTY LA FEA';
  res.send(`
    <h2>${message}</h2>
    <img src="${imagePath}" alt="Imagen de Betty La Fea">
  `);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`El servidor está corriendo en http://localhost:${port}`);
});
