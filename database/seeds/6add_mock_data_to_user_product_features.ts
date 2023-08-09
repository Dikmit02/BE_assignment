import { Knex } from 'knex';
const data = require('../data.json');

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('user_product_features').del();

  let payload = [];
  for await (const user of data.users) {
    const { id } =
      (await knex('users')
        .select('id')
        .where({ username: user?.username })
        .first()) || {};
    await user.productFeatures.forEach((productFeature) => {
      payload.push({
        userId: id,
        productFeatureId: productFeature,
      });
    });
  }

  // Inserts seed entries
  await knex('user_product_features').insert(payload);
}