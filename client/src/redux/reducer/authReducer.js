const initialState = {
    token : null,
    user : null
}

export const authReducer = (state = initialState,action) => {
    switch (action.type) {
        case "AUTH_LOGIN":
        localStorage.setItem("dataLogin", JSON.stringify(
            {
                token : action.payload.token,
                user : action.payload.user
            }
        ))
        return {
            token : action.payload.token,
            user : action.payload.user
        }
        case "AUTH_LOGOUT" :
        localStorage.removeItem("dataLogin")
        return {
            token : null,
            user : null
        }
        default:
            return state
    }
}

 