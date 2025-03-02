import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ArrowUp } from "react-bootstrap-icons";
import './css/best-selling.css';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (

    <div>
      {showButton && (
        <Button
          variant=""
          className="position-fixed bottom-3 scroll-button  end-3 rounded-circle p-3 shadow"
          onClick={scrollToTop}
          style={{ right: "20px", bottom: "20px", zIndex: 1000 }}
        >
          <ArrowUp size={24} />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
