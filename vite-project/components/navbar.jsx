import React, { useRef } from "react";
import { useState, useEffect } from 'react';

import './css/navbar.css';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS (includes Popper.js)
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../src/assets/logo.png";
import DronePhoto from "../src/assets/dronephoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMap, faLayerGroup, faCircleNotch, faExpand } from "@fortawesome/free-solid-svg-icons";

const brands = [
    { icon: faGlobe, name: "Cozybnb" },
    { icon: faMap, name: "Serendipity" },
    { icon: faLayerGroup, name: "Hideaway" },
    { icon: faCircleNotch, name: "The Nook" },
    { icon: faExpand, name: "Homely" },
];


export default function navbar() {

    const [fullName, setFullName] = useState(""); // Default to 'User' if no data

    useEffect(() => {
        // Retrieve the entire user object from local storage
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            try {
                const user = JSON.parse(storedUser); // Parse JSON to object
                if (user.firstName && user.lastName) {
                    setFullName(`${user.firstName} ${user.lastName}`);
                }
            } catch (error) {
                console.error("Error parsing user data:", error);
            }
        }
    }, []);

    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const navbarRef = useRef(null);

    // Handle Mouse Move
    const handleMouseMove = (e) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const width = target.clientWidth;
        const height = target.clientHeight;

        // Calculate rotation angles
        const rotateX = ((offsetY - height / 2) / height) * 20; // Moves up/down
        const rotateY = ((offsetX - width / 2) / width) * -20; // Moves left/right

        setRotation({ x: rotateX, y: rotateY });
    };

    // Reset Effect on Mouse Leave
    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    const handleToggle = () => {
        if (navbarRef.current) {
            const bsCollapse = new window.bootstrap.Collapse(navbarRef.current, {
                toggle: true,
            });
        }
    };

    return (
        <div className='Navbar-section'>
            <div className="d-flex">
                <div className="left-side col-lg-3">
                    <div>
                        <img src={logo} alt="" />
                        <div className="name-center">
                            <h1>FLY HIGHER</h1>
                        </div>
                    </div>
                </div>
                <div className="right-side col-lg-9">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            {/* Navbar Toggler for Mobile */}
                            <button
                                className="navbar-toggler text-white"
                                type="button"
                                onClick={handleToggle} // Custom toggle function
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            {/* Navbar Links */}
                            <div className="collapse navbar-collapse" id="navbarNav" ref={navbarRef}>
                                <ul className="navbar-nav d-flex justify-content-around gap-5">
                                    <li className="nav-item">
                                        <a className="nav-link text-white fw-bold text-decoration-none" href="/">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white fw-bold text-decoration-none" href="about-us">ABOUT US</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white fw-bold text-decoration-none" href="products">PRODUCTS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white fw-bold text-decoration-none" href="contact-us">CONTACT US</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white fw-bold text-decoration-none LogOUTbtn" href="/logout">LOG OUT
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Right Side: Cart Icon & Sign Up Button */}
                            <div className="d-flex align-items-center gap-4 me-5">
                                {/* Show Shopping Bag Icon and Log Out Button on Large Screens */}
                                <div className="d-none d-lg-flex align-items-center gap-3">
                                    {/* <i className="fas fa-shopping-bag text-white"></i> */}
                                    <a href="/logout" className="btn btn-light my-primary-text my-button-secondary fw-bold text-decoration-none">
                                        Log Out
                                    </a>
                                </div>

                                {/* Show Image Only on Small Screens */}
                                <img src={logo} alt="Logo" className="d-lg-none" />
                            </div>

                        </div>
                    </nav>

                    <h2 className=" my-primary-text text-center text-md-start mb-1 fs-6 mx-5">Welcome, {fullName}</h2>
                    <section className="container text-center py-5">
                        {/* Title */}
                        <h2 className=" my-primary-text">DJI MINI 3 PRO</h2>

                        {/* Description */}
                        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                            Ultra-light, 4K HDR, obstacle avoidance, extended flight time
                            GPS tracking, portability, seamless control, pro-level performance.
                        </p>

                        {/* Drone Image */}
                        <div className="drone-container w-sm-200px">
                            <img
                                src={DronePhoto}
                                alt="DJI Mini 3 Pro"
                                className="drone-img img-fluid my-4"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                                }}
                            />
                        </div>

                        <br />
                        {/* Buy Now Button */}
                        <button className="btn my-button-primary btn-lg rounded-pill">
                            BUY NOW
                        </button>
                    </section>

                </div>
            </div>

            <section className=" list-home ">
                <div className="container">
                    <div className="row justify-content-center text-center gap-3">
                        {brands.map((brand, index) => (
                            <div key={index} className="col-6 col-sm-4 col-md-2 d-flex justify-content-center">
                                <div className="d-flex align-items-center gap-2 text-white fw-semibold fs-5">
                                    <FontAwesomeIcon icon={brand.icon} />
                                    <span>{brand.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
