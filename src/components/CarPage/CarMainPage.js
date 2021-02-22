import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_CARS} from "../../Adress";
import { useHistory } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarMainPage = () => {
    let [cars, setCars] = useState([]);
    let history = useHistory();

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
        axios.get(API_CARS).then((res) => setCars(res.data));
    }, []);

    function toCar(id){
        localStorage.setItem('carId', `${id}`);
        history.push('/carpage');
    }

    return (
        <div className={'mb-5'} >
            {
                cars.map((car, index) => (
                    <div data-aos="fade-up"
                         key={index+'car'} >
                        <div>{car.name}</div>
                        <img className={'img-fluid'} src={car.img} />
                        <button onClick={() => toCar(car.id)} >CUSTOM ORDER</button>
                    </div>
                ))
            }
        </div>
    );
};

export default CarMainPage;
