import axios from 'axios';

export const initExam = () => (dispatch, getState) => {
    dispatch({ type: 'INIT_EXAM' });
    const examState = getState().examStateReducer;
    localStorage.setItem('examState', JSON.stringify(examState));
}

export const checkAnswers = (question) => async dispatch => {
    console.log(question)
    dispatch({ type: 'CHECK_ANSWER_REQUEST' });
    try {
        const response = await axios.post('/api/question/checkAnswers', { question });
        dispatch({ type: 'CHECK_ANSWER_SUCCESS' })
        if (String(response.data) === String('true')) {
            dispatch(addScore(question));
        }
    } catch (error) {
        dispatch({ type: 'CHECK_ANSWER_ERROR', payload: error.message });
    }
}


export const addScore = (question) => (dispatch, getState) => {
    let examStateReducer = getState().examStateReducer;
    console.log(examStateReducer);
    examStateReducer.examState.score = parseInt(question.marks) + parseInt(examStateReducer.examState.score);
    examStateReducer.examState.answered.push(question.questionId);
    dispatch({ type: 'UPDATE_EXAM_STATE', payload: examStateReducer.examState });
    const examState = getState().examStateReducer;
    localStorage.setItem('examState', JSON.stringify(examState));
}