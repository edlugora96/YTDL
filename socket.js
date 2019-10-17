let socket = {};
module.exports = {
  startIO: app => {
    const http = require("http").Server(app);
    const io = require("socket.io")(http);
    socket.io = io;
  },
  socket
};
