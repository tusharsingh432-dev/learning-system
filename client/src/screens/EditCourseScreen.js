import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function EditCourseScreen({ match }) {
    // console.log(match.params.courseid)
    const [name, setName] = useState('');
    const loginState = useSelector(state => state.loginUserReducer);
    useEffect(() => {
        async function fetchData() {
            if (loginState.isLogin === false) {
                window.location.href = '/login'
            } else if (loginState.user.isTeacher === false) {
                window.location.href = '/'
            }
            try {
                const response = await axios.post('/api/course/getcoursebyid', { id: match.params.courseid });
                setName(response.data.name);
                // console.log(response.data);
            } catch (e) {
                console.log(e);
                alert('Something went wrong')
            }
        }
        fetchData();
    }, [])

    async function handleEdit() {
        if (name === '') alert('Please enter a name');
        else {
            try {
                const response = await axios.post('/api/course/update', { name, id: match.params.courseid });
                window.location.href = '/teacherhome'
            } catch (err) {
                alert('Error updating');
                console.log(err);
            }
        }
    }
    return <div>
        <h2>Edit Course</h2>
        <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded">
                <h2>New Course</h2>
                <input type="text" placeholder="Name" className="form-control mt-2" required value={name} onChange={(e) => { setName(e.target.value) }} />
                <button type="submit" className="btn btn-primary w-50 h-40 mb-3 mt-2" onClick={handleEdit}>Update</button>
            </div>
        </div>
    </div>;
}
