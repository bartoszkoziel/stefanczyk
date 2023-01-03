const express = require("express")
const app = express()
const path = require("path")
const formidable = require('formidable')

const hbs = require('express-handlebars')
app.set('views', path.join(__dirname, 'views'))         // ustalamy katalog views
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' }))   // domyślny layout, potem można go zmienić
app.set('view engine', 'hbs')

app.get("/", function (req, res) {
    res.redirect("/filemanager")
})

app.get("/filemanager", function (req, res) {
    res.render("index.hbs")
})

app.post('/handleUpload', function (req, res) {

    let form = formidable({})
    form.keepExtensions = true
    form.multiples = true

    form.uploadDir = __dirname + '/static/upload/'

    form.parse(req, function (err, fields, files) {

        console.log("----- przesłane pola z formularza ------");
        console.log(fields);

        console.log("----- przesłane formularzem pliki ------");
        console.log(files);

        res.render("index.hbs")
    })
})

app.use(express.static('static'))
app.listen(3000, function () {
    console.log("running on port 3000");
})