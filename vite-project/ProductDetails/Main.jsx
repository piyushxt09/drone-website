import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import drone2 from "../src/assets/drone-2.png";
import droneimage from "../src/assets/droneimage.png";
import { FaStar } from "react-icons/fa";

import Popularslider from "./PopularSlider";


const images = [
    { src: droneimage },
    { src: droneimage },
    { src: droneimage },
    { src: droneimage },
    { src: droneimage },
];


const products = [
    { id: 1, name: "DKW210 2 PRO", price: "₹ 3999.00", img: droneimage },
    { id: 1, name: "DKW210 2 PRO", price: "₹ 3999.00", img: droneimage },
    { id: 2, name: "DKW410 2 PRO", price: "₹ 6999.00", img: droneimage },
    { id: 2, name: "DKW410 2 PRO", price: "₹ 6999.00", img: droneimage },
    { id: 3, name: "DKW710 2 PRO", price: "₹ 12999.00", img: droneimage },
    { id: 4, name: "DKW710 2 PRO", price: "₹ 12999.00", img: droneimage },
    { id: 5, name: "DKW710 2 PRO", price: "₹ 12999.00", img: droneimage },
];


export default function Main() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [expanded, setExpanded] = React.useState(false);

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });



    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const droneName = "Advanced Drone X Pro"; // Dynamically set

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", { droneName, ...formData });
        setShowModal(false);
    };

    return (
        <div className="container py-5">
            <div className="row ">
                <div className="col-lg-6 Main-slider-detail">
                    {/* Main Image Slider */}
                    <Swiper
                        modules={[Navigation, Thumbs]}
                        spaceBetween={10}
                        navigation
                        thumbs={{ swiper: thumbsSwiper }}
                        className="main-slider"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img.src}
                                    alt={`Slide ${index}`}
                                    className="img-fluid rounded"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Thumbnail Slider */}
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={2} // Default for small screens
                        breakpoints={{
                            576: { slidesPerView: 3 }, // Medium screens
                            768: { slidesPerView: 4 }, // Large screens
                            992: { slidesPerView: 5 }, // Extra large screens
                        }}
                        watchSlidesProgress
                        className="thumb-slider mt-3"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img.src}
                                    alt={`Thumbnail ${index}`}
                                    className="img-fluid thumb-img"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="col-lg-6">
                    <div className=" p-4 ">
                        <p className="text-muted mb-1">PDRONE</p>
                        <h4 className="my-primary-text fw-bold">Advanced Drone X Pro</h4>

                        {/* Price and Rating Section */}
                        <div className="d-flex align-items-center">
                            <p className="text-muted text-decoration-line-through mb-0">₹40,000</p>
                            <p className="text-dark fw-bold fs-4 mb-0 ms-2">₹28,000</p>
                            <span className="ms-3 text-muted">1,238 Sold</span>
                            <span className="ms-2 text-warning">
                                <FaStar /> 4.5
                            </span>
                        </div>

                        {/* Divider */}
                        <hr />

                        {/* Description */}
                        <h6 className="my-primary-text">Description:</h6>
                        <p className="text-muted">
                            {expanded ? (
                                <>

                                    The drone’s GPS functionality ensures precise navigation, allowing for automated return-to-home, follow-me mode, and waypoint-based flight paths.
                                    Equipped with an advanced camera system, it captures stunning high-resolution images and videos from breathtaking angles.
                                    The real-time transmission feature lets you view live footage directly on your smartphone. Its compact and foldable design makes it easy to carry anywhere.
                                    Whether you are an aspiring filmmaker, a travel vlogger, or just an adventure enthusiast, this drone helps you capture unforgettable moments with ease.
                                </>
                            ) : (
                                <>This drone features 4K ultra-HD recording, intelligent GPS, and up to 30 minutes of flight time. This drone features 4K ultra-HD recording, intelligent GPS, and up to 30 minutes of flight time.
                                    It is designed for both beginners and professionals, offering smooth and stable aerial footage with advanced stabilization technology.</>
                            )}
                            <span
                                className="my-primary-text"
                                onClick={() => setExpanded(!expanded)}
                                style={{ cursor: "pointer", color: "blue" }}
                            >
                                {expanded ? " See Less" : " See More..."}
                            </span>
                        </p>

                        {/* Buttons */}
                        <div className="d-flex gap-3">
                            <button className="btn my-primary-button  py-2 px-3 px-md-5" onClick={() => setShowModal(true)}>Book Now</button>
                            <button className="btn btn-outline-primary  py-2 px-3 px-md-5" onClick={() => window.location.href = "contact-us"}>Contact Us</button>
                        </div>
                        {showModal && <div className="modal-backdrop fade show"></div>}
                        {showModal && (
                            <div className="modal fade show d-block custom-modal-overlay" tabIndex="-1" role="dialog">
                                <div className="modal-dialog custom-modal " role="document">
                                    <div className="modal-content">
                                        <div className="modal-header modal-success">
                                            <h5 className="modal-title">Book {droneName}</h5>
                                            <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                                        </div>
                                        <div className="modal-body">
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                    <label className="form-label">Your Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Email</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Phone</label>
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Message</label>
                                                    <textarea
                                                        className="form-control"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        rows="3"
                                                    ></textarea>
                                                </div>
                                                <button type="submit" className="btn btn-primary" >
                                                    Submit
                                                </button>
                                                <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowModal(false)}>
                                                    Cancel
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <Popularslider />

            </div>


        </div>
    );
}
