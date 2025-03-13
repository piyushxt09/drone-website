import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/banner.css'
import DronePhoto from "../src/assets/dronephoto.png";

const Banner = () => {
  return (
    <div className="container-fluid my-bg-background text-white text-center py-5 rounded">
      <div className="d-flex align-items-center justify-content-around">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={DronePhoto}
              alt="Drone"
              className="img-fluid mt-5 "

            />
          </div>
          <div className="col-lg-6 p-5">
            <h2 className="display-4 text-start fw-500" style={{ maxWidth: "500px" }}>Are you ready to lead the way</h2>
            <p className="text-start" style={{ maxWidth: "400px" }}>Innovative, powerful, smart controls, ultra-light, high-speed, precision flying.</p>
            <button className="d-flex btn btn-light banner-button">Explore</button>
          </div>
        </div>
      </div>
      <h1 className="banner-heading fw-bold">FLYING</h1>
    </div>
  );
};

export default Banner;