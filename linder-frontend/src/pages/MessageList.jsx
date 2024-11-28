import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

function MessagesList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/src/users.json");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col bg-gray-100">
      <h1 className="text-lg font-semibold px-4 py-4 bg-white shadow">
        Messages
      </h1>

      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <Link
            key={user.id}
            to={`/message/${user.id}`}
            className="flex items-center p-4 border-b-[2px] border-gray hover:bg-gray-200 transition"
          >
            <img
              src={user.profilePicture}
              alt={user.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-500">Hey! How is it going?</p>
            </div>
          </Link>
        ))}
      </div>
      <NavigationBar />
    </div>
  );
}

export default MessagesList;
