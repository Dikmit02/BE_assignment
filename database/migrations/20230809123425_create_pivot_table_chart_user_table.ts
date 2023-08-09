import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('product_feature', function (table) {
    table.bigIncrements('id');
    table.uuid('uuid').index();
    table.integer('product_id');
    table.integer('feature_id');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('product_feature');
}
