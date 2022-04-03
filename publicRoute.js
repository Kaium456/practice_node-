const express = require('express');

const publicRoute = express.Router();

publicRoute
    .route('/user')
    .all((req, res, next) => {
        console.log('i am logging something');
        next();
    })
    .get((req, res) => {
        res.send('Get');
    })
    .post((req, res) => {
        res.send('post');
    });
module.exports = publicRoute;
