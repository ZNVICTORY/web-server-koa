module.exports = function createSocket(io) {
   io.on('connection', function(socket) {
     socket.on('sendmsg', function(data) {
       console.log(data)
     })
   })
}