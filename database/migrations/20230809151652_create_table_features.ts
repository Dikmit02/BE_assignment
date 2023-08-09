import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('features', function (table) {
    table.bigIncrements('id');
    table.uuid('uuid').index();
    table.string('feature_id');
    table.string('feature_name');
    table.integer('price');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('features');
}
