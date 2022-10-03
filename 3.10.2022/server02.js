const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/index2.html"))
})

app.post("/api", function (req, res) {
    console.log(req.body)
    res.setHeader("content-type", "text/plain")
    res.send(JSON.stringify(req.body))

})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})