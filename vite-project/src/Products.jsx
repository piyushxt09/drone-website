import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './products.css';
import Footer from "../components/Footer";
import ProductHeader from "./ProductHeader";

const Products = () => {
    const [price, setPrice] = useState([5000, 150000]);
    const [brands, setBrands] = useState([]);
    const [showFeatures, setShowFeatures] = useState(false);
    const [showFilters, setShowFilters] = useState(false);

    const handlePriceChange = (event) => {
        const { name, value } = event.target;
        setPrice((prev) => (name === "min" ? [parseInt(value), prev[1]] : [prev[0], parseInt(value)]));
    };

    const handleBrandChange = (event) => {
        const { value, checked } = event.target;
        setBrands((prev) => (checked ? [...prev, value] : prev.filter((b) => b !== value)));
    };

    const resetFilters = () => {
        setPrice([5000, 150000]);
        setBrands([]);
    };


    const categories = [
        {
            title: "EPIC DRONES",
            description: "High-end drones for professionals.",
            image: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-drone-3d-render-png-image_10149628.png",
            bgColor: "bg-light",
            colSize: "col-md-4",
        },
        {
            title: "NEW DRONES",
            description: "Latest technology with smart AI.",
            image: "https://png.pngtree.com/png-vector/20231104/ourmid/pngtree-dji-mavic-air-2-drone-png-image_10477627.png",
            bgColor: "bg-light ",
            colSize: "col-md-4",
        },
        {
            title: "MODERN DRONES",
            description: "Stylish and powerful for enthusiasts.",
            image: "https://png.pngtree.com/png-vector/20250127/ourmid/pngtree-quadcopter-drone-with-camera-on-white-background-png-image_15351706.png",
            bgColor: "bg-light",
            colSize: "col-md-4",
        },
        {
            title: "RACING DRONES",
            description: "Fast and agile drones for competitions.",
            image: "https://png.pngtree.com/png-vector/20240906/ourmid/pngtree-flying-quadcopter-drone-on-transparent-background-png-image_13753896.png",
            bgColor: "bg-light ",
            colSize: "col-md-4",
        },
        {
            title: "CAMERA DRONES",
            description: "Drones with high-quality cameras for photography.",
            image: "https://png.pngtree.com/png-vector/20241114/ourmid/pngtree-futuristic-drone-clipart-with-transparent-background-png-image_14419723.png",
            bgColor: "bg-light",
            colSize: "col-md-4",
        },
        {
            title: "FUTURE TECH DRONES",
            description: "AI-powered drones with cutting-edge features.",
            image: "https://png.pngtree.com/png-vector/20241113/ourmid/pngtree-black-drone-camera-in-white-background-png-image_14416894.png",
            bgColor: "bg-light",
            colSize: "col-md-4",
        },
    ];

    return (
        <>
            <ProductHeader />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="my-primary-text mt-0 mt-md-5 fs-3 fw-bold text-center">— Products Top Categories —</h3>
                    </div>
                    <div className="col-md-3 mt-2">
                        {/* Collapse Button (Visible on Mobile) */}
                        <button
                            className="btn btn-primary w-50 d-md-none mb-0"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <i className={`fas ${showFilters ? "fa-chevron-up" : "fa-chevron-down"} me-2`}></i>
                            {showFilters ? "Hide Filters" : "Show Filters"}
                        </button>


                        {/* Filter Section (Toggles on Mobile) */}
                        <div className={`p-3 border rounded shadow-sm bg-white ${showFilters ? "" : "d-none d-md-block"}`}>
                            <h5 className="mb-3 my-primary-text fs-4">Filter by</h5>

                            {/* Search Box */}
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Search By Name</label>
                                <input type="text" className="form-control" placeholder="Search drones..." />
                            </div>

                            {/* Price Range */}
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Price Range</label>
                                <input
                                    type="range"
                                    className="form-range"
                                    min="5000"
                                    max="150000"
                                    value={price[0]}
                                    name="min"
                                    onChange={handlePriceChange}
                                />
                                <input
                                    type="range"
                                    className="form-range"
                                    min="5000"
                                    max="150000"
                                    value={price[1]}
                                    name="max"
                                    onChange={handlePriceChange}
                                />
                                <div className="d-flex justify-content-between">
                                    <span>₹ {price[0]}</span>
                                    <span>₹ {price[1]}</span>
                                </div>
                            </div>

                            {/* Brand Filter */}
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Drone Brands</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="DJI"
                                        id="DJI"
                                        onChange={handleBrandChange}
                                        checked={brands.includes("DJI")}
                                    />
                                    <label className="form-check-label" htmlFor="DJI">DJI</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="Autel"
                                        id="Autel"
                                        onChange={handleBrandChange}
                                        checked={brands.includes("Autel")}
                                    />
                                    <label className="form-check-label" htmlFor="Autel">Autel Robotics</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="Parrot"
                                        id="Parrot"
                                        onChange={handleBrandChange}
                                        checked={brands.includes("Parrot")}
                                    />
                                    <label className="form-check-label" htmlFor="Parrot">Parrot</label>
                                </div>
                            </div>

                            {/* Drone Features */}
                            <div className="mb-3">


                                <span
                                    className="my-primary-text"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setShowFeatures(!showFeatures)}
                                >
                                    <i className={`fas ${showFeatures ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                </span>

                                {showFeatures && (
                                    <div className="ms-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="camera" />
                                            <label className="form-check-label" htmlFor="camera">4K Camera</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gps" />
                                            <label className="form-check-label" htmlFor="gps">GPS Tracking</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="longBattery" />
                                            <label className="form-check-label" htmlFor="longBattery">Long Battery Life</label>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Reset Button */}
                            <button className="btn btn-light w-100 border" onClick={resetFilters}>Reset</button>
                        </div>
                    </div>
                    <div className="col-md-9 py-3 py-md-5 Products-Section">
                        <div className="row g-4">
                            {categories.map((category, index) => (
                                <div key={index} className={`${category.colSize}`}>
                                    <div className={`p-4 rounded shadow-sm d-flex flex-column align-items-center align-items-md-start ${category.bgColor}`}>
                                        <h5 className=" my-primary-text fw-bold ">{category.title}</h5>
                                        <img
                                            src={category.image}
                                            alt={category.title}
                                            className="img-fluid rounded mb-3 "
                                        />
                                        <p>{category.description}</p>
                                        <a href="category-single" className="btn my-primary-button text-decoration-none" >See more</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />


        </>

    );
};

export default Products;
