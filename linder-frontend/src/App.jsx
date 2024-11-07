import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route index element={<Feed />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
