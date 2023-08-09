import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('analytics', function (table) {
    table.string('chartId').index();
    table.string('title');
    table.string('dataType');
    table.json('data');
    table.json('locals');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('analytics');
}
