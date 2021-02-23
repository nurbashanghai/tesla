import React, {useEffect, useState} from 'react';
import wallCon from './img/wall-connector-gen3@2x.jpg'
import liners from './img/model_y_liners@2x.jpg'
import {Carousel} from "react-bootstrap";
import HeaderShop from "../HeaderShop/HeaderShop";
import AutoPlay from "../SlickSlider/SlickSlider";
import axios from "axios";
import {API_MERCH} from "../../../Adress";

const Shop = () => {
    let [goods, setGoods] = useState([]);

    useEffect(() => {
        axios.get(API_MERCH).then(res => setGoods(res.data));
    },[]);

    const addToCart = (item) => {


        let testObj = {
            ...item,
            cartId: Date.now()
        };

        if(JSON.parse(localStorage.getItem('cart'))){
            let arr = JSON.parse(localStorage.getItem('cart'));
            arr.push(testObj);
            localStorage.setItem('cart', JSON.stringify(arr));
        } else {
            let arr = [];
            arr.push(testObj);
            localStorage.setItem('cart', JSON.stringify(arr));
        }

    };


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

            <h3 className={'m-5'} >Our Shop:</h3>

            <div className={'d-flex flex-wrap'} >
            {
                goods ?
                    goods.map(item => (
                            <div className={'col-6 col-md-4'} style={{border: '1px solid'}} key={item.id + 'goods'} >
                                <img className={'img-fluid'} src={item.img} />
                                <h5>{item.name}</h5>
                                <h5>{item.price}$</h5>
                                <button onClick={() => addToCart(item)} >Add To Cart</button>
                            </div>
                        )
                    ) : null
            }
            </div>

        </div>

    );

};

export default Shop;
