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

// Inisheer Video
app.get('/16ildv1', function (req, res) {
   res.redirect(301, 'https://vimeo.com/459800355');
});

// Cliffs at Kilkee & Bridges of Ross Video
app.get('/16ildv2', function (req, res) {
   res.redirect(301, 'https://vimeo.com/459990631');
});

// Ross Errilly Friary Video
app.get('/16ildv3', function (req, res) {
   res.redirect(301, 'https://vimeo.com/460022494');
});

// Loophead Lighthouse Video
app.get('/16ildv4', function (req, res) {
   res.redirect(301, 'https://vimeo.com/460370316');
});

// Ballinskelligs Abbey & Castle Video
app.get('/16ildv5', function (req, res) {
   res.redirect(301, 'https://vimeo.com/460411796');
});

// Muckross Abbey Video
app.get('/16ildv6', function (req, res) {
   res.redirect(301, 'https://vimeo.com/460431341');
});

// Port listening text
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});