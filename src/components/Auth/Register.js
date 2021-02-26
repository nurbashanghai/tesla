import React, {useState} from 'react';
import axios from "axios";
import {API_REGISTRATION} from "../../Adress";
import {useHistory} from 'react-router-dom';
import Header from "../Header/Header";

const Register = () => {
    let history = useHistory();

    let [user, setUser] = useState({});
    function handleInputs(e){
        let obj = {
            ...user,
            [e.target.name]: e.target.value,
            id: Date.now()
        };
        setUser(obj);
    }

    async function register(){
        let check = false;
        await axios.get(API_REGISTRATION).then(res => {
            res.data.forEach((p) => {
                if(p.account === user.account){
                    alert('User already exists!');
                    check = true;
                }
            })
        });
        if(!check){
            axios.post(API_REGISTRATION, user).then(() => {
                window.location.pathname = '/home'
            })
        }
    }

    return(
        <div>
            <Header/>
            <h1 className={'mt-5'}>Sign Up</h1>
            <div className={'mt-5'} >
                <h3>Email</h3>
                <input onChange={handleInputs} type={'text'} name={'account'} />
            </div>
            <div className={'mt-5'}>
                <h3>Password</h3>
                <input onChange={handleInputs} type={'text'} name={'password'} />
            </div>
            <div className={'mt-5'}>
                <button className={'btn btn-primary mx-5'} onClick={register} >Register</button>
            </div>
            <div className={'mt-5'}>
                <button className={'btn btn-primary mx-5'} onClick={() => history.push('/login')} >Login</button>
            </div>
        </div>
    )
};

export default Register;

