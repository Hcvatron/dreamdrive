import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faSearch,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useLocalContext } from "../../context/LocalContext";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemCount = 2; 
  const [isScrolled, setIsScrolled] = useState(false);
  const { Goto} = useLocalContext();

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const handleNavigation = (route) => {
    navigate(route);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`matoa-header ${isScrolled ? "scrolled" : ""}`}>
  <div className="header-inner">
    {/* Logo */}
    <div className="logo" onClick={() => navigate("/")}>
      {/* <h2>DRIVOXE.</h2> */}
      <img src="https://res.cloudinary.com/dcf3mojai/image/upload/v1745574199/dream_drive-removebg-preview_x7duqr.png" alt="" />
    </div>

    {/* Hamburger (Mobile Only) */}
    <div className="hamburger" onClick={() => setIsMobileMenuOpen(true)}>
      <FontAwesomeIcon icon={faBars} />
    </div>

    {/* Center Navigation (Desktop Only) */}
    <nav className="nav-links">
      <p onClick={() => handleNavigation("/howitworks")}>How It Works</p>
      <p onClick={() => handleNavigation("/cars")}>Cars</p>
      <p onClick={() => handleNavigation("/about")}>About Us</p>
      <p onClick={() => handleNavigation("/contact")}>Contact us</p>
    </nav>

    {/* Right Actions */}
    <div className="header-actions">
      <button className="contact-btn" onClick={() => handleNavigation("/contact")}>
        Contact
      </button>
      <span>|</span>
      <button className="signup-btn" onClick={Goto}>
        Book Now
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
 {/* Mobile Menu */}
{isMobileMenuOpen && (
  <div className="mobile-nav-modern-overlay">
    <div className="mobile-nav-modern-container">
      <button className="mobile-modern-close" onClick={() => setIsMobileMenuOpen(false)}>
        &times;
      </button>
      <div className="mobile-modern-links">
      <p onClick={() => handleNavigation("/howitworks")}>How It Works</p>
      <p onClick={() => handleNavigation("/cars")}>Cars</p>
      <p onClick={() => handleNavigation("/about")}>About Us</p>
      <p onClick={() => handleNavigation("/contact")}>Contact us</p>
        <p onClick={() => handleNavigation("/booking-form")}>Book Now</p>
      </div>
    </div>
  </div>
)}

</header>
  );
};

export default Header;
