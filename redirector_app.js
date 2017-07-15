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
   Example: 2016-ireland-video-0
 */
app.get('/2016-ireland-video-0', function (req, res) {
    res.redirect(302, 'https://www.youtube.com/watch?v=Qh5ZpjBB4UM');
});

// Port listening text
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});