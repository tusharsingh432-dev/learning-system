import axios from 'axios';
export const getAllCourses = () => async dispatch => {
    console.log('getAllCourses');
    dispatch({ type: 'GET_COURSE_REQUEST' });
    try {
        const response = await axios.get('/api/course/getCourses');
        console.log(response);
        dispatch({ type: 'GET_COURSE_SUCCESS', payload: response.data });
    } catch (err) {
        dispatch({ type: 'GET_COURSE_FAILED', payload: err });
    }
}

export const deleteCourses = (id) => async dispatch => {
    dispatch({ type: 'DELETE_COURSE_REQUEST' });
    try {
        const response = await axios.post('/api/course/delete', { id });
        dispatch({ type: 'DELETE_COURSE_SUCCESS', payload: response.data });
        window.location.reload();
    } catch (err) {
        dispatch({ type: 'DELETE_COURSE_FAILED', payload: err });
    }
}
