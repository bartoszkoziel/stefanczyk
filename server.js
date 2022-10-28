const express = require("express")
const app = express()
const PORT = 3000;
const fs = require("fs")

app.use(express.static('static')) // serwuje stronę index.html
app.use(express.static('static/cwiczenia')) // serwuje pozostałe pliki, czyli ćwiczenia



app.get("/cwiczenia", function (req, res) {
    console.log(999);
    fs.readdir(__dirname + "/static/cwiczenia", function (err, files) {
        if (err) {
            return console.log(err)
        }
        else {
            res.send(JSON.stringify(files))
        }
    })
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})