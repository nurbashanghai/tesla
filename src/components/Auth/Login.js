import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_REGISTRATION} from "../../Adress";
import {useHistory} from 'react-router-dom';
import {Form} from "react-bootstrap";
import Header from "../Header/Header";

const Login = () => {

    let history = useHistory();

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});
    let [curr, setCurr] = useState(JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')) : 'asd');

    useEffect(() => {
        axios.get(API_REGISTRATION).then(res => {
            setUsers(res.data);
        })
    },[]);

    function handleInps(e){
        let obj = {
            ...user,
            [e.target.name]: e.target.value
        };
        setUser(obj);
    }

    function login(){
        let check = false;
        let currentUser = {};
        users.forEach((p) => {
            if(p.account === user.account && p.password === user.password){
                check = true;
                currentUser = p;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
            }
        });
        if(check){
            window.location.pathname = '/home';
        } else {
            alert('No such user');
        }
    }
    return (
        <div>
            <Header/>
            <h1 className={'mt-5'} >Login</h1>
            <div className={'mt-5'} >
                <h3>Email</h3>
                <input onChange={handleInps} type='email' name={'account'} placeholder='Enter email'/>
            </div>
            <div className={'mt-5'} >
                <h3>Password</h3>
                <input onChange={handleInps} name={'password'} type='password' placeholder='Enter password'/>
            </div>
            <div className={'mt-5'}>
                <button className={'btn btn-primary'} onClick={login} >Login</button>
            </div>
            <div className={'mt-5'}>
                <button className={'btn btn-primary mx-5'} onClick={() => history.push('/register')} >Register</button>
            </div>
        </div>
    );
};

export default Login;
