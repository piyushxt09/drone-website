import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "../LoginSignup/LoginPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignupPage from "../LoginSignup/SignupPage";
import Logout from "../LoginSignup/logOut";
import About from "./About";
import Contact from "../Contact/Contact";
import Loader from "./Loader";
import Products from "./Products";

function App() {
  return (
    <>
      <Loader />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
