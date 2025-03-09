import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "../LoginSignup/LoginPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignupPage from "../LoginSignup/SignupPage";
import Logout from "../LoginSignup/logOut";
import About from "./About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
