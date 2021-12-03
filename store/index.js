import { createStore,combineReducers,applyMiddleware,compose} from "redux";
import ProductsReducer from "./reducers/Product.reducer";
import CartReducer from "./reducers/Cart.reducer";
import thunk from "redux-thunk";
import Reactotron from "../constants/ReactToTron.config";
import AuthReducer from "./reducers/Auth.reducer";

const RootReducer=combineReducers({
    products:ProductsReducer,
    cart:CartReducer,
    auth:AuthReducer
});

export default createStore(RootReducer,
    compose(
        applyMiddleware(thunk),
        Reactotron.createEnhancer(),
    ),
);