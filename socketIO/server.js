const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

var users = []

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

io.on("connection", function (socket) {
    let user = {
        lp: users.length,
        id: socket.id
    }
    users.push(user)

    console.log("CONNECTED : ", user);
    socket.emit("update", users)

    socket.on("disconnect", function () {
        let index = findIndexOf(socket.id, users)
        users.splice(index, index)
        socket.emit("update", users)
        console.log("DISCONNECTED : ", users[index]);
    })
})

server.listen(3000, function () {
    console.log("listening on port 3000");
})

function findIndexOf(id, users){
    for(let i = 0; i < users.length; i++){
        if(users[i].id == id){
            return i
        }
    }
}
