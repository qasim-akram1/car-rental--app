import React from "react";
import HeroSlider from "../components/Ui/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/Ui/FindCarForm";
import AboutSection from "../components/Ui/AboutSection";
import ServiceList from "../components/Ui/ServiceList";
import CarItem from "../components/Ui/CarItem";
import CarData from "../assets/data/carData";
import BecomeDriverSection from "../components/Ui/BecomeDriverSection";
import Testimonial from "../components/Ui/Testimonial";
import BlogList from "../components/Ui/BlogList";
const Home = () => {
  return (
    <Helmet title="Home">
      {/* Hero Section */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* About Section */}
      <AboutSection />
      {/* Service List */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See Our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* Car Offer Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with </h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>
          </Row>
          <Row>
            {CarData.slice(0, 6).map((item) => (
              <CarItem  item={item} key={item.id}/>
            ))}
          </Row>
        </Container>
      </section>

      {/* BEcome A driver */}
      <BecomeDriverSection/>
      {/* testimonial */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-4 text-center">
            <h6 className="section__subtitle">Our Client says</h6>
            <h2 className="section__title">Testimonials</h2>
            </Col>
            <Testimonial/>
          </Row>
        </Container>
      </section>
      {/* Blog Section */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-4 text-center">
            <h6 className="section__subtitle">Blogs</h6>
            <h2 className="section__title">Blogs</h2>
            </Col>
            <BlogList/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
