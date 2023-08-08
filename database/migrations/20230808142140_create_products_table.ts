import { Knex } from 'knex';
import { timestamps } from '../helpers';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('products', function (table) {
    table.bigIncrements('id');
    table.uuid('uuid').index();
    table.string('productId');
    table.string('productName');
    table.json('features');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('products');
}
