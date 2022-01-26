export const getCourseReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_COURSE_REQUEST": return {
            loading: true
        }

        case "GET_COURSE_SUCCESS": return {
            ...state,
            loading: false,
            sucess: true,
            courses: action.payload
        }

        case "GET_COURSE_FAILED": return {
            ...state,
            loading: false,
            error: action.payload
        }

        default: return state
    }
}

export const deleteCourseReducer = (state = {}, action) => {
    switch (action.type) {
        case "DELETE_COURSE_REQUEST": return {
            loading: true
        }

        case "DELETE_COURSE_SUCCESS": return {
            ...state,
            loading: false,
            sucess: true,
            courses: action.payload
        }

        case "DELETE_COURSE_FAILED": return {
            ...state,
            loading: false,
            error: action.payload
        }

        default: return state
    }
}