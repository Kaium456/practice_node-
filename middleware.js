const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
const adminRouter = express.Router();
const loggerWrapper = (options) => function (req, res, next) {
        if (options.log) {
            console.log(
                `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${
                    req.protocol
                } - ${req.ip}`
            );
            next();
        } else {
            throw new Error('Failed to log');
        }
    };

adminRouter.use(loggerWrapper({ log: false }));
app.use('/admin', adminRouter);

adminRouter.get('/dashboard', (req, res) => {
    res.send('dashboard');
});

app.use('/admin', adminRouter);

app.get('/about', (req, res) => {
    res.send('hello world 2');
});

const cathcError = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).send('there was a server side error');
};
adminRouter.use(cathcError);
app.listen(3000, () => {
    console.log('listing on port 3000');
});
