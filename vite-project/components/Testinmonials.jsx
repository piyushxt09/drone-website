import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules"; // Import Pagination module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import Pagination styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Testimonials.css"; // Custom styles

const testimonials = [
    {
        id: 1,
        name: "Josephine",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Lorem Ipsum is simply dummy text of the industry standard typesetting.",
    },
    {
        id: 5,
        name: "Josephine",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Lorem Ipsum is simply dummy text of the industry standard typesetting.",
    },
    {
        id: 2,
        name: "Josephine",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Lorem Ipsum is simply dummy text of the industry standard typesetting.",
    },
    {
        id: 3,
        name: "Josephine",
        image: "https://randomuser.me/api/portraits/men/42.jpg",
        text: "Lorem Ipsum is simply dummy text of the industry standard typesetting.",
    },
    {
        id: 4,
        name: "Josephine",
        image: "https://randomuser.me/api/portraits/men/42.jpg",
        text: "Lorem Ipsum is simply dummy text of the industry standard typesetting.",
    },
];

const Testimonials = () => {
    return (
        <div className="testimonial-container py-5">
            <h2 className="text-center mb-4 text-xsm">— Testimonials —</h2>
            <h1 className="text-center text-2xl mb-4 ">What our clients say about us</h1>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 3000, // Auto-slide every 3 seconds
                    disableOnInteraction: false, // Keeps autoplay running after interaction
                }}
                pagination={{ clickable: true }} // Enable pagination
                modules={[Navigation, Autoplay, Pagination]} // Add Pagination module
                breakpoints={{
                    900: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    576: { slidesPerView: 1 },
                }}
                className="testimonial-swiper"
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className="testimonial-slide">
                        <div className="testimonial-card">
                            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                            <h4 className="mt-3">{testimonial.name}</h4>
                            <p className="text-muted">{testimonial.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
