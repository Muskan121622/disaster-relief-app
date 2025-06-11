// // src/hooks/useSocket.ts
// import { useEffect, useState } from "react";
// import { io, Socket } from "socket.io-client";
// const SOCKET_SERVER_URL = import.meta.env.VITE_SOCKET_SERVER_URL;

// export const useSocket = () => {
//   const [socket, setSocket] = useState<Socket | null>(null);
//   const [connected, setConnected] = useState(false);

 
//   useEffect(() => {
//     const newSocket = io(SOCKET_SERVER_URL);
//     setSocket(newSocket);

//     newSocket.on("connect", () => setConnected(true));
//     newSocket.on("disconnect", () => setConnected(false));

//     return () => {
//       newSocket.disconnect();
//     };
//   }, []);

//   return { socket, connected };
// };


// src/hooks/useSocket.ts
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_SERVER_URL = import.meta.env.VITE_SOCKET_SERVER_URL;

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL, {
      transports: ["websocket"], // ✅ Force WebSocket only
      reconnectionAttempts: 3,
      timeout: 10000,   // Optional: limit retries
    });

    setSocket(newSocket);

    const handleConnect = () => setConnected(true);
    const handleDisconnect = () => setConnected(false);

    newSocket.on("connect", handleConnect);
    newSocket.on("disconnect", handleDisconnect);

    return () => {
      newSocket.off("connect", handleConnect);
      newSocket.off("disconnect", handleDisconnect);
      newSocket.disconnect();
    };
  }, []);

  return { socket, connected };
};
