// Vars
const express = require('express');
const app = express();
const port = 3333;

// Index
app.get('/', function (req, res) {
    res.send('This is Coty Beasley\'s url redirection service.');
});

// Ireland photo book
app.get('/pickles', function (req, res) {
    res.redirect(302, 'http://cotybeasley.name');
});

// Port listening text
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});