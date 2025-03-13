import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";
import Header from './Header'
import './contact.css';
import { FaRunning, FaMapMarkerAlt } from "react-icons/fa"; 
import Footer from '../components/Footer';


export default function Contact() {
    return (
        <>
            <Header />
            <section className="contact-section py-5 mt-5 mb-5">
                <div className="container">
                    <h2 className="text-center fs-1 fw-bold my-primary-text">Contact Us</h2>
                    <p className="text-center text-muted">
                        Any questions or remarks? Just write us a message!
                    </p>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <form className="p-4 ">

                                <div className="d-flex gap-5">

                                    {/* Name Field */}
                                    <div className="mb-3 input-group">
                                        <span className="input-group-text"><FaUser /></span>
                                        <input type="text" className="form-control" placeholder="Enter your Name" />
                                    </div>

                                    {/* Mobile Field */}
                                    <div className="mb-3 input-group">
                                        <span className="input-group-text"><FaPhone /></span>
                                        <input type="tel" className="form-control" placeholder="Enter your Mobile Number" />
                                    </div>
                                </div>


                                {/* Email Field */}
                                <div className="mb-3 input-group">
                                    <span className="input-group-text"><FaEnvelope /></span>
                                    <input type="email" className="form-control" placeholder="Enter a valid email address" />
                                </div>


                                {/* Message Field */}
                                <div className="mb-3 input-group">
                                    <span className="input-group-text"><FaCommentDots /></span>
                                    <textarea className="form-control" rows="3" placeholder="Write your message"></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="">
                                    <button type="submit" className="btn btn-info text-white w-25 fw-bold">
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="info-section py-5">
                <div className="container">
                    <div className="row text-center bg-light p-4 rounded ">
                        {/* About Club */}
                        <div className="col-md-4 d-flex flex-column align-items-center">
                            <div className="icon-circle mb-3">
                                <FaEnvelope size={30} color="white" />
                            </div>
                            <h5 className="fw-bold fs-4">Email Address</h5>
                            <p className="mb-0 mt-2 fs-6">chauhanluckey4@gmail.com</p>

                        </div>

                        {/* Phone */}
                        <div className="col-md-4 d-flex flex-column align-items-center">
                            <div className="icon-circle mb-3">
                                <FaPhone size={30} color="white" />
                            </div>
                            <h5 className="fw-bold fs-4">
                                Phone Number
                            </h5>
                            <p className="mb-0 mt-2 fs-6">+91 9289033065</p>
                            {/* <p>+912 5 252 3336</p> */}
                        </div>

                        {/* Location */}
                        <div className="col-md-4 d-flex flex-column align-items-center">
                            <div className="icon-circle mb-3">
                                <FaMapMarkerAlt size={30} color="white" />
                            </div>
                            <h5 className="fw-bold fs-4">OUR OFFICE LOCATION</h5>
                            <p className="mb-0 mt-2 fs-6">Mehrauli - 110030</p>
                            {/* <p>The Courtyard, Al Quoz 1, Colorado, USA</p> */}
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </>
    )
}
