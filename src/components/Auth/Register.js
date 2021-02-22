import React, {useState} from 'react';
import axios from "axios";

const Register = () => {

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
        // let check = false;
        // await axios.get(API_REGISTRATION).then(res => {
        //     res.data.forEach((p) => {
        //         if(p.account === user.account){
        //             alert('User already exists!');
        //             check = true;
        //         }
        //     })
        // });
        // if(!check){
        //     axios.post(API_REGISTRATION, user).then((res) => {
        //         window.location.reload()
        //     })
        // }
    }

    return(
        <div>
            Registration
            <input onChange={handleInputs} type={'text'} name={'account'} />
            <input onChange={handleInputs} type={'text'} name={'password'} />
            <button onClick={register} >Register</button>
        </div>
    )
};

export default Register;
