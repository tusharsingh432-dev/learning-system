import axios from 'axios';
export const registerUser = (user) => async dispatch => {
    dispatch({ type: "REGISTER_USER_REQUEST" });
    // console.log('action');
    try {
        const response = await axios.post('/api/users/register', { ...user });
        dispatch({ type: "REGISTER_USER_SUCESS" });
        // console.log(response);
        dispatch(loginUser(user));
    } catch (e) {
        dispatch({ type: "REGISTER_USER_FAILED", payload: e });
    }

}

export const loginUser = (user) => async (dispatch, getState) => {
    // dispatch(logoutUser());
    dispatch({ type: "LOGIN_USER_REQUEST" })

    try {
        const response = await axios.post('/api/users/login', { ...user });
        dispatch({ type: "LOGIN_USER_SUCCESS", payload: response.data });
        const loginState = getState().loginUserReducer;
        localStorage.setItem('userInfo', JSON.stringify(loginState));
        window.location.href = '/'
    } catch (err) {
        dispatch({ type: "LOGIN_USER_ERROR", payload: err })
    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('userInfo');
    window.location.href = '/login';
}

export const passUser = (courseId) => async (dispatch, getState) => {
    dispatch({ type: "PASS_USER_REQUEST" });
    // console.log('action');
    console.log(courseId);
    try {
        const loginState = getState().loginUserReducer;
        // console.log();
        const response = await axios.post('/api/users/passUser', { userId: loginState.user.uniqueId, courseId });
        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (!userInfo.user.passedCourses.includes(courseId)) userInfo.user.passedCourses.push(courseId);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        dispatch({ type: "PASS_USER_SUCESS" });
        // console.log(response);
    } catch (e) {
        dispatch({ type: "PASS_USER_FAILED", payload: e });
    }
}