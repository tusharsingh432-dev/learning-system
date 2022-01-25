import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createQuizReducer, editQuizReducer } from './reducers/quizReducers';
import { loginUserReducer, registerUserReducer } from './reducers/userReducers';
import { getCourseReducer } from './reducers/courseReducers';
const finalReducer = combineReducers({
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    getCourseReducer: getCourseReducer,
    createQuizReducer: createQuizReducer,
    editQuizReducer: editQuizReducer
})

const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : { isLogin: false, isError: false, loading: false };

const initState = {
    loginUserReducer: userInfo,
    registerUserReducer: {
        loading: false,
        sucess: false,
        error: false
    }
};

const composeEnhancers = composeWithDevTools({});
const store = createStore(finalReducer, initState, composeEnhancers(applyMiddleware(thunk)));

export default store;