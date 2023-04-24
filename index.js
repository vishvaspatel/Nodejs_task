const express = require('express');
const port = process.env.PORT || 8000;
const cookieparser = require('cookie-parser');
var cors = require('cors');
var bodyParser = require('body-parser');

const app = express();
const path = require('path');
const db = require('./config/mongoose')

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(cookieparser());


app.use('/', require('./routes/route'));
app.use(express.static('static'));


app.listen(port, function (err) {
    if (err) {
        console.log("Error to start server!!!");
        return;
    }

    console.log("Server is running on the port: ", port);
})