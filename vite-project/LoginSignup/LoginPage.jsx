import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/css/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../src/assets/logo.png";
import Illlustration from "../src/assets/Illustration.png";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleLogin = async () => {
        const { email, password } = formData;

        if (!email || !password) {
            setErrorMessage("Please fill in all fields.");
            new window.bootstrap.Modal(document.getElementById("errorModal")).show();
            return;
        }

        try {
            const response = await fetch("https://drone-website-backend-aeqq.onrender.com/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token); // Store JWT
                localStorage.setItem("user", JSON.stringify(data.user)); // Store user data
                new window.bootstrap.Modal(document.getElementById("successModal")).show();
                setTimeout(() => {
                    document.querySelector(".modal-backdrop")?.remove();
                    navigate("/home");
                    window.location.reload(); // Refresh the Home page
                }, 2000);

            } else {
                setErrorMessage(data.message);
                new window.bootstrap.Modal(document.getElementById("errorModal")).show();
            }
        } catch (error) {
            setErrorMessage("Server error. Try again later.");
            new window.bootstrap.Modal(document.getElementById("errorModal")).show();
        }
    };


    return (
        <div className="Navbar-section">
            <div className="d-flex">
                {/* Left Side */}
                <div className="left-side col-lg-3" style={{ height: "100vh" }}>
                    <div>
                        <img src={logo} alt="Logo" />
                        <div className="name-center">
                            <h1>FLY HIGHER</h1>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="right-side col-lg-9">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            {/* Navbar Toggler for Mobile */}
                            <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            {/* Navbar Links */}
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav d-flex justify-content-around gap-5">
                                    <li className="nav-item">
                                        <Link className="nav-link text-white fw-bold text-decoration-none" to="/">HOME</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white fw-bold text-decoration-none" to="/about">ABOUT US</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white fw-bold text-decoration-none" to="/products">PRODUCTS</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white fw-bold text-decoration-none" to="/contact">CONTACT US</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Right Side: Cart Icon & Sign Up Button */}
                            <div className="d-flex align-items-center gap-4 me-5">
                                <i className="fas fa-shopping-bag text-white me-3"></i>
                                <Link to="/signup" className="btn btn-light my-primary-text my-button-secondary fw-bold text-decoration-none">
                                    SIGN UP
                                </Link>
                            </div>
                        </div>
                    </nav>

                    {/* Login Section */}
                    <section className="mt-5 container d-flex signup-container align-items-center justify-content-between text-start">
                        {/* Login Form */}
                        <div className="p-4 w-500">
                            <h2>Log In</h2>
                            <p>
                                Haven't signed up? <Link to="/signup">Sign Up</Link>
                            </p>

                            {/* Email Field */}
                            <div className="mt-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            {/* Password Field */}
                            <div className="mt-3 mb-3">
                                <label>Password</label>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                    <span className="input-group-text" onClick={toggleShowPassword} style={{ cursor: "pointer" }}>
                                        <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                    </span>
                                </div>
                            </div>

                            {/* Show Password Checkbox */}
                            <div className="form-check mt-2">
                                <input type="checkbox" className="form-check-input" checked={showPassword} onChange={toggleShowPassword} />
                                <label className="form-check-label">Show password</label>
                            </div>

                            {/* Login Button */}
                            <div className="d-flex align-items-center justify-content-between">
                                <p className="text-center mt-5">
                                    <Link to="/signup">Sign Up instead</Link>
                                </p>
                                <button className="btn my-button-primary w-80 mt-4" onClick={handleLogin}>Log In</button>
                            </div>
                        </div>

                        {/* Illustration Image */}
                        <div>
                            <img src={Illlustration} alt="Illustration" />
                        </div>
                    </section>
                </div>
            </div>

            {/* Error Modal */}
            <div className="modal fade" id="errorModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-danger">Error</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">{errorMessage}</div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            <div className="modal fade" id="successModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-success">Success</h5>
                        </div>
                        <div className="modal-body">Login successful! Redirecting...</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
