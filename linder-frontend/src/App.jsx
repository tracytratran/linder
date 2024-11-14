import { Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo";
import Feed from "./pages/Feed";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Logo />
      <Routes>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route index element={<Feed />}></Route>
      </Routes>
    </>
  );
}

export default App;
