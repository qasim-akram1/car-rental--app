import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../styles/service-list.css';
import serviceData from '../../assets/data/serviceData';

const ServiceList = () => {
  return (
    <Container>
      <Row>
        {serviceData.map(item => (
          <ServiceItem item={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg='4' md='4' sm='6' className='mb-3'>
    <div className="service__item mb-3">
      <span className='mb-3 d-inline-block'>
        <i className={item.icon} />
      </span>
      <h6>{item.title}</h6>
      <p className="section__description">
        {item.desc}
      </p>
    </div>
  </Col>
);

export default ServiceList;
