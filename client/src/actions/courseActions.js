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