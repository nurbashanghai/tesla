import React, {useContext, useEffect, useState} from 'react';
import {API_CARS} from "../../Adress";
import axios from "axios";
import autopark from './carAssets/autopark.mp4';
import lane_change from './carAssets/lane_change.mp4';
import './CarPage.css';
import Header from "../Header/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useHistory} from 'react-router-dom';



const CarPage = () => {
    let history = useHistory();

    AOS.init({
        duration : 1500
    });

    let [tesla, setTesla] = useState(null);
    let [newPrice, setNewPrice] = useState(0);
    let [specs, setSpecs] = useState({
        range: 412,
        topSpeed: 200,
        sec: 3.1,
        version: 'Base Version'
    });

    let id = localStorage.getItem('carId');

    let [intColor, setIntColor] = useState(0);

    let [color, setColor] = useState('red');

    function setColorInt(id){
        setIntColor(id);
    }

    useEffect(async () => {
        await axios.get(`${API_CARS}/${id}`).then((res) => {
            setTesla(res.data);
            setNewPrice(res.data.price);
        });
    },[]);

    function toOrder(){
        let obj = {
            ...tesla,
            intColor: intColor,
            choosenColor: color,
            price: newPrice,
            specs: specs
        };
        localStorage.setItem('carOrder', JSON.stringify(obj));
        history.push('/carorder');
    }

    return (
        <div style={{backgroundColor: 'white'}} >
            <Header/>
            {tesla ?
                <div className={'d-block d-md-flex'} >

                    <div className={'d-block d-md-none col-md-3'} >
                        <div> {tesla.color.map((color, index) => (
                            <button key={index+'color'+color} onClick={() => setColor(color)} style={{backgroundColor: color, borderRadius: '15px'}} >{color}</button>
                        ))} </div>
                        <div>{tesla.name}</div>
                        <div>Base price: {tesla.price}$</div>
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

                    <div id={'scrollDiv'} className={'col-12 col-md-9'} >
                        <h3>{tesla.name}</h3>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner mb-5" style={{margin: '70px auto'}}>
                                {tesla[`img_${color}`].map((item, index) => {
                                        if(index === 0){
                                            return (
                                                <div data-aos={"zoom-in"} key={index+'carCarousel'+color} className="carousel-item active" >
                                                    <img className="col-10" src={item} alt="First slide"/>
                                                </div>
                                            )

                                        } else {
                                            return (
                                                <div data-aos={"zoom-in"} key={index+'carCarousel'+color} className="carousel-item" >
                                                    <img className="col-10" src={item} alt={`${index} lol`}/>
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



                        <img data-aos={"fade-up"} className={'img-fluid mt-5'} src={tesla.interior[intColor]} />
                        <hr className="divider"></hr>
                        <h1 data-aos={"fade-up"} >Auto Park Feature:</h1>
                        <video className={'img-fluid'} autoPlay loop>
                            <source src={autopark} type='video/mp4' />
                        </video>
                        <img className={'img-fluid'} src={tesla.img} />
                        <hr className="divider"></hr>
                        <h1 data-aos={"fade-up"} >Lane Change:</h1>
                        <video className={'img-fluid'} autoPlay loop>
                            <source src={lane_change} type='video/mp4' />
                        </video>
                    </div>

                    <div id={'scrollDiv'} className={'d-none d-md-block col-md-3 mb-5'}>

                        <div className={'mt-5'} style={{borderRadius: '15px', backgroundColor: '#eee'}} ><p className={'p-3'} > <div className={'btn btn-primary'} style={{borderRadius: '55%', fontWeight: 'bold'}} >i</div> Clean Fuel Reward is now available for California and Washington residents.</p></div>

                        <h1 className={'mt-5 d-flex '} >{tesla.name}</h1>
                        <h5 className={'mb-5 d-flex'} >Base Price: {tesla.price}$</h5>

                        <h5>{specs.version}:</h5>
                        <p className={'d-flex'} >Specs:</p>
                        <div className={'d-flex justify-content-around mb-5'} >
                            <div>
                                <h5>{specs.range}<>mi</></h5>
                                <p>Range</p>
                            </div>
                            <div>
                                <h5>{specs.topSpeed}<>km/h</></h5>
                                <p>Top speed</p>
                            </div>
                            <div>
                                <h5>{specs.sec}<>/s</></h5>
                                <p>0-100</p>
                            </div>
                        </div>

                        <h5 className={'d-flex'} > Your Price: {newPrice}$ </h5>

                        <div className={'mt-3'} >
                            <p className={'d-flex'} >Dual Motor All-Wheel Drive:</p>
                            <button onClick={() => {
                                let plaid = {
                                    range: 412,
                                    topSpeed: 200,
                                    sec: 3.1,
                                    version: 'Base Version'
                                };
                                setSpecs(plaid);
                                setNewPrice(tesla.price);
                            }} className={'btn btn-light col-12'} style={{borderRadius: '20px', fontWeight: 'bold'}} >Basic Version:      + 0$</button>
                        </div>

                        <div className={'mt-3'}>
                            <p className={'d-flex'} >Tri Motor All-Wheel Drive:</p>
                            <button onClick={() => {
                                let plaid = {
                                    range: 620,
                                    topSpeed: 250,
                                    sec: 2.5,
                                    version: 'Plaid'
                                };
                                setSpecs(plaid);
                                setNewPrice(tesla.price);
                                setNewPrice(+tesla.price + 25000)
                            }}  className={'btn btn-light col-12'} style={{borderRadius: '20px', fontWeight: 'bold'}} >Plaid:      + 25000$</button>
                        </div>

                        <div className={'mt-3'}>
                            <p className={'d-flex'} >Sport Plus 4 Motor All-Wheel Drive:</p>
                            <button onClick={() => {
                                let plaid = {
                                    range: 812,
                                    topSpeed: 300,
                                    sec: 1.9,
                                    version: 'Plaid Plus'
                                };
                                setSpecs(plaid);
                                setNewPrice(tesla.price);
                                setNewPrice(+tesla.price + 40000)
                            }} className={'btn btn-light col-12'} style={{borderRadius: '20px', fontWeight: 'bold'}} >Plaid Plus:      + 40000$</button>
                        </div>

                        YOUR COLOR:
                        <button style={{backgroundColor: color, borderRadius: '15px', border: '1px solid'}} className={'my-5 btn'} >{color}</button>

                        <p>Choose the exterior color:</p>
                        <div className={'my-3'} > {tesla.color.map((color, index) => (
                            <button className={'btn'} key={index+'color'+color} onClick={() => setColor(color)} style={{border: '1px', backgroundColor: color, borderRadius: '15px'}} >{color}</button>
                        ))} </div>
                        <div>
                            <h4 className={'mt-5'} >Interior:</h4>
                            {
                                tesla.interior.map((item, index) => {
                                    if (index === 0) {
                                       return <button className={'btn btn-dark '} onClick={() => {
                                           setColorInt(index);
                                           setNewPrice(tesla.price);
                                       }} style={{borderRadius: '15px'}}>Basic</button>
                                    } else if (index === 1) {
                                        return <button className={'btn btn-light'} onClick={() => {
                                            setColorInt(index);
                                            setNewPrice(tesla.price);
                                            setNewPrice(+newPrice + 1500);
                                        }} style={{borderRadius: '15px'}}>White</button>
                                    } else {
                                        return <button className={'btn btn-warning'} onClick={() => {
                                            setColorInt(index);
                                            setNewPrice(tesla.price);
                                            setNewPrice(+newPrice + 3500);
                                        }} style={{borderRadius: '15px'}}>Gold</button>
                                    }

                                })
                            }
                        </div>

                        <div className={'my-5'} >
                            <h3>Full Self-Driving Capability</h3>
                            <h5>Before $10,000, now free</h5>

                                <ul>
                                    <li className={'d-flex'} >Navigate on Autopilot</li>
                                    <li className={'d-flex'} >Auto Lane Change</li>
                                    <li className={'d-flex'} >Autopark</li>
                                    <li className={'d-flex'} >Summon</li>
                                    <li className={'d-flex'} >Full Self-Driving Computer</li>
                                    <li className={'d-flex'} >Traffic Light and Stop Sign Control</li>
                                    <li className={'d-flex'} >Coming later this year</li>
                                </ul>


                                <h5>Autosteer on city streets</h5>
                                <div className={'text-left'} >
                                    The currently enabled features require
                                    active driver supervision and do not
                                    make the vehicle autonomous. The activation
                                    and use of these features are dependent on
                                    achieving reliability far in excess of human
                                    drivers as demonstrated by billions of miles
                                    of experience, as well as regulatory approval,
                                    which may take longer in some jurisdictions.
                                    As these self-driving features evolve, your car
                                    will be continuously upgraded through over-the-air
                                    software updates.
                                </div>


                                <button onClick={() => toOrder()} className={'btn btn-dark my-5'}>Order</button>
                        </div>

                    </div>

                </div> : null}

        </div>
    );
};

export default CarPage;
