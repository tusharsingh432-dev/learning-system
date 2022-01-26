export const checkAnswerReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHECK_ANSWER_REQUEST': return {
            loading: true
        }
        case 'CHECK_ANSWER_SUCCESS': return {
            loading: false,
            success: true
        }
        case 'CHECK_ANSWER_ERROR': return {
            loading: false,
            error: action.payload
        }
        default: return state;
    }
}

export const examStateReducer = (state = {}, action) => {
    switch (action.type) {
        case 'INIT_EXAM': return {
            examState: {
                score: 0,
                answered: []
            }
        }
        case 'UPDATE_EXAM_STATE': return {
            examState: action.payload
        }
        default: return state
    }
}

export const removeExamState = (state = {}, action) => {

}