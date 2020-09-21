// Vars
const express = require('express');
const app = express();
const port = 80;

// Index
app.get('/', function (req, res) {
    res.send('This is Coty Beasley\'s url redirection service.');
});

/* Ireland photo book
   Format: year-trip-asset-number
   Example: 16ildv1
 */
app.get('16ildv1', function (req, res) {
    res.redirect(302, 'https://vimeo.com/459800355');
});

// Port listening text
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});