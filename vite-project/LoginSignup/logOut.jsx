import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear user data and token from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // Redirect to login page after a short delay
        setTimeout(() => {
            navigate("/login");
        }, 1000); // Optional delay for smooth transition
    }, [navigate]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <h2>Logging out...</h2>
        </div>
    );
};

export default Logout;
