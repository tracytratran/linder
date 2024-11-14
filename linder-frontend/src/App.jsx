import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import Feed from "./pages/Feed";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Logo />
      <Routes>
        <Route index element={<SignUp />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
      </Routes>
    </>
  );
}

export default App;
