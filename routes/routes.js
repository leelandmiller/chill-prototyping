const express = require('express');
const path    = require('path');
const router  = express.Router();

router.get('*', (req, res) => {
    if (process.env.NODE_ENV === 'production') {
        let build = 'build';
    } else {
        let build = 'public';
    }

    res.sendFile(path.resolve(__dirname, '../client', build, 'index.html'));
});

module.exports = router;
