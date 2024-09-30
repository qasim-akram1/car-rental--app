import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  { path: '/about', display: 'About Us' },
  { path: '/contact', display: 'Contact' },
  { path: '/privacy', display: 'Privacy Policy' },
  { path: '/terms', display: 'Terms of Service' }
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer__content">
          <Col lg="3" md="4" sm="12">
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
            <p className="footer__logo__content">
              We offer a wide range of vehicles to suit your needs, from economy to luxury. Our goal is to provide exceptional service and ensure a smooth and enjoyable rental experience for all our customers.
            </p>
          </Col>
          <Col lg="3" md="4" sm="12">
            <div className="footer__quick-links">
              <h5 className="footer__link-title">Quick Links</h5>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="footer__contact-info">
              <h5 className="footer__link-title">Contact Information</h5>
              <p><i className="ri-map-pin-line"></i> Lahore Medical Housing Society, Lahore, Pakistan</p>
              <p><i className="ri-phone-line"></i> +1-202-333-0149</p>
              <p><i className="ri-mail-line"></i> qasimakram257@gmail.com</p>
            </div>
          </Col>
          <Col lg="3" md="12" sm="12">
            <div className="footer__newsletter">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">
                Subscribe to our Newsletter to get the latest updates and offers.
              </p>
              <form className="newsletter__form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe <i className="ri-send-plane-line"></i></button>
              </form>
            </div>
          </Col>
        </Row>
        <Row className="footer__copyright">
          <Col lg="12">
            <p className="footer__copy-text pt-4">
              &copy; {new Date().getFullYear()} Rental Service. Designed and Developed by Qasim.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
