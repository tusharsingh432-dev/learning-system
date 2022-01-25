import axios from 'axios';

export const createQuiz = ({ quiz, questions, courseId }) => async dispatch => {
    dispatch({ type: 'CREATE_QUIZ_REQUEST' });
    try {
        const response = await axios.post('/api/quiz/create', { quiz, questions, courseId });
        console.log(response);
        dispatch({ type: 'CREATE_QUIZ_SUCCESS' });
        window.location.href = '/teacherhome'
    } catch (e) {
        dispatch({ type: 'CREATE_QUIZ_ERROR', payload: e })
        console.log(e);
    }
}

export const editQuiz = ({ quiz, questions, courseId }) => async dispatch => {
    dispatch({ type: 'EDIT_QUIZ_REQUEST' });
    try {
        const response = await axios.post('/api/quiz/update', { quiz, questions, courseId });
        console.log(response);
        dispatch({ type: 'EDIT_QUIZ_SUCCESS' });
        window.location.href = '/teacherhome'
    } catch (e) {
        dispatch({ type: 'EDIT_QUIZ_ERROR', payload: e })
        console.log(e);
    }
}