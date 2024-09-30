import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";
import "../../styles/Testimonial.css";

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    
    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    "Car Rental Service made our vacation seamless. The car was in excellent condition, the booking process was easy, and the staff was incredibly friendly and helpful. Highly recommended!"
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
                    <div>
                        <h6 className="mb-0 mt-3">James Alfie</h6>
                        <p className="section__description">Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    "I was impressed by the professionalism and service quality. From the easy online booking to the well-maintained vehicle, everything was perfect. Will definitely use this service again!"
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
                    <div>
                        <h6 className="mb-0 mt-3">Sarah Khan</h6>
                        <p className="section__description">Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    "Renting a car for my business trip was a breeze thanks to Car Rental Service. The vehicle was in top condition, and I appreciated the flexibility they offered. Excellent experience!"
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
                    <div>
                        <h6 className="mb-0 mt-3">Rames Raj</h6>
                        <p className="section__description">Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    "I had a fantastic experience with Car Rental Service. The process was hassle-free, and the car was perfect for our road trip. Friendly staff and great rates. Highly recommend!"
                </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava04} alt="" className="w-25 h-25 rounded-2" />
                    <div>
                        <h6 className="mb-0 mt-3">Gul-a-Chaman</h6>
                        <p className="section__description">Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Testimonial;
