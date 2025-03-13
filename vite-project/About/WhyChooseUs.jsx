import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faCogs, faHeart, faSmile } from "@fortawesome/free-solid-svg-icons";
import WhyChooseImg from '../src/assets/whychoose.jpg';

const WhyChooseUs = () => {
    return (
        <section className="container text-center my-5" style={{margin: '100px auto !important;'}}>
            <h6 className="text-black my-primary-text text-uppercase">— Why Choose Us —</h6>
            <h2 className="fw-bold my-primary-text">Your Drone Services Will Be Exceptional With Us</h2>

            <div className="row align-items-center my-4">
                {/* Left Services */}
                <div className="col-md-4 text-md-end">
                    <div className="mb-4">
                        <FontAwesomeIcon icon={faUserTie} size="2x" className=" my-primary-text" />
                        <h5 className="fw-bold mt-2">Experienced Professionals</h5>
                        <p>Our team consists of highly skilled drone operators delivering top-notch services.</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHeart} size="2x" className=" my-primary-text" />
                        <h5 className="fw-bold mt-2">Loving Environment</h5>
                        <p>We ensure safety and care in every drone operation we undertake.</p>
                    </div>
                </div>

                {/* Center Drone Image */}
                <div className="col-md-4">
                    <div className="position-relative">
                        <img
                            src={WhyChooseImg}
                            alt="Drone"
                            className="img-fluid rounded shadow-lg"
                            style={{ maxWidth: "400px", height: "300px", objectFit: " my-primary-text" }}
                        />
                    </div>
                </div>

                {/* Right Services */}
                <div className="col-md-4 text-md-start">
                    <div className="mb-4">
                        <FontAwesomeIcon icon={faCogs} size="2x" className=" my-primary-text" />
                        <h5 className="fw-bold mt-2">Comprehensive Services</h5>
                        <p>From aerial photography to surveying, we offer a full range of drone services.</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faSmile} size="2x" className=" my-primary-text" />
                        <h5 className="fw-bold mt-2">Customer Satisfaction</h5>
                        <p>Exceptional customer service with numerous happy clients.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
