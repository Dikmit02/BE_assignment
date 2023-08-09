import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('features', function (table) {
    table.string('feature_id');
    table.string('feature_name');
    table.integer('price');
    table.string('product_id')
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('features');
}
