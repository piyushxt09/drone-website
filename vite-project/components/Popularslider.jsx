import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner from "../src/assets/banner.png"
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import droneimage from "../src/assets/droneimage.png";
import Banner from "./Banner";
import "./css/popular-slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";


const products = [
  { id: 1, name: "DKW210 2 PRO", price: "₹ 3999.00", img: droneimage },
  { id: 1, name: "DKW210 2 PRO", price: "₹ 3999.00", img: droneimage },
  { id: 2, name: "DKW410 2 PRO", price: "₹ 6999.00", img: droneimage },
  { id: 2, name: "DKW410 2 PRO", price: "₹ 6999.00", img: droneimage },
  { id: 3, name: "DKW710 2 PRO", price: "₹ 12999.00", img: droneimage },
  { id: 4, name: "DKW710 2 PRO", price: "₹ 12999.00", img: droneimage },
  { id: 5, name: "DKW710 2 PRO", price: "₹ 12999.00", img: droneimage },
];

export default function Popularslider() {
  return (
    <section className="slider-section">
      <div className="container">
        <div className="row Tranding-rows  mb-5 mt-3">
          <div className="col-lg-3">
            <div className="d-flex align-items-center">
              <p className="trending-drones my-primary-text">— Our Trending Drones</p>
            </div>
            <h1>Most Popular Drones</h1>
            <p>4K camera, GPS, obstacle avoidance, extended flight, portability, AI tracking, stability, long range, intelligent modes, high performance.</p>
            <button className="my-button-primary" style={{ fontSize: "24px" }}>Explore</button>
          </div>

          <div className="col-lg-9 mt-sm-2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              navigation={true} // Enable navigation
              pagination={{ clickable: true }} // Enable pagination dots
              autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="swiper-container"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div
                    className="card border slider_cards border-info p-3 shadow-sm"
                    style={{ background: "#E3F6FF", borderRadius: "15px" }}
                  >
                    <img src={product.img} alt={product.name} className="img-fluid" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <h5 className="mt-3">{product.name}</h5>
                        <p className="fw-bold">{product.price}</p>
                      </div>
                      <div className="text-center mt-5">
                        <button className="btn btn-info text-white rounded-circle">
                          <FaArrowUpRightFromSquare />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
        </div>

        <div className="col-lg-12 mt-5 mb-2">
          <Banner />
        </div>
      </div>
    </section>
  );
}
