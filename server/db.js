const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "luisbau48",
    host: "localhost",
    port: 5433,
    database: "dbluemark"
})

module.exports = pool;