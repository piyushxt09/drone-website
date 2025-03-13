import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./loader.css";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 1 second
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // Hide loader when not needed

  return (
    <div className="loader-overlay">
      <div className="loader"></div>
    </div>
  );
}
