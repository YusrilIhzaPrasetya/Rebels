const initialState = {
    token : null,
    user : null
}

const authReducer = (state = initialState,action) => {
    switch (action.type) {
        case "AUTH_LOGIN":
        return {
            token : action.payload.token,
            user : action.payload.user
        }
        
        case "AUTH_LOGOUT" :
        return {
            token : null,
            user : null
        }
    
        default:
            return state
    }
}

export default authReducer