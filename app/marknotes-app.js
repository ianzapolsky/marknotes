var fs = require('fs');
var marked = require('marked');
var exec = require('child_process').exec;
var express = require('express');
var params = require('express-params');
var app = express();

app.set('views', './templates');
app.set('view engine', 'jade');

app.get('/notes', function(req, res) {
    fs.readdir('./notes_html', function(err, files) {
        res.render('notes', { files: files.map(function(file) {
            return file.split('.')[0];
        }) });
    });
});

app.get('/notes/:file', function(req, res) {
    var title = req.params.file;
    var file = title +'.html';
    fs.readFile('./notes_html/'+ file, 'utf8', function(err, data) {
        if (!err) {
            res.render('note', { title: title, contents: data });
        } else {
            res.status(404).send('File not found');
        }
    });
});

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));

app.listen(3000, function () {
    console.log('notebook served at http://localhost:3000');
    exec('open http://localhost:3000/notes');
});
