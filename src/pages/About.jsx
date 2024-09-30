import React from "react";
import CommonSection from "../components/Ui/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/Ui/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/Ui/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/Ui/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                  At Rental Service, we prioritize safety, comfort, and reliability in every ride. With our extensive fleet of well-maintained vehicles and highly-trained drivers, we are dedicated to providing a smooth and secure journey to all our customers. Whether you need a quick trip across town or a long-distance ride, we have the perfect solution to meet your needs.
                </p>

                <p className="section__description">
                  Our commitment goes beyond just transportation; we strive to exceed customer expectations by delivering exceptional service and building long-lasting relationships. Trust Rental Service for your next ride, and experience the difference our dedication makes.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+923014401980</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
