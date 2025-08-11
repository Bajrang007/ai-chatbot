import React, { useState, useRef, useEffect } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Error: " + (data.error || "Unknown error") },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Network error. Please try again." },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>AI Chatbot</div>
      <div style={styles.chatBox} ref={chatBoxRef}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              ...styles.message,
              ...(msg.sender === "user"
                ? styles.userMessage
                : styles.botMessage),
            }}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div style={styles.botMessage}>Typing...</div>}
      </div>
      <form onSubmit={handleSubmit} style={styles.inputArea}>
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          disabled={loading}
          autoFocus
        />
        <button type="submit" style={styles.button} disabled={loading}>
          Send
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: 400,
    maxWidth: "95vw",
    margin: "20px auto",
    borderRadius: 10,
    boxShadow: "0 8px 24px rgba(99, 99, 99, 0.2)",
    display: "flex",
    flexDirection: "column",
    height: "80vh",
    backgroundColor: "white",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    backgroundColor: "#4a90e2",
    padding: 15,
    borderRadius: "10px 10px 0 0",
    color: "white",
    fontWeight: "700",
    fontSize: "1.2rem",
    textAlign: "center",
  },
  chatBox: {
    flexGrow: 1,
    padding: 15,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  message: {
    maxWidth: "75%",
    padding: "10px 15px",
    borderRadius: 20,
    fontSize: "0.95rem",
    lineHeight: 1.3,
    wordBreak: "break-word",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#4a90e2",
    color: "white",
    borderBottomRightRadius: 5,
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e1e8f7",
    color: "#333",
    borderBottomLeftRadius: 5,
  },
  inputArea: {
    display: "flex",
    borderTop: "1px solid #ddd",
  },
  input: {
    flexGrow: 1,
    border: "none",
    padding: 15,
    fontSize: "1rem",
    borderRadius: "0 0 0 10px",
  },
  button: {
    backgroundColor: "#4a90e2",
    border: "none",
    color: "white",
    padding: "0 20px",
    fontSize: "1.1rem",
    cursor: "pointer",
    borderRadius: "0 0 10px 0",
    transition: "background 0.3s ease",
  },
};

export default App;
