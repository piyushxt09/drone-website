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

const images = [
    { src: drone2 },
    { src: drone2 },
    { src: droneimage },
    { src: drone2 },
    { src: droneimage },
];

export default function Main() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
                            This drone features 4K ultra-HD recording, intelligent GPS, and up to 30 minutes of flight time.
                            It is ideal for aerial photography and videography. Capture breathtaking views with ease.{" "}
                            <span className="my-primary-text">See More....</span>
                        </p>

                        {/* Buttons */}
                        <div className="d-flex gap-3">
                            <button className="btn my-primary-button  py-2 px-5">Book Now</button>
                            <button className="btn btn-outline-primary  py-2 px-5">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
