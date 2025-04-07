import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:1217"; // Change to your backend URL in production

export const socket = io(SOCKET_URL, {
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("Connected to WebSocket server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from WebSocket server");
});
