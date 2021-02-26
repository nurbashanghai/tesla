import React, {useEffect, useState} from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap'
import  'react-phone-number-input/style.css'
import Header from "../Header/Header";
import {useHistory} from 'react-router-dom';

const CarCheckoutForm = () => {
    let history = useHistory();
    const [check, setCheck] = useState({});
    let [car, setCar] = useState(null);

    function handleInp(e){
        let obj = {
            ...check,
            [e.target.name]: e.target.value,
            id: Date.now()
        };
        setCheck(obj);
    }

    useEffect(() => {
        setCar(JSON.parse(localStorage.getItem('carOrder')));
    },[]);

    async function toCheckOut(){
        await localStorage.setItem('check', JSON.stringify(check));
        history.push('/carpay');
    }

    // range: 412,
    //     topSpeed: 200,
    //     sec: 3.1,

    return (
        <div>
            <Header/>

            {
                car ? <div>
                    <h5>Model: {car.name}</h5>
                        <h5>Your Color: {car.choosenColor}</h5>
                    <img className={'img-fluid'} src={car[`img_${car.choosenColor}`][0]} />
                        <h5>Interior Color:</h5>
                    <img className={'img-fluid'} src={car.interior[car.intColor]}/>
                        <h5>Version: {car.specs.version}</h5>
                        <p>Range: {car.specs.range}mi </p>
                        <p>Top Speed: {car.specs.topSpeed} km/h </p>
                        <p>Acceleration 0-100km: {car.specs.sec}s </p>
                    <h5>Total Price: {car.price}$</h5>
                </div>
                    : null
            }


            <h1>Checkout Form</h1>
            <div className={'d-flex justify-content-around'} >
                <div>
                    <Form>
                        <Form.Group as={Col} controlId="name">
                            <Form.Label>Name<Form.Control onChange={(e) => handleInp(e)} name={'name'} type="text"/></Form.Label>

                        </Form.Group>

                        <Form.Group  as={Col} controlId="lastName">
                            <Form.Label>Last Name<Form.Control onChange={(e) => handleInp(e)} name={'lastname'} type="text"/></Form.Label>

                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email<Form.Control onChange={(e) => handleInp(e)} name={'email'} type="email"/></Form.Label>
                        </Form.Group>
                    </Form>

                    <Form.Group controlId="formGridContry">
                        <Form.Label>Contry<Form.Control  onChange={(e) => handleInp(e)} name={'country'} /></Form.Label>
                    </Form.Group>

                    <Form>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City <Form.Control  onChange={(e) => handleInp(e)} name={'city'} /></Form.Label>
                        </Form.Group>
                    </Form>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address<Form.Control  onChange={(e) => handleInp(e)} name={'adress'} /></Form.Label>
                    </Form.Group>

                    <button
                        onClick={toCheckOut}
                        style={{
                            margin:'15px',
                            height:'40px',
                            backgroundColor:'black',
                            borderRadius:'20px',
                            color:'white' ,
                            alignItems:'center',
                        }}> CONTINUE</button>
                </div>
            </div>
        </div>
    );
};

export default CarCheckoutForm;
