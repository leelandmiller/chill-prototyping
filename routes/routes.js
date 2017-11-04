const express = require('express');
const path    = require('path');
const router  = express.Router();
const connection = require('../config/connection');

// 'get' route, queries the button MySQL table to retrieve its current state
router.get('/api/press', (req, res) => {
    connection.query('SELECT * FROM button', (err, results) => {
        res.json(results);
    });
});

// 'put' route, queries the button MySQL table to update its current state
router.put('/api/press', (req, res) => {
    let pressed = req.body.pressed;
    connection.query('UPDATE button SET pressed = ?', [pressed], (err, results) => {
        res.json(results);
    });
});

// catch all route - determines whether to serve public dir (for dev) or build (for prod)
router.get('*', (req, res) => {
    if (process.env.NODE_ENV === 'production') {
        let build = 'build';
    } else {
        let build = 'public';
    }

    res.sendFile(path.resolve(__dirname, '../client', build, 'index.html'));
});

module.exports = router;
