import { SIGN_UP } from "../actions/Auth.action";
import { SIGN_IN } from "../actions/Auth.action";

const InitialState={
    token:null,
    userId:null,
};

const AuthReducer=(state=InitialState,action)=>{
    switch (action.type) {
        case SIGN_UP:
        case SIGN_IN:
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