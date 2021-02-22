import React, {useEffect, useState} from 'react';
import {API_CARS} from "../../Adress";
import axios from "axios";

const CarPage = () => {
    let [tesla, setTesla] = useState([]);
    let id = localStorage.getItem('carId');

    useEffect(async () => {
        await axios.get(`${API_CARS}/${id}`).then((res) => setTesla(res.data));
        console.log(tesla);
    },[]);

    return (
        <div>

        </div>
    );
};

export default CarPage;
