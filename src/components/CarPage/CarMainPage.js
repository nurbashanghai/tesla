import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_CARS} from "../../Adress";
import { useHistory } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';

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
        <div>
            { !cars ? <div>loading</div> :
                cars.map((car, index) => (
                    <div
                         key={index+'car'}
                         style={{position: 'relative'}}
                    >
                        <img className={'img-fluid'} src={car.img} />
                        <div className={'position-absolute'} style={{top: '10px', left: 0, right: 0}} >
                            <h4 data-aos="fade-down"  >{car.name}</h4>
                            <button data-aos="fade-up" className={'btn btn-primary'} onClick={() => toCar(car.id)} >CUSTOM ORDER</button>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default CarMainPage;
