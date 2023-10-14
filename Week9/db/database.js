const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    locahost:process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password:process.env.POSTGRES_PASSWORD,
    port:process.env.POSTGRES_PORT
})

module.exports = pool