import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/Style.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menu = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menu.current && !menu.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <div className="branding">Fall</div>
        <ul>
          <li>
            <Link to="/" onClick={handleNavClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleNavClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={handleNavClick}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleNavClick}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-spacer"></div>
        <div ref={menu} className="hamburger-menu">
          <div className="menu-box">
            <div
              role="button"
              tabIndex={0}
              className={`lines ${isOpen ? "active" : ""}`}
              onClick={toggleMenu}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleMenu();
                }
              }}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
            <div className={`menu-options ${isOpen ? "show" : ""}`}>
              <div className="option-box">
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
                <Link to="/about" onClick={handleLinkClick}>
                  About
                </Link>
                <Link to="/projects" onClick={handleLinkClick}>
                  Projects
                </Link>
                <Link to="/contact" onClick={handleLinkClick}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
