const express = require("express")
const app = express()
const path = require("path")
const formidable = require('formidable');

const hbs = require('express-handlebars');
app.set('views', path.join(__dirname, 'views'));        // ustalamy katalog views
app.engine('hbs', hbs({ defaultLayout: 'main1.hbs' }));  // domyślny layout, potem można go zmienić
app.set('view engine', 'hbs');

var data = []

app.get("/", function (req, res) {
    res.redirect("/upload")
})

app.get("/upload", function (req, res) {
    res.render("upload.hbs")
})

app.post('/handleUpload', function (req, res) {

    let form = formidable({});
    form.keepExtensions = true
    form.multiples = true

    form.uploadDir = __dirname + '/static/upload/'

    form.parse(req, function (err, fields, files) {

        //console.log("----- przesłane pola z formularza ------");

        //console.log(fields);

        //console.log("----- przesłane formularzem pliki ------");

        //console.log(files);
        data.push(files)
        console.log(JSON.stringify(data))

        res.render("upload.hbs")
    });
});

app.use(express.static('static'))
app.listen(3000, function () {
    console.log("running on port 3000");
})