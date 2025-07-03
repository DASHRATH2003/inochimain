import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import topLogo from "../assets/Toplogo.mp4";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (sectionId) => {
    setIsOpen(false);
    setActiveDropdown(null);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const productCategories = [
    { title: "Spices", path: "/products/spices" },
    { title: "Herbs", path: "/products/herbs" },
    { title: "Seeds", path: "/products/seeds" },
    { title: "All Products", path: "/products" },
  ];

  const handleInquiry = () => {
    navigate("/contact");
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <div className="logo-3d-container">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="navbar-logo-video"
              >
                <source src={topLogo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            <div className={`hamburger ${isOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-links ${
                  location.pathname === "/" ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("home-section");
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-links ${location.pathname === "/about" ? "active" : ""}`}
                onClick={() => {
                  setIsOpen(false);
                  setActiveDropdown(null);
                }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="#certificates"
                className="nav-links"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("certificates-section");
                }}
              >
                Certificate
              </a>
            </li>
            <li
              className={`nav-item dropdown ${
                activeDropdown === 0 ? "active" : ""
              }`}
            >
              <div 
                className="nav-links"
                onClick={() => toggleDropdown(0)}
              >
                Products <span className="dropdown-arrow">▼</span>
              </div>
              <ul
                className={`dropdown-menu ${
                  activeDropdown === 0 ? "active" : ""
                }`}
              >
                {productCategories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={category.path}
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                        setActiveDropdown(null);
                        navigate(category.path);
                      }}
                    >
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-links ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                onClick={() => {
                  setIsOpen(false);
                  setActiveDropdown(null);
                }}
              >
                Contact
              </Link>
            </li>

            {/* Mobile Inquiry Button - Only visible in mobile menu */}
            <li className="nav-item mobile-inquiry-btn">
              <button className="inquiry-btn" onClick={handleInquiry}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-calendar2-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM8 8a.5.5 0 0 1 .5.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5A.5.5 0 0 1 8 8z" />
                </svg>
                 ENQUIRY NOW
              </button>
            </li>
          </ul>

          {/* Desktop Inquiry Button - Only visible on desktop */}
          <div className="desktop-inquiry-btn">
            <button className="inquiry-btn" onClick={handleInquiry}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-calendar2-plus"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM8 8a.5.5 0 0 1 .5.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5A.5.5 0 0 1 8 8z" />
              </svg>
              ENQUIRY NOW
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
