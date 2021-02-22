import React, {useState} from 'react';

const Login = () => {
    let [account, setAccount] = useState('');
    let [password, setPassword] = useState('');

    function login(){
        console.log(account, password)
    }

    return (
        <div>
            <div>
                Login<input type={'text'} value={account} onChange={(e) => setAccount(e.target.value)}/>
            </div>
            <div>
                Password<input type={'text'} value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Login;
