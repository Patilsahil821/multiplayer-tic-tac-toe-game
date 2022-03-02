const express = require("express")

const app = express()
require("dotenv").config()

const { Server } = require("socket.io")

var box = Array(9).fill("")

const http = app.listen(process.env.PORT || 3000)

const io = new Server(http)

io.on("connect", (socket) => {
  socket.on("send box", ({ data, index, chance }) => {
    box[index] = data
    console.log(data, index, chance)
    io.emit("get box", { square: box, chance })
  })
  socket.on("disconnect", () => {
    box = Array(9).fill("")
  })
})

app.use(express.static(__dirname + "/client/build"))

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html")
})
