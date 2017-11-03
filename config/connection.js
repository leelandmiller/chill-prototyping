const mysql = require('mysql2');

const connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chill_db',
});

connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected');
    }
});

module.exports = connection;
