import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../actions/courseActions';
import { initExam } from '../actions/examActions';

export default function StudentScreen() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCourses());
        if (loginState.isLogin === false) {
            window.location.href = '/login'
        }
    }, [])

    const loginState = useSelector(state => state.loginUserReducer);
    const courseState = useSelector(state => state.getCourseReducer);
    let courses = courseState.courses;
    useEffect(() => {
        courses = courseState.courses;
    }, [courseState]);

    return <div>
        <div className='row justify-content-center'>
            <h1>Courses</h1>
            <div className='col-md-10 mt-5'>
                <table className='table table-hover table-bordered'>
                    <thead>
                        <tr>
                            <td><h5>Name</h5></td>
                            <td><h5>Quiz</h5></td>
                        </tr>

                    </thead>
                    <tbody>
                        {courses && courses.map(course =>
                            <tr key={course.courseId}>
                                <td>{course.name}</td>
                                <td>
                                    {loginState.user.passedCourses.includes(course.courseId)
                                        ? <div className="btn btn-success">Passed</div>
                                        : course.quiz.length > 0
                                            ? <a href={`/takequiz/${course.quiz[0]}`} onClick={e => { dispatch(initExam()) }} className='btn btn-primary'>Take</a>
                                            : <div className='btn btn-secondary'>Unavailable</div>
                                    }
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
