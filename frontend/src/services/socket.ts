import { io } from "socket.io-client";

const SOCKET_URL = "wss://disaster-relief-app-3.onrender.com"; // Ensure WebSocket protocol (ws://)

const socket = io(SOCKET_URL, {
  transports: ["websocket"],
  reconnectionAttempts: 5,
  withCredentials: true,  // ✅ Ensure cross-origin cookies are sent
});

socket.on("connect", () => {
  console.log("✅ Connected to WebSocket server");
});

socket.on("disconnect", () => {
  console.log("❌ Disconnected from WebSocket server");
});

export default socket;



