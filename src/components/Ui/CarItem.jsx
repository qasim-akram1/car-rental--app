import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom'; // Ensure you import Link if using react-router
import "../../styles/car-item.css";
const CarItem = ({ item }) => {
    const {  imgUrl, model, carName, automatic, speed, price } = item;

    return (
        <Col lg='4' md='4' sm='6' className='mb-5'>
            <div className="car__item">
                <div className="car__img">
                    <img src={imgUrl} alt={carName} className='w-100' />
                </div>
                <div className="car__item-content mt-4">
                    <h4 className="section__title text-center">{carName}</h4>
                    <h6 className="rent__price text-center mt-2">${price}<span>/Day</span></h6>
                </div>
                <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                    <span className="d-flex align-items-center gap-1">
                        <i className="ri-car-line"></i> {model}
                    </span>
                    <span className="d-flex align-items-center gap-1">
                        <i className="ri-setting-2-line"></i> {automatic}
                    </span>
                    <span className="d-flex align-items-center gap-1">
                        <i className="ri-timer-flash-line"></i> {speed}
                    </span>
                </div>
                <button className="w-50 car__item-btn car__btn-rent">
                    <Link to={`/cars/${carName}`}>Rent</Link>
                </button>
                <button className="w-50 car__item-btn car__btn-details">
                    <Link to={`/cars/${carName}`}>Details</Link>
                </button>
            </div>
        </Col>
    );
}

export default CarItem;
