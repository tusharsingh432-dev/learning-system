export const createQuizReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_QUIZ_REQUEST': return {
            loading: true
        }
        case 'CREATE_QUIZ_SUCCESS': return {
            loading: false,
            success: true
        }
        case 'CREATE_QUIZ_ERROR': return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

export const editQuizReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_QUIZ_REQUEST': return {
            loading: true
        }
        case 'EDIT_QUIZ_SUCCESS': return {
            loading: false,
            success: true
        }
        case 'EDIT_QUIZ_ERROR': return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

export const deleteQuizReducer = (state = {}, action) => {
    switch (action.type) {
        case 'DELETE_QUIZ_REQUEST': return {
            loading: true
        }
        case 'DELETE_QUIZ_SUCCESS': return {
            loading: false,
            success: true
        }
        case 'DELETE_QUIZ_ERROR': return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

export const getQuestionForTestReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_QUESTION_FOR_TEST_REQUEST': return {
            loading: true
        }
        case 'GET_QUESTION_FOR_TEST_SUCCESS': return {
            loading: false,
            success: true,
            questions: action.payload
        }
        case 'GET_QUESTION_FOR_TEST_ERROR': return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}