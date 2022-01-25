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