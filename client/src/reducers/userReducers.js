export const registerUserReducer = (state = {}, action) => {
    switch (action.type) {
        case "REGISTER_USER_REQUEST": return {
            ...state,
            loading: true
        }

        case "REGISTER_USER_SUCESS": return {
            ...state,
            loading: false,
            sucess: true
        }

        case "REGISTER_USER_FAILED": return {
            ...state,
            loading: false,
            error: action.payload
        }

        default: return state
    }
}

export const loginUserReducer = (state = { isLogin: false }, action) => {
    switch (action.type) {
        case "LOGIN_USER_REQUEST": return {
            loading: true,
            isLogin: false,
            isError: false
        }
        case "LOGIN_USER_SUCCESS": return {
            ...state,
            loading: false,
            isLogin: true,
            isError: false,
            user: action.payload
        }
        case "LOGIN_USER_ERROR": return {
            ...state,
            loading: false,
            isLogin: false,
            isError: true,
            error: action.payload
        }
        default: return state
    }
}

export const passUserReducer = (state = {}, action) => {
    switch (action.type) {
        case "PASS_USER_REQUEST": return {
            loading: true
        }

        case "PASS_USER_SUCESS": return {
            loading: false,
            sucess: true
        }

        case "PASS_USER_FAILED": return {
            loading: false,
            error: action.payload
        }

        default: return state
    }
}