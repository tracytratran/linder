import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import Feed from "./pages/Feed";
import SignUp from "./pages/SignUp";
import Message from "./pages/Message";
import MessageList from "./pages/MessageList";

function App() {
  return (
    <div
      className="leading-6"
      style={{ fontFamily: "'Poppins', san-serif", fontOpticalSizing: "auto" }}
    >
      <Logo />
      <Routes>
        <Route index element={<SignUp />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/message" element={<MessageList />}></Route>
        <Route path="/message/:userId" element={<Message />}></Route>
      </Routes>
    </div>
  );
}

export default App;
