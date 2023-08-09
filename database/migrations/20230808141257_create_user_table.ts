import { Knex } from 'knex';
import { timestamps } from '../helpers';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', function (table) {
    table.string('displayname');
    table.string('firstname');
    table.string('email').unique();
    table.string('lastname');
    table.string('username').unique();
    table.string('profile');
    table.string('organization');
    table.date('dob')
    table.string('password');
    table.json('charts');
    table.json('productFeatures');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('users');
}
