import React from 'react'
import Navbar from "../components/navbar";
import Popularslider from "../components/Popularslider";
import Bestselling from "../components/Bestselling";
import ScrollToTop from "../components/ScrollToTop";
import VideoSection from "../components/VideoSection";
import Testimonials from "../components/Testinmonials";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login"); // Redirect to login if not authenticated
        }
    }, [navigate]); // Run effect when component mounts

    return (
        <div>
            <Navbar />
            <Popularslider />
            <Bestselling />
            <VideoSection />
            <Testimonials />
            <Footer />
            <ScrollToTop />
        </div>
    )
}
