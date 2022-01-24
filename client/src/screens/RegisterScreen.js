import React, { useState } from 'react'
import { registerUser } from '../actions/userActions';
import { useDispatch } from 'react-redux'
export default function RegisterScreen() {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [role, setRole] = useState(false);

    function handleRegister(e) {

        e.preventDefault();

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            if (password === password2) {
                const user = {
                    name,
                    email,
                    password,
                    isTeacher: role
                }
                console.log(user)
                dispatch(registerUser(user))
            } else alert('Password dont match');
        } else
            alert("You have entered an invalid email address!")
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded">
                    <h2>Registration</h2>
                    <input type="text" placeholder="Name" className="form-control mt-2" required value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input type="text" placeholder="Email" className="form-control mt-2" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" placeholder="Password" className="form-control mt-2" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <input type="password" placeholder="Confirm Password" className="form-control mt-2" required value={password2} onChange={(e) => { setPassword2(e.target.value) }} />
                    <select className="form-control mt-2" placeholder="Select Role" value={role} onChange={(e) => { setRole(e.target.value) }}>
                        <option value={true}>Teacher</option>
                        <option value={false}>Student</option>
                    </select>
                    <button type="submit" className="btn btn-primary w-50 h-40 mb-3 mt-2" onClick={handleRegister}>Register</button>
                    <br></br>
                    <a href='/login' style={{ color: 'black' }}>Click here to login</a>
                </div>
            </div>
        </div >
    )
}
