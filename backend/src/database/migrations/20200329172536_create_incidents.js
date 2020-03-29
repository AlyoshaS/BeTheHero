
exports.up = function (knex) {
  return knex.schema.createTable('ongs', function (table) {
    // primary key
    table.increments();

    // campos da tabela
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    
    //relacionamento
    table.string('ong_id').notNullable();

    // criar chave estrangeira
    table.foreign('ong_id').references('id').inTable('ongs');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};
