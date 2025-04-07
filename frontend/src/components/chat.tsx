// import { useState, useEffect } from "react";
// import { io, Socket } from "socket.io-client";

// const socket: Socket = io("http://localhost:5000");

// const Chat = () => {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     socket.on("receiveMessage", (newMessage: string) => {
//       setMessages((prev) => [...prev, newMessage]);
//     });

//     return () => {
//       socket.disconnect(); // ✅ Wrap in a function to avoid returning the Socket instance
//     };
//   }, []);

//   const sendMessage = () => {
//     if (message.trim()) {
//       socket.emit("sendMessage", message);
//       setMessage("");
//     }
//   };

//   return (
//     <div className="p-4 border rounded shadow">
//       <h2 className="text-xl font-bold">Live Chat</h2>
//       <div className="h-60 overflow-y-auto border p-2 my-2">
//         {messages.map((msg, index) => (
//           <p key={index} className="bg-gray-200 p-2 rounded my-1">{msg}</p>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         className="border p-2 rounded w-full"
//         placeholder="Type a message..."
//       />
//       <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded w-full mt-2">
//         Send
//       </button>
//     </div>
//   );
// };

// export default Chat;
// import { useState, useEffect } from "react";
// import { io, Socket } from "socket.io-client";

// const Chat = () => {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [message, setMessage] = useState("");
//   const [socket, setSocket] = useState<Socket | null>(null);

//   useEffect(() => {
//     const newSocket = io("http://localhost:5183");
//     setSocket(newSocket);

//     newSocket.on("receiveMessage", (newMessage: string) => {
//       setMessages((prev) => [...prev, newMessage]);
//     });

//     return () => {
//       newSocket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (message.trim() && socket) {
//       socket.emit("sendMessage", message);
//       setMessage("");
//     }
//   };

//   return (
//     <div className="p-4 border rounded shadow">
//       <h2 className="text-xl font-bold">Live Chat</h2>
//       <div className="h-60 overflow-y-auto border p-2 my-2">
//         {messages.map((msg, index) => (
//           <p key={index} className="bg-gray-200 p-2 rounded my-1">{msg}</p>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         className="border p-2 rounded w-full"
//         placeholder="Type a message..."
//       />
//       <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded w-full mt-2">
//         Send
//       </button>
//     </div>
//   );
// };

// export default Chat;
// import { useState, useEffect } from "react";
// import { io, Socket } from "socket.io-client";

// const Chat = () => {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [message, setMessage] = useState("");
//   const [socket, setSocket] = useState<Socket | null>(null);
//   const [typing, setTyping] = useState(false);

//   useEffect(() => {
//     const newSocket = io("http://localhost:5183");
//     setSocket(newSocket);

//     newSocket.on("receiveMessage", (newMessage: string) => {
//       setMessages((prev) => [...prev, newMessage]);
//     });

//     newSocket.on("userTyping", () => {
//       setTyping(true);
//       setTimeout(() => setTyping(false), 2000); // Remove after 2 seconds
//     });

//     return () => {
//       newSocket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (message.trim() && socket) {
//       socket.emit("sendMessage", message);
//       setMessage("");
//     }
//   };

//   const handleTyping = () => {
//     if (socket) socket.emit("typing");
//   };

//   return (
//     <div className="p-2 border rounded shadow w-80 bg-white">
//       <h2 className="text-md font-bold text-center mb-2">Live Chat</h2>
      
//       <div className="h-40 overflow-y-auto border p-2 mb-2 bg-gray-100 rounded">
//         {messages.map((msg, index) => (
//           <p key={index} className="bg-blue-500 text-white p-2 rounded-md my-1 text-sm w-fit">
//             {msg}
//           </p>
//         ))}
//         {typing && <p className="text-gray-500 italic text-sm">User is typing...</p>}
//       </div>

//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         onKeyPress={handleTyping}
//         className="border p-2 rounded w-full text-sm"
//         placeholder="Type a message..."
//       />

//       <button 
//         onClick={sendMessage} 
//         className="bg-blue-500 text-white p-1 rounded w-full mt-2 text-sm"
//       >
//         Send
//       </button>
//     </div>
//   );
// };

// export default Chat;
// import { useState, useEffect } from "react";
// import { io, Socket } from "socket.io-client";
// import { MessageCircle } from "lucide-react"; // Importing an icon for the chat button

// const Chat = () => {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [message, setMessage] = useState("");
//   const [socket, setSocket] = useState<Socket | null>(null);
//   const [typing, setTyping] = useState(false);
//   const [isOpen, setIsOpen] = useState(false); // Toggle chat box

//   useEffect(() => {
//     const newSocket = io("http://localhost:5183");
//     setSocket(newSocket);

//     newSocket.on("receiveMessage", (newMessage: string) => {
//       setMessages((prev) => [...prev, newMessage]);
//     });

//     newSocket.on("userTyping", () => {
//       setTyping(true);
//       setTimeout(() => setTyping(false), 2000);
//     });

//     return () => {
//       newSocket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (message.trim() && socket) {
//       socket.emit("sendMessage", message);
//       setMessage("");
//     }
//   };

//   const handleTyping = () => {
//     if (socket) socket.emit("typing");
//   };

//   return (
//     <>
//       {/* Floating Chat Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
//       >
//         <MessageCircle size={24} />
//       </button>

//       {/* Chat Box */}
//       {isOpen && (
//         <div className="fixed bottom-16 right-4 bg-white shadow-lg rounded-lg w-72 p-3 border">
//           <div className="flex justify-between items-center">
//             <h2 className="text-md font-bold">Live Chat</h2>
//             <button onClick={() => setIsOpen(false)} className="text-gray-500 text-lg">&times;</button>
//           </div>

//           <div className="h-40 overflow-y-auto border p-2 mb-2 bg-gray-100 rounded">
//             {messages.map((msg, index) => (
//               <p key={index} className="bg-blue-500 text-white p-2 rounded-md my-1 text-sm w-fit">
//                 {msg}
//               </p>
//             ))}
//             {typing && <p className="text-gray-500 italic text-sm">User is typing...</p>}
//           </div>

//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyPress={handleTyping}
//             className="border p-2 rounded w-full text-sm"
//             placeholder="Type a message..."
//           />

//           <button
//             onClick={sendMessage}
//             className="bg-blue-500 text-white p-1 rounded w-full mt-2 text-sm"
//           >
//             Send
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default Chat;
//  import { useState, useEffect } from "react";
// import { io, Socket } from "socket.io-client";
// import { MessageCircle, X } from "lucide-react";

// const Chat = () => {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [message, setMessage] = useState("");
//   const [socket, setSocket] = useState<Socket | null>(null);
//   const [isOpen, setIsOpen] = useState(false); // Toggle chat box

//   useEffect(() => {
//     const newSocket = io("http://localhost:5183");
//     setSocket(newSocket);

//     newSocket.on("receiveMessage", (newMessage: string) => {
//       setMessages((prev) => [...prev, newMessage]);
//     });

//     return () => {
//       newSocket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (message.trim() && socket) {
//       socket.emit("sendMessage", message);
//       setMessages((prev) => [...prev, message]); // Add own message instantly
//       setMessage("");
//     }
//   };

//   return (
//     <div>
//       {/* Chat Bubble Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
//       >
//         {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
//       </button>

//       {/* Chat Box */}
//       {isOpen && (
//         <div className="fixed bottom-16 right-6 w-72 bg-white shadow-lg border rounded-lg p-3">
//           <h2 className="text-lg font-bold text-center">Live Chat</h2>

//           {/* Chat Messages */}
//           <div className="h-40 overflow-y-auto border p-2 my-2 rounded flex flex-col">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-200 text-sm px-3 py-2 rounded-md max-w-max self-start"
//               >
//                 {msg}
//               </div>
//             ))}
//           </div>

//           {/* Input Box */}
//           <div className="flex">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="border p-2 rounded flex-grow text-sm"
//               placeholder="Type a message..."
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-blue-500 text-white p-2 rounded ml-2 hover:bg-blue-600 transition text-sm"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chat;
// import { useState, useEffect } from "react";
// import { io, Socket } from "socket.io-client";
// import { MessageCircle, X } from "lucide-react";
// //import { useState, useEffect } from "react";


// const Chat = () => {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [message, setMessage] = useState("");
//   const [socket, setSocket] = useState<Socket | null>(null);
//   const [isOpen, setIsOpen] = useState(false); // Toggle chat box

//   useEffect(() => {
//     const newSocket = io("http://localhost:5183");
//     setSocket(newSocket);

//     newSocket.on("receiveMessage", (newMessage: string) => {
//       setMessages((prev) => [...prev, newMessage]);
//     });

//     return () => {
//       newSocket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (message.trim() && socket) {
//       socket.emit("sendMessage", message);
//       setMessages((prev) => [...prev, message]); // Add own message instantly
//       setMessage("");
//     }
//   };

//   return (
//     <div>
//       {/* Chat Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
//       >
//         {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
//       </button>

//       {/* Chat Box */}
//       {isOpen && (
//         <div className="fixed bottom-16 right-6 w-72 bg-white shadow-lg border rounded-lg p-3">
//           <h2 className="text-lg font-bold text-center">Live Chat</h2>

//           {/* Chat Messages */}
//           <div className="h-40 overflow-y-auto border p-2 my-2 rounded flex flex-col">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-200 text-sm px-3 py-2 rounded-md max-w-max self-start shadow-md mb-2" // ✅ Added `mb-2` for spacing
//               >
//                 {msg}
//               </div>
//             ))}
//           </div>

//           {/* Input Box */}
//           <div className="flex">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="border p-2 rounded flex-grow text-sm"
//               placeholder="Type a message..."
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-blue-500 text-white p-2 rounded ml-2 hover:bg-blue-600 transition text-sm"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chat;
import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { MessageCircle, X } from "lucide-react";

const sender = "User"; // Change this to actual user name

const Chat = () => {
  const [messages, setMessages] = useState<{ sender: string; message: string }[]>([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isOpen, setIsOpen] = useState(false); // Toggle chat box

  useEffect(() => {
    const newSocket = io("http://localhost:5183");
    setSocket(newSocket);

    // Load chat history
    newSocket.on("chatHistory", (history) => {
      setMessages(history);
    });

    // Listen for new messages
    newSocket.on("receiveMessage", (newMessage: { sender: string; message: string }) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() && socket) {
      const newMessage = { sender, message };
      socket.emit("sendMessage", newMessage);
      setMessages((prev) => [...prev, newMessage]); // Add own message instantly
      setMessage("");
    }
  };

  return (
    <div>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-16 right-6 w-72 bg-white shadow-lg border rounded-lg p-3">
          <h2 className="text-lg font-bold text-center">Live Chat</h2>

          {/* Chat Messages */}
          <div className="h-40 overflow-y-auto border p-2 my-2 rounded flex flex-col">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="bg-gray-200 text-sm px-3 py-2 rounded-md max-w-max self-start shadow-md mb-2"
              >
                <strong>{msg.sender}:</strong> {msg.message}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border p-2 rounded flex-grow text-sm"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white p-2 rounded ml-2 hover:bg-blue-600 transition text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
