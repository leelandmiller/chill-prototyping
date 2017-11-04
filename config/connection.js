const mysql = require('mysql2');
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'chill_db',
    });
}

connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('mysql connected');
    }
});

module.exports = connection;
