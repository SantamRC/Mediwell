import state from './state';

const Auth = (state=state,action) => {
    switch(action.type){
        case "Auth":
            return {
                ...state,
                access: state.access,
                refresh: state.refresh,
            }
            default:
                return state
    }
}

export default Auth;