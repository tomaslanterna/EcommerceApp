import { SIGN_UP } from "../actions/Auth.action";

const InitialState={
    token:null,
    userId:null,
};

const AuthReducer=(state=InitialState,action)=>{
    switch (action.type) {
        case SIGN_UP:
            return{
                ...state,
                token:action.token,
                userId:action.userId,
            }
        default:
            return state
    }
}

export default AuthReducer;