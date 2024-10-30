import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Feed from "./pages/Feed";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route index element={<Feed />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
