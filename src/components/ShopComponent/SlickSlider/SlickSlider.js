import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kurtka from './img/jacket.jpg';
import polik from './img/polik.jpg';
import kreplenie from './img/kreplenie.jpg';
import mashinka from './img/mashinka.jpg';
import wallconector from './img/wallconector.jpg'

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 3000,
            cssEase: "linear"
        };
        return (
            <div>
                <h4 className='mt-5 mb-3'>BEST SELLERS</h4>
                <Slider {...settings}>
                    <div>
                        <img
                            className="d-block w-100"
                            src={kurtka}
                            alt="Second slide"
                        />
                        <h5 className='mt-3'>MEN'S CORP JACKET</h5>
                    </div>
                    <div>
                        <img
                            className="d-block w-100"
                            src={polik}
                            alt="Second slide"
                        />
                        <h5 className='mt-3'>MODEL Y ALL-WEATHER INTERIOR LINERS</h5>
                    </div>
                    <div>
                        <img
                            className="d-block w-100"
                            src={kreplenie}
                            alt="Second slide"
                        />
                        <h5 className='mt-3'>MODEL 3 ROOF RACK</h5>
                    </div>
                    <div>
                        <img
                            className="d-block w-100"
                            src={wallconector}
                            alt="Second slide"
                        />
                        <h5 className='mt-3'>WALL CONECTOR</h5>
                    </div>
                    <div>
                        <img
                            className="d-block w-100"
                            src={mashinka}
                            alt="Second slide"
                        />
                        <h5 className='mt-3'>DIECAST 1:18 SCALE ROADSTER</h5>
                    </div>
                </Slider>
            </div>
        );
    }
}