import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {API_MERCH} from "../../../Adress";
import axios from "axios";

export default function AutoPlay() {
    let [merch, setMerch] = useState([]);

    useEffect(async () => {
        await axios.get(API_MERCH).then(res => setMerch(res.data.splice(0, 4)));
    },[]);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <div >
            <h2 className='mt-5 mb-3' style={{textShadow: '1px 5px 10px'}} >BEST SELLERS</h2>
            <Slider {...settings}>
                {merch ?
                    merch.map(item => (
                        <div key={item.id} >
                            <img
                                className="d-block w-100"
                                src={item.img}
                                alt="Second slide"
                            />
                            <p className='mt-3'>{item.name}</p>
                        </div>
                    ))
                    : null
                }
            </Slider>
        </div>
    );
}
