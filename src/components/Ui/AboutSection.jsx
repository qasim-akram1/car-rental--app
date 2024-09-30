import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png';

const AboutSection = () => {
  return (
    <section className="about-section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome To Car Rental Service</h2>
              <p className="section__description">
                At Car Rental Service, we offer a wide range of vehicles to meet your needs, whether you're planning a family vacation or a business trip. Our fleet includes the latest models from top brands, ensuring comfort and reliability on every journey.
              </p>
              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center">
                  <i className="ri-checkbox-circle-line"></i> Affordable Rates
                </p>
                <p className="section__description d-flex align-items-center">
                  <i className="ri-checkbox-circle-line"></i> Excellent Customer Service
                </p>
                <p className="section__description d-flex align-items-center">
                  <i className="ri-checkbox-circle-line"></i> Flexible Rental Options
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__img">
              <img
                src={aboutImg}
                alt="Car Offer"
                className="w-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
