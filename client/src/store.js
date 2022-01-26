import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createQuizReducer, deleteQuizReducer, editQuizReducer, getQuestionForTestReducer } from './reducers/quizReducers';
import { loginUserReducer, passUserReducer, registerUserReducer } from './reducers/userReducers';
import { deleteCourseReducer, getCourseReducer } from './reducers/courseReducers';
import { checkAnswerReducer, examStateReducer } from './reducers/examReducers';
const finalReducer = combineReducers({
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    getCourseReducer: getCourseReducer,
    deleteCourseReducer: deleteCourseReducer,
    createQuizReducer: createQuizReducer,
    editQuizReducer: editQuizReducer,
    deleteQuizReducer: deleteQuizReducer,
    getQuestionForTestReducer: getQuestionForTestReducer,
    examStateReducer: examStateReducer,
    checkAnswerReducer: checkAnswerReducer,
    passUserReducer: passUserReducer
})

const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : { isLogin: false, isError: false, loading: false };

const examState = localStorage.getItem('examState')
    ? JSON.parse(localStorage.getItem('examState'))
    : {}

// console.log(examState);

const initState = {
    loginUserReducer: userInfo,
    registerUserReducer: {
        loading: false,
        sucess: false,
        error: false
    },
    examStateReducer: examState
};

const composeEnhancers = composeWithDevTools({});
const store = createStore(finalReducer, initState, composeEnhancers(applyMiddleware(thunk)));

export default store;