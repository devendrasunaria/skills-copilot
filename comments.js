// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Configure express to use ejs
app.set('view engine', 'ejs');

// Configure express to use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure express to serve static files in the public directory
app.use(express.static('public'));