import { Link, useLocation } from "react-router-dom";
import IconFilled from "./IconFilled";

function NavigationBar() {
  const location = useLocation();

  // Determine if a route is active
  const isActive = (path) => {
    if (path === "/message") {
      // Check if the path starts with "/message"
      return location.pathname.startsWith("/message");
    }
    return location.pathname === path;
  };

  return (
    <div className="absolute flex flex-row justify-center items-center w-full bottom-0 border- bg-white">
      <div className="flex flex-row w-full md:w-1/2 justify-between items-center">
        {/* Home Icon */}
        <Link to="/feed">
          <IconFilled
            name="home"
            className={`p-4 text-4xl ${
              isActive("/feed")
                ? "border-t-4 border-sky-700 text-sky-700"
                : "text-gray-500"
            }`}
          />
        </Link>

        {/* Star Icon */}
        <Link>
          <IconFilled
            name="star"
            className={`p-4 text-4xl ${
              isActive("/favorites")
                ? "border-t-4 border-sky-700 text-sky-700"
                : "text-gray-500"
            }`}
          />
        </Link>

        {/* Messaging Icon */}
        <Link to="/message">
          <IconFilled
            name="sms"
            className={`p-4 text-4xl ${
              isActive("/message")
                ? "border-t-4 border-sky-700 text-sky-700"
                : "text-gray-500"
            }`}
          />
        </Link>

        {/* More Options Icon */}
        <Link>
          <IconFilled
            name="more_horiz"
            className={`p-4 text-4xl ${
              isActive("/more")
                ? "border-t-4 border-sky-700 text-sky-700"
                : "text-gray-500"
            }`}
          />
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
