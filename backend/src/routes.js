const express = require('express')

const routes = express.Router();

app.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Evelyn Schmitz'
  });
});