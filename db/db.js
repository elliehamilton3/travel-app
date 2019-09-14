const pgp = require('pg-promise')();

const db = pgp(process.env.db_connection_string);

module.exports = db;
