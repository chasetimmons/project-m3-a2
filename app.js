const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

// morgan is used for debugging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// json is used for injecting the body attribute in the pipeline
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// get home page
app.use((req, res, next) => {
    console.log('Hello from the ~MiDdLeWaRe~!');
    next();
});

// declare routers
var salesRouter = require('./routes/salesRoutes');
var customerRouter = require('./routes/customersRoutes');
//const userRouter = require('./routes/userRoutes');

// middleware routes
app.use('/api/v1/sales', salesRouter);
app.use('/api/v1/customers', customerRouter);
//app.use('/api/v1/users', userRouter);

module.exports = app;