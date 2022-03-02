const express = require("express")

const app = express()
require("dotenv").config()

app.use(express.static(__dirname + "/client/build"))

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html")
})

app.listen(process.env.PORT || 3000)
