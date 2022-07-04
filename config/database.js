const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, 'postgres://aandvpgndmkuvy:6fdcf2aae3f681cc1b31cc2266026a904cc2c8894ecf7570fc841df39840b803@ec2-44-205-41-76.compute-1.amazonaws.com:5432/d7up58kmq5cckm', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
