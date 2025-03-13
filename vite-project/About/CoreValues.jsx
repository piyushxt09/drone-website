import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShieldAlt, FaRocket, FaStar } from "react-icons/fa"; // Font Awesome Icons
import "./CoreValues.css"; // Importing external CSS

const CoreValues = () => {
  return (
    <section className="core-values-section" style={{margin: '100px auto'}}>
      <div className="container">
        <h6 className="my-primary-text">— Core Values —</h6>
        <h2>The Core Values That Drive Everything</h2>

        <div className="row mt-4 d-flex justify-content-center">
          {/* Innovation */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="core-value-card innovation">
              <FaRocket />
              <h5>Innovation</h5>
              <p>
                We push the boundaries of drone technology to create cutting-edge
                solutions for aerial surveillance, delivery, and more.
              </p>
            </div>
          </div>

          {/* Safety */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="core-value-card safety">
              <FaShieldAlt />
              <h5>Safety</h5>
              <p>
                Ensuring secure and reliable drone operations with strict safety
                protocols and compliance with aviation regulations.
              </p>
            </div>
          </div>

          {/* Excellence */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="core-value-card excellence">
              <FaStar />
              <h5>Excellence</h5>
              <p>
                We strive for excellence in every drone we design, ensuring superior
                quality, efficiency, and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
