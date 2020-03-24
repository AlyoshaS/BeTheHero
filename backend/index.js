const express = require('express');

const app = express();

app.get('/', (request, response) => {
  // return response.send('Hello World');
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Evelyn Schmitz'
  });
});

app.listen(3333);
