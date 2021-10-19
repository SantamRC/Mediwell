import state from '../state';

const Auth = (initialState=state,action) => {
    switch(action.type){
        case "AUTH":
            return {
                ...initialState,
                access: action.access,
                refresh: action.refresh,
            }
            default:
                return initialState
    }
}

export default Auth;