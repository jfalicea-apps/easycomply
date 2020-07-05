require('dotenv').config();

const pgp = require('pg-promise')({
  query: (e) => console.log(e.query),
});

const db = pgp(process.env.CONNECTIONSTRING);

module.exports = db;
