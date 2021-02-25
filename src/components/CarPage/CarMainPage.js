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
            { !cars ? <div>loading</div> :
                cars.map((car, index) => (
                    <div
                         key={index+'car'}
                         style={{position: 'relative'}}
                    >
                        <img className={'img-fluid'} src={car.img} />
                        <div className={'position-absolute'} style={{top: '50px', left: 0, right: 0}} >
                            <h4 >{car.name}</h4>
                            <button className={'btn btn-primary'} onClick={() => toCar(car.id)} >CUSTOM ORDER</button>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default CarMainPage;
