import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', function (table) {
    table.bigIncrements('id');
    table.string('displayname');
    table.string('firstname');
    table.string('email').unique();
    table.string('lastname');
    table.string('username').unique();
    table.string('profile');
    table.string('organization');
    table.string('dob')
    table.string('password');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('users');
}
