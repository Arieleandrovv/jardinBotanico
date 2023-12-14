
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();


app.use(cors({ origin: '*' }));
app.use(morgan('dev'));
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({extended:true}));

app.use(require('./routes/index.js'));



module.exports = app;