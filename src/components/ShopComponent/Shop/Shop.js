import React from 'react';
import wallCon from './img/wall-connector-gen3@2x.jpg'
import liners from './img/model_y_liners@2x.jpg'
import {Carousel} from "react-bootstrap";
import HeaderShop from "../HeaderShop/HeaderShop";
import AutoPlay from "../SlickSlider/SlickSlider";

const Shop = () => {

    return (
        <div>
            <div >
                <HeaderShop/>
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption >
                            <h3>WALL CONECTOR</h3>
                            <p>The fastest way to charge at home</p>
                        </Carousel.Caption>
                        <img
                            className="d-block w-100"
                            src={wallCon}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                        <img
                            className="d-block w-100"
                            src={liners}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>

            <AutoPlay/>

        </div>

    );

};

export default Shop;