import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/footer.css';
import logo from "../src/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <>

            <footer className="footer p-5">
                <div className="container Footer-container">
                    <div className="row text-center text-md-start">
                        {/* Logo & Subscription */}
                        <div className="col-md-4 text-center">
                            <img src={logo} alt="" className="mb-4" />
                            <div className="d-flex justify-content-center">
                                <input type="email" className="form-control w-75" placeholder="Email Address" />
                                <button className="btn-subscribe ms-2">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                            <div className="social-icons mt-3">
                                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-md-4 mt-4 mt-md-0">
                            <h5>Contact</h5>
                            <p className="contact-info">
                                <FontAwesomeIcon icon={faEnvelope} /> priyanshuchauhan896@gmail.com
                            </p>
                            <p className="contact-info">
                                <FontAwesomeIcon icon={faPhone} /> +91-9289033065
                            </p>
                            <p className="contact-info">
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> Ward no. 2, Mehrauli-110030
                            </p>
                        </div>

                        {/* Explore & Support */}
                        <div className="col-md-4 mt-4 mt-md-0">
                            <div className="row">
                                <div className="col-6">
                                    <h5>Explore</h5>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Home</a></li>
                                        <li>
                                            <a href="#">Products</a>
                                        </li>
                                       
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <h5>Support</h5>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Support Desk</a></li>
                                        <li><a href="#">FAQs</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                </div>
            </footer>
            <div className="d-flex flex-wrap justify-content-between container pt-3 py-2">
                <p>Copyright©2025 Priyanshu Drone Project</p>
                <div>
                <a className="text-decoration-none text-black" href="#">Privacy Policy</a> | <a  className="text-decoration-none text-black" href="#">Terms & Services</a>
                </div>
            </div>

        </>
    );
};

export default Footer;
