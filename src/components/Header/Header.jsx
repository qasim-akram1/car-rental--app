import React, { useState, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

// Define navigation links
const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/cars", display: "Cars" },
  { path: "/blogs", display: "Blog" },
  { path: "/contact", display: "Contact" } // Corrected line: removed <Route />
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Header top */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +1-202-333-0149
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> Login
                </Link>
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Header middle */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-3">
                    <i className="ri-car-line"></i>
                    <span>
                      Rental <br />
                      Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="4" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <i className="ri-earth-line"></i>
                <div className="header__location-content">
                  <h4>Pakistan</h4>
                  <h6>Lahore, Pakistan</h6>
                </div>
              </div>
            </Col>

            <Col lg="4" md="3" sm="4" className="text-end">
              <button className="header__btn btn">
                <Link to="/contact" className="d-flex align-items-center gap-1">
                  Request a Call <i className="ri-phone-line"></i>
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Navigation */}
      <div className="main__navbar">
        <Container>
          <div className="navigation_wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
            <div className={`navigation ${isMenuOpen ? "open__menu" : ""}`} ref={menuRef}>
              {/* Close icon for the mobile menu */}
              {isMenuOpen && (
                <span className="mobile__menu-close" onClick={toggleMenu}>
                  <i className="ri-close-line"></i>
                </span>
              )}
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={({ isActive }) =>
                      isActive ? "nav__active nav__item" : "nav__item"
                    }
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="search__box">
              <input type="text" placeholder="Search" />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
