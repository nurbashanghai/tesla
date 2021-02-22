import React, {useContext, useEffect, useState} from 'react';
import {API_CARS} from "../../Adress";
import axios from "axios";
import autopark from './carAssets/autopark.mp4';
import lane_change from './carAssets/lane_change.mp4';
import './CarPage.css';
import AOS from "aos";
import {carCartContext} from "../Contexts/CarContext";

const CarPage = () => {

    let [tesla, setTesla] = useState(null);
    let id = localStorage.getItem('carId');

    let [intColor, setIntColor] = useState(0);

    let [color, setColor] = useState('red');

    function setColorInt(id){
        setIntColor(id);
    }

    useEffect(async () => {
        AOS.init({
            duration : 1000
        });
        await axios.get(`${API_CARS}/${id}`).then((res) => setTesla(res.data));
    },[]);

    return (
        <div>
            {tesla ?
                <div className={'d-block d-md-flex'} >

                    <div className={'d-block d-md-none col-md-3'} >
                        <div> {tesla.color.map((color, index) => (
                            <button key={index+'color'+color} onClick={() => setColor(color)} style={{backgroundColor: color, borderRadius: '15px'}} >{color}</button>
                        ))} </div>
                        <h5 className={'mt-3'} >YOUR MODEL:</h5>
                        <h4>{tesla.name}</h4>
                        <h5>{tesla.price}$</h5>
                        YOUR COLOR:
                        <button style={{backgroundColor: color, borderRadius: '15px'}} >{color}</button>
                        <div>
                            Interior:
                            {
                                tesla.interior.map((item, index) => (
                                    <button onClick={() => setColorInt(index)} style={{borderRadius: '15px'}}>Color: {index + 1}</button>
                                ))
                            }
                        </div>
                    </div>

                    <div data-aos="fade-up" id={'scrollDiv'} className={'col-12 col-md-9'} >
                        <h1>{tesla.name}</h1>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner" style={{margin: '70px auto'}}>
                                {tesla[`img_${color}`].map((item, index) => {
                                    if(index === 0){
                                        return (
                                            <div key={index+'carCarousel'+color} className="carousel-item active" >
                                                <img className="col-12" src={item} alt="First slide"/>
                                            </div>
                                        )

                                    } else {
                                        return (
                                            <div key={index+'carCarousel'+color} className="carousel-item" >
                                                <img className="col-12" src={item} alt={`${index} lol`}/>
                                            </div>
                                        )
                                    }
                                }
                                )}
                            </div>
                            <div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        <img className={'img-fluid'} src={tesla.interior[intColor]} />
                        <hr className="divider"></hr>
                        <h1>Auto Park Feature:</h1>
                        <video className={'img-fluid'} autoPlay >
                            <source src={autopark} type='video/mp4' />
                        </video>
                        <img className={'img-fluid'} src={tesla.img} />
                        <hr className="divider"></hr>
                        <h1>Lane Change:</h1>
                        <video className={'img-fluid'} autoPlay >
                            <source src={lane_change} type='video/mp4' />
                        </video>
                    </div>

                    <div data-aos="fade-down" className={'d-none d-md-block col-md-3'} >
                        <div> {tesla.color.map((color, index) => (
                            <button key={index+'color'+color} onClick={() => setColor(color)} style={{backgroundColor: color, borderRadius: '15px'}} >{color}</button>
                        ))} </div>
                        <h3 className={'mt-3'} >YOUR MODEL:</h3>
                        <h1>{tesla.name}</h1>
                        <h2>{tesla.price}$</h2>
                        YOUR COLOR:
                        <button style={{backgroundColor: color, borderRadius: '15px'}} >{color}</button>
                        <div>
                            Interior:
                            {
                                tesla.interior.map((item, index) => (
                                    <button onClick={() => setColorInt(index)} style={{borderRadius: '15px'}}>Color: {index + 1}</button>
                                ))
                            }
                        </div>

                    </div>

                </div> : null}
        </div>
    );
};

export default CarPage;
