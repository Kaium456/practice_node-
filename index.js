const express = require('express');
const adminRouter = require('./adminRouter');
const publicRoute = require('./publicRoute');

const app = express();
app.use('/admin', adminRouter);
app.use('/', publicRoute);

app.listen(3000, () => {
    console.log('listing on port 3000');
});
