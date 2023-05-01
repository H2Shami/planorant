const { Pool } = require('pg');

const pool = new Pool({
    user: '<database-user>',
    host: '<database-host>',
    database: '<database-name>',
    password: '<database-password>',
    port: '<database-port>',
    ssl: { rejectUnauthorized: false },
});

module.exports = pool;
