import '../components/css/navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../src/assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./login.css";
import "font-awesome/css/font-awesome.min.css";
import Illlustration from "../src/assets/Illustration.png";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSignup = async () => {
        const { firstName, lastName, email, password, confirmPassword } = formData;

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setErrorMessage("Please fill in all the details.");
            new window.bootstrap.Modal(document.getElementById("errorModal")).show();
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match!");
            new window.bootstrap.Modal(document.getElementById("errorModal")).show();
            return;
        }

        try {
            const response = await fetch("https://drone-website-backend-aeqq.onrender.com/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ firstName, lastName, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Store JWT token and user data
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                // Show success modal
                const successModal = new window.bootstrap.Modal(document.getElementById("successModal"));
                successModal.show();

                // Hide modal and redirect
                setTimeout(() => {
                    successModal.hide();
                    document.querySelector(".modal-backdrop")?.remove();
                    navigate("/home");
                }, 2000);
            } else {
                setErrorMessage(data.message || "Signup failed. Try again.");
                new window.bootstrap.Modal(document.getElementById("errorModal")).show();
            }
        } catch (error) {
            setErrorMessage("Server error. Please try again later.");
            new window.bootstrap.Modal(document.getElementById("errorModal")).show();
        }
    };

    return (
        <div className='Navbar-section'>
            <div className="d-flex">
                <div className="left-side col-lg-3 " style={{ height: "100vh" }}>
                    <div>
                        <img src={logo} alt="Logo" />
                        <div className="name-center">
                            <h1>FLY HIGHER</h1>
                        </div>
                    </div>
                </div>
                <div className="right-side col-lg-9">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container">
                            <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav d-flex justify-content-around gap-5">
                                    <li className="nav-item"><a className="nav-link text-white fw-bold text-decoration-none" href="#">HOME</a></li>
                                    <li className="nav-item"><a className="nav-link text-white fw-bold text-decoration-none" href="#">ABOUT US</a></li>
                                    <li className="nav-item"><a className="nav-link text-white fw-bold text-decoration-none" href="#">PRODUCTS</a></li>
                                    <li className="nav-item"><a className="nav-link text-white fw-bold text-decoration-none" href="#">CONTACT US</a></li>
                                </ul>
                            </div>
                            <div className="d-flex align-items-center gap-4 me-5">
                                <i className="fas fa-shopping-bag text-white me-3"></i>
                                <Link to="/signup" className="btn btn-light my-primary-text my-button-secondary text-decoration-none fw-bold">SIGN UP</Link>
                            </div>
                        </div>
                    </nav>

                    <section className="container d-flex signup-container align-items-center justify-content-center text-start">
                        <div>
                            <div className="p-4">
                                <h2>Create an account</h2>
                                <p>Already have an account? <a href="/login">Log in</a></p>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>First name</label>
                                        <input type="text" className="form-control" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Last name</label>
                                        <input type="text" className="form-control" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                </div>

                                <div className="mt-3 mb-3 row">
                                    <div className="col-md-6">
                                        <label>Password</label>
                                        <div className="input-group">
                                            <input type={showPassword ? "text" : "password"} className="form-control" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                            <span className="input-group-text" onClick={toggleShowPassword} style={{ cursor: "pointer" }}>
                                                <i className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label>Confirm your password</label>
                                        <div className="input-group">
                                            <input type={showPassword ? "text" : "password"} className="form-control" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                                            <span className="input-group-text" onClick={toggleShowPassword} style={{ cursor: "pointer" }}>
                                                <i className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <small className="text-muted">Use 8 or more characters with a mix of letters, numbers & symbols</small>

                                <div className="form-check mt-2">
                                    <input type="checkbox" className="form-check-input" checked={showPassword} onChange={toggleShowPassword} />
                                    <label className="form-check-label">Show password</label>
                                </div>

                                <button className="btn my-button-primary w-100 mt-4" onClick={handleSignup}>Create an account</button>
                            </div>
                        </div>
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
                        <div className="modal-body">Account created successfully! Redirecting...</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
