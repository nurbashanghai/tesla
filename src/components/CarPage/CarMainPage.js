import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_CARS} from "../../Adress";
import { useHistory } from "react-router-dom";

const CarMainPage = () => {
    let [cars, setCars] = useState([]);
    let history = useHistory();

    useEffect(() => {
        axios.get(API_CARS).then((res) => setCars(res.data));
    }, []);

    function toCar(id){
        localStorage.setItem('carId', `${id}`);
        history.push('/carpage');
    }

    return (
        <div>
            {
                cars.map((car, index) => (
                    <div key={index+'car'} >
                        <div>{car.name}</div>
                        <img className={'img-fluid'} src={car.img} />
                        <button onClick={() => toCar(car.id)} >more</button>
                    </div>
                ))
            }
        </div>
    );
};

export default CarMainPage;
