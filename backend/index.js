const express = require('express');

const app = express();

app.use(express.json())

/**
 * Rota / Recurso
 */

/**
 * Metódos HTTP:
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Exemplos db:
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CounchDB, etc..
 * 
 * O MongoDB é uma ótima pedida pra quem tá iniciando os estudos em node principalmente por
 * ser mais fácil de trabalhar que com bancos relacionais, claro que para coisas mais simples.
 * Para coisas mais complexas ele acaba se tornando, na parte de relacionamentos, um pouco mais
 * complicado de se aprender.
 * 
 * A decisão tomada foi de usar SQLite para se aproximar mais do que é usado no mercado e pelas questões
 * citadas acima em relação ao mongoDB.
 * 
 * PS: as queryes podem ter diferenças dependendo do banco utilizado.
 * 
 * Configuração do DB:
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * O Query builder selecionado foi o KNEX.JS http://knexjs.org/
 * O Driver sera o sqlite3 porque vamos usar o SQLite.
 * 
 * Para inicializar o knex: npx knex init
 */

/**
 * Query Params: Parâmetros nomeados enviados na roda após "?"(Filtros, paginação)
 */
app.get('/users', (request, response) => {
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Evelyn Schmitz'
  });
});

/** 
 * Query Params continuação
 * quero listar apenas usuários que começam com ou tenham o nome Evelyn
 */
app.get('/users?name=Evelyn', (request, response) => {
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Evelyn Schmitz'
  });
});

/**
 * Route Params: Parâmetros utilizados para identificar recursos(/users/: id)
 *    Preciso sempre ter a rota certinha, no route params eu não posso enviar
 *    parâmetros a mais do que está sendo esperado
 * 
 * Teste de busca por id(passar 'users/1' no insomnia)
 */
app.get('/users/:id', (request, response) => {
  const params = request.params;

  console.log(params);

  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Evelyn Schmitz'
  });
});

/**
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 * 
 * Criar um usuário: preciso informar dados do user
 * para ele aceitar, precisei adicionar a linha 5 desse arquivo:
 * app.use(express.json())
 */
app.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Evelyn Schmitz'
  });
});

app.listen(3333);
