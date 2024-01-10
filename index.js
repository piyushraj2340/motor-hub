require('dotenv').config();
require('./src/db/db');

const express = require('express');

const app = express();

const cookieParser = require('cookie-parser');

const path = require('path');
const port = process.env.port || 8000;

app.use(express.json());
app.use(cookieParser());

// routes
const authRoute = require("./src/router/auth");
const user = require("./src/router/user");
const contactUs = require("./src/router/contactUs")


app.use('/auth', authRoute);
app.use('/user', user);
app.use('/help', contactUs);

if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
} else {
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})


app.listen(port, () => {
    console.log("listening to port 8000");
})