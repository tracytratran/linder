import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

function Message() {
  const { userId } = useParams(); // Extract user ID from the URL
  const [matchedUser, setMatchedUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/src/users.json");
        const data = await response.json();
        const user = data.find((u) => u.id === parseInt(userId));
        setMatchedUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [userId]);

  // Current user
  const user = { id: 0, name: "You" };

  const [messages, setMessages] = useState([
    { sender: user.id, text: "Hi there!" },
    { sender: parseInt(userId), text: "Hey! How's it going?" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: user.id, text: newMessage }]);
      setNewMessage("");
    }
  };

  if (!matchedUser) {
    return <div>Loading...</div>; // Display loading state
  }

  return (
    <div className="flex flex-col h-[calc(90vh+1rem)] bg-gray-100 pb-16">
      {/* Header */}
      <div className="flex items-center bg-white shadow-md px-4 py-2">
        <img
          src={matchedUser.profilePicture}
          alt={matchedUser.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <h2 className="text-lg font-semibold">{matchedUser.name}</h2>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === user.id ? "justify-end" : "justify-start"
            } mb-2`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                message.sender === user.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="flex items-center bg-white px-4 py-2 border-t">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm border focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button
          onClick={handleSendMessage}
          className="ml-3 bg-blue-500 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>

      {/* Navigation Bar */}
      <NavigationBar />
    </div>
  );
}

export default Message;
