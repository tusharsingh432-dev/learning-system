import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Error from '../components/Error';
import Success from '../components/Success'
import { loginUser } from '../actions/userActions';

export default function LoginScreen() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {

        // e.preventDefault();

        const user = {
            email,
            password
        }
        // console.log(user);
        dispatch(loginUser(user));
    }
    const loginState = useSelector(state => state.loginUserReducer);
    const { isLogin, isError, loading } = loginState;
    return <div>

        {isLogin && <Success message="Login Successful" />}
        {isError && <Error error="User Not Found" />}

        <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded">
                <h2>Login</h2>
                <input type="text" placeholder="Email" className="form-control mt-2" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder="Password" className="form-control mt-2" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button type="submit" className="btn btn-primary w-50 h-40 mb-3 mt-2 m-auto primary" onClick={handleLogin}>Login</button>
                <br></br>
                <a href='/register' style={{ color: 'black' }}>Click here to register</a>
            </div>
        </div>
    </div>;
}
