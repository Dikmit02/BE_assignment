import 'dotenv/config';
import { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';

module.exports = {
  client: 'pg',
  debug: !!+process.env.DB_DEBUG,
  connection: {
    connectionString:process.env.PG_CONNECTION_STRING,
    ssl:true
  },
  useNullAsDefault: true,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'migrations',
    directory: './database/migrations',
    extension: 'ts',
  },
  seeds: {
    directory: './database/seeds',
    extension: 'ts',
},
  ...knexSnakeCaseMappers(),
} as Knex.Config;
