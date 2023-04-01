const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "fartsa",
    password: "S$PD5TsU@ke8JEhT~J9M", 
    database: "fartsa"
}).promise();

module.exports = pool;