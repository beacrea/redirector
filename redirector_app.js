// Vars
const express = require('express');
const app = express();
const port = 80;

// Index
app.get('/', function (req, res) {
    res.send('This is Coty Beasley\'s redirection service.');
});

/* Ireland photo book
   Format: year-trip-asset-number
   Example: 16ildv1
 */
app.get('/hello', function (req, res) {
    res.send('Ohai!');
});

// Port listening text
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});