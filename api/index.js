const express = require('express');
const app = express();

// Leemos el puerto y el mensaje desde variables de entorno
const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || 'Hola, soy Leonardo - Bienvenido a mi Minimal API';

// Endpoint principal
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    mensaje: MESSAGE,
    instancia: process.env.HOSTNAME || 'local',
    timestamp: new Date().toISOString()
  });
});

// Endpoint de salud (buena práctica para Docker)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  console.log(`Mensaje configurado: "${MESSAGE}"`);
});