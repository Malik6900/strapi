const parse = require('postgres://qpnatusujwrdvv:b2e757dff90704ce5341ffb778804fecf41748d3fdc66711c949cc889be8e9d4@ec2-44-205-41-76.compute-1.amazonaws.com:5432/dfhoe1ert2sua9').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});