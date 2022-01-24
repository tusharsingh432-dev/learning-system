import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function HomeScreen() {

    const loginState = useSelector(state => state.loginUserReducer);

    useEffect(() => {
        if (!loginState.isLogin) {
            window.location.href = '/login';
        } else {
            if (loginState.user.isTeacher) {
                window.location.href = '/teacherhome';
            } else if (!loginState.user.isTeacher) {
                window.location.href = '/studenthome'
            }
        }
    }, [])

    return <div> <h2 className="alert alert-primary w-50 m-auto" role="alert">Redirecting</h2> </div>;
}
