import { Knex } from 'knex';
const data = require('../data.json');

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('user_chart').del();

  let payload = [];
  for await (const user of data.users) {
    const { id } =
      (await knex('users')
        .select('id')
        .where({ username: user?.username })
        .first()) || {};
    user.charts.forEach((chart) => {
      payload.push({
        userId: id,
        chartId: chart,
      });
    });
  }

  // Inserts seed entries
  await knex('user_chart').insert(payload);
}