const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Uncrackablepass1",
    host: "localhost",
    port: 5432,
    database: "quicklib_database"
});

module.exports = pool;