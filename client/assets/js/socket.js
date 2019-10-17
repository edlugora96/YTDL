import openSocket from "socket.io-client";
const socket = openSocket("/");

const subscribeVideoLoaded = cb => {
  socket.on("video_loaded", data => cb(null, data));
};

export { subscribeToTimer };
