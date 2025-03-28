import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Video from "../src/assets/video.png";
import "./css/videosection.css";

const VideoSection = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="container text-center py-5 col-lg-12">
            {/* Heading Section */}
            <div className="Video-section">
                <h3>Massive Payload Increase Thanks To The</h3>
                <h2>
                    <u>Coaxial Twin Rotor</u>
                </h2>
                <p className="text-muted">
                    The AGRAS T40 features a coaxial twin rotor design that increases the payload capacity by 30%
                    with a maximum payload of 50 kg. Its foldable design reduces the aircraft size by 70% for
                    greater portability.
                </p>
            </div>

            {/* Video Thumbnail */}
            <div className="VIDEO overflow-hidden position-relative mx-auto" style={{ width: "80%" }}>
                <img src={Video} alt="Drone Video" className="img-fluidmy" />

                {/* Play Button (Opens Modal) */}
                <button
                    className="btn cirle_Button position-absolute top-50 start-50 translate-middle rounded-circle p-3"
                    style={{ borderRadius: "50%", border: "none" }}
                    onClick={() => setShowModal(true)}
                >
                    ▶
                </button>
            </div>

            {/* Bootstrap Modal */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content" style={{marginTop: '100px'}}>
                            <div className="modal-header modal-success">
                                <h5 className="modal-title">Watch Video</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <iframe
                                    width="100%"
                                    height="400px"
                                    src="https://www.youtube.com/embed/aOwTUgqUfH8?autoplay=1&mute=0&rel=0"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bootstrap Modal Backdrop (for Closing) */}
            {showModal && (
                <div
                    className="modal-backdrop fade show"
                    onClick={() => setShowModal(false)}
                ></div>
            )}

            {/* Decorative Section */}
            <div className="position-relative d-flex justify-content-center My-video-section mt-4">
                <div className="ROUNDED" style={{ width: "100%", padding: "2rem", borderRadius: "20px" }}></div>
            </div>
        </div>
    );
};

export default VideoSection;
