const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, 'postgres://rzqitpooyqwybw:35439a98c4175212b64591dd0e8663f9901a95a99790d2e327fbfd9b85f0845b@ec2-44-205-41-76.compute-1.amazonaws.com:5432/d1625mm3nm6gin', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
