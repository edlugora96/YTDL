import openSocket from "socket.io-client";
const socket = openSocket("/");

const subscribeVideoLoaded = cb => {
  socket.on("video_loaded", data => cb(null, data));
};

const subscribeChumkVideoLoaded = cb => {
  socket.on("chunk_video", data => cb(null, data));
};

export { subscribeVideoLoaded, subscribeChumkVideoLoaded };
