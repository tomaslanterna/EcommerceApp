import { createStore,combineReducers,applyMiddleware} from "redux";
import ProductsReducer from "./reducers/Product.reducer";
import CartReducer from "./reducers/Cart.reducer";
import thunk from "redux-thunk";

const RootReducer=combineReducers({
    products:ProductsReducer,
    cart:CartReducer,
});

export default createStore(RootReducer,applyMiddleware(thunk));