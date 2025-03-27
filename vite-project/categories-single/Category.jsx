import React from 'react';
import "../components/css/best-selling.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import droneimage from "../src/assets/droneimage.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import drone2 from "../src/assets/drone-2.png";
import { Link } from "react-router-dom";

const products = [
    { id: 1, name: "DRV124 PRO S", price: 2999, oldPrice: 4999, category: "EPIC", image: droneimage },
    { id: 13, name: "DRV124 PRO S", price: 2999, oldPrice: 4999, category: "EPIC", image: droneimage },
    { id: 2, name: "DRV124 PRO S", price: 2999, oldPrice: 4999, category: "EPIC", image: drone2 },
    { id: 14, name: "DRV124 PRO S", price: 2999, oldPrice: 4999, category: "EPIC", image: drone2 },
    { id: 3, name: "DRV124 PRO S", price: 2999, oldPrice: 4999, category: "EPIC", image: droneimage },
    { id: 15, name: "DRV124 PRO S", price: 2999, oldPrice: 4999, category: "EPIC", image: droneimage },
];

export default function Category() {

    return (
        <div className="text-center best-selling container mt-5">
            <h2 className="text-2xl mb-4" style={{ color: "var(--primary-color)" }}>
                — BEST SELLING —
            </h2>

            <div className="d-flex gap-5 best-selling-cards justify-content-center flex-wrap mb-5">
                {products.map((product) => (
                    <div key={product.id} className="relative p-4 border rounded-xl bg-blue-50 shadow-lg best-selling-card">
                        <span className="New">Epic</span>
                        <span className="Heart">
                            <i className="far fa-heart"></i>
                        </span>
                        <img src={product.image} alt={product.name} className="w-full h-40 object-cover my-2" />
                        <h3 className="text-lg font-semibold text-start mb-3 mt-3">{product.name}</h3>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-4">
                                <p className="text-xl font-bold">₹ {product.price}.00</p>
                                <p className="text-decoration-line-through text-gray-500 fs-sm">₹ {product.oldPrice}.00</p>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-info text-white rounded-circle">
                                    <Link to="/product-detail">
                                        <FaArrowUpRightFromSquare className='text-white' />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
