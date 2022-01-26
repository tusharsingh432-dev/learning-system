import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourses, getAllCourses } from '../actions/courseActions';
import { deleteQuiz } from '../actions/quizActions';
export default function TeacherScreen() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCourses());
        if (loginState.isLogin === false) {
            window.location.href = '/login'
        } else if (loginState.user.isTeacher === false) {
            window.location.href = '/'
        }
    }, [])

    const loginState = useSelector(state => state.loginUserReducer);
    const courseState = useSelector(state => state.getCourseReducer);
    let courses = courseState.courses;
    useEffect(() => {
        courses = courseState.courses;
    }, [courseState]);

    const [name, setName] = useState('');
    async function handleCreate() {
        if (name === '') alert('Please enter a name');
        else {
            const course = {
                name,
                createdBy: loginState.user.uniqueId
            }
            try {
                const response = await axios.post('/api/course/create', course);
                window.location.href = '/teacherhome'
            } catch (err) {
                console.log(err);
            }
        }
    }

    return <div>
        <div className='row justify-content-center'>
            <h1>Courses</h1>
            <div className='col-md-10 mt-5'>
                <table className='table table-hover table-bordered'>
                    <thead>
                        <tr>
                            <td><h5>Name</h5></td>
                            <td><h5>Quiz Actions</h5></td>
                            <td><h5>Course Actions</h5></td>
                        </tr>

                    </thead>
                    <tbody>
                        {courses && courses.map(course =>
                            <tr key={course.courseId}>
                                <td>{course.name}</td>
                                <td>
                                    {course.quiz.length > 0
                                        ? <div>
                                            <a onClick={() => { dispatch(deleteQuiz(course.courseId)) }} style={{ marginRight: "10px", color: 'red' }}>
                                                <i className="fas fa-trash-alt"></i>
                                            </a>
                                            <a href={`/editquiz/${course.quiz[0]}`}>
                                                <i className="fas fa-edit"></i>
                                            </a>
                                        </div>
                                        : <a href={`/addquiz/${course.courseId}`} style={{ color: 'green' }}><i className="fas fa-plus-square"></i></a>}
                                </td>
                                <td>
                                    <a onClick={() => { dispatch(deleteCourses(course.courseId)) }} style={{ marginRight: "10px", color: 'red' }}>
                                        <i className="fas fa-trash-alt"></i>
                                    </a>
                                    <a href={`/editcourse/${course.courseId}`}>
                                        <i className="fas fa-edit"></i>
                                    </a>
                                </td>
                            </tr>
                        )}
                        <tr>
                            <td>
                                <input type="text"
                                    placeholder="Name" className="form-control" required
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </td>
                            <td></td>
                            <td>
                                <button type="submit"
                                    className="btn btn-primary w-50 h-40"
                                    onClick={handleCreate}>
                                    Create
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <a href='/addCourse' className="btn btn-primary col-md-3">Add Course</a> */}
            {/* <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded">
                    <h2>New Course</h2>
                    <input type="text" placeholder="Name" className="form-control mt-2" required value={name} onChange={(e) => { setName(e.target.value) }} />
                    <button type="submit" className="btn btn-primary w-50 h-40 mb-3 mt-2" onClick={handleCreate}>Create Course</button>
                </div>
            </div> */}
        </div>
    </div>;
}
