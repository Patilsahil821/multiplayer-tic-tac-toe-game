import io from "socket.io-client"

var socket = io(window.location.href)

export default socket
