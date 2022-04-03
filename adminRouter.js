const express = require('express');

const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
    res.send('this is admin router');
});
adminRouter.get('/login', (req, res) => {
    res.send('this is login');
});

module.exports = adminRouter;
