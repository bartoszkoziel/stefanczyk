const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")
const formidable = require('formidable');

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/index1.html"))
})

app.post('/handleUpload', function (req, res) {

    let form = formidable({});

    form.uploadDir = __dirname + '/static/upload/'  // folder do zapisu zdjęcia

    form.multiples = true

    form.keepExtensions = true   // zapis z rozszerzeniem pliku 

    form.parse(req, function (err, fields, files) {
        let tab = []
        let obj1 = {
            date: fields.date,
            text: fields.text
        }

        let obj2 = {
            size: files.imagetoupload.size,
            path: files.imagetoupload.path,
            name: files.imagetoupload.name,
            type: files.imagetoupload.type,
            mtime: files.imagetoupload.mtime
        }

        console.log(files.size)

        tab.push(obj1)
        tab.push(obj2)

        res.setHeader("content-type", "application/json")

        res.send(JSON.stringify(tab, null, 4))
    });
});

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})