import React from 'react';
import './aboutmain.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AboutDroneImage from '../src/assets/about-drone.jpg';
import { FaCheckCircle } from "react-icons/fa"; // Font Awesome for checkmarks

export default function AboutMainSection() {
    return (
        <section className="container my-5" style={{margin: '100px auto !important'}}>
            <div className="row align-items-center">
                {/* Left Image Section */}
                <div className="col-md-6 position-relative">
                    
                        <img
                            src={AboutDroneImage}// Replace with your drone image
                            alt="Drone Technology"
                            className=" rounded About-drone-image"
                        />

                </div>

                {/* Right Content Section */}
                <div className="col-md-6">
                    <h6 className="text-uppercase text-black fw-bold">About Us</h6>
                    <h2 className="fw-bold my-primary-text">Our Journey in Drone Technology</h2>
                    <p className="text-muted">
                        Welcome to PDRONE! We specialize in cutting-edge drone technology,
                        providing high-quality UAVs for photography, surveying, and industrial applications.
                        Our mission is to enhance innovation and efficiency through advanced drone solutions.
                    </p>

                    {/* Bullet Points */}
                    <div className="row">
                        <div className="col-6">
                            <p>
                                <FaCheckCircle className="my-primary-text" /> Over 10 years of expertise
                            </p>
                            <p>
                                <FaCheckCircle className="my-primary-text" /> Professional-grade UAVs
                            </p>
                            <p>
                                <FaCheckCircle className="my-primary-text" /> Advanced AI & Automation
                            </p>
                        </div>
                        <div className="col-6">
                            <p>
                                <FaCheckCircle className="my-primary-text" /> Drone Security & Surveillance
                            </p>
                            <p>
                                <FaCheckCircle className="my-primary-text" /> Aerial Photography & Filming
                            </p>
                            <p>
                                <FaCheckCircle className="my-primary-text" /> Regular Upgrades & Support
                            </p>
                        </div>
                    </div>

                    {/* Call to Action Button */}
                    <button className="btn my-primary-button px-4 py-2 mt-3 fw-bold">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    )
}
