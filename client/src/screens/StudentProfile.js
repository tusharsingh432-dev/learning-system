import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function StudentProfite() {

    // const [passedCourses, setPassedCourses] = useState();

    const loginState = useSelector(state => state.loginUserReducer);

    // useEffect(() => {
    //     async function fetchData() {
    //         let courses = [];
    //         loginState.user.passedCourses.forEach(async course => {
    //             const response = await axios.post('/api/course/getcoursebyid', { id: course });
    //             courses.push(response.data);
    //         })
    //         setPassedCourses(courses);
    //     }
    //     fetchData();
    // }, [])

    return <div className='container'>
        <div className='row'>
            <h4>incomplete Page</h4>
            <h3>Name: {' ' + loginState.user.name}</h3>
            <h4>Email: {' ' + loginState.user.email}</h4>
            {/* {passedCourses && passedCourses.map((course) => {
                return <h6>{course.name}</h6>
            })} */}
        </div>
    </div>;
}
