const Pool = require('pg').Pool;
const database = require('../database.json')

const pool = new Pool({
    user: database.dev.user,
    locahost:database.dev.host,
    database: database.dev.database,
    password:database.dev.password,
    port:database.dev.port,
})

module.exports = pool