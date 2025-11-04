"use client";

import { useState, useEffect } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Wake up Render backend
  useEffect(() => {
    const wakeUpServer = () => {
      fetch("https://webchatbot-i0px.onrender.com/")
        .then(() => console.log("✅ Render backend wake-up triggered"))
        .catch(() => console.log("⚠️ Failed to wake Render server"));
    };
    wakeUpServer();
    const interval = setInterval(wakeUpServer, 12 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userText = input.trim();
    addMessage("user", userText);
    setInput("");
    addMessage("bot", "Typing...");

    try {
      const res = await fetch("https://webchatbot-i0px.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev.slice(0, -1),
        { sender: "bot", text: data.reply || "No response" },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { sender: "bot", text: "⚠️ Server not responding." },
      ]);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-500 text-white rounded-full w-14 h-14 text-lg shadow-lg"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-blue-500 text-white p-3 font-semibold flex justify-between items-center">
            Chatbot
            <button onClick={() => setOpen(false)} className="text-white font-bold">
              ✖
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto bg-gray-50 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-black self-start mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex border-t border-gray-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 p-2 outline-none text-sm"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 py-2 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
