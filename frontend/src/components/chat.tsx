
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
    const newSocket = io("https://disaster-relief-app-3.onrender.com");
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
