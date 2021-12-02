import { createStore,combineReducers,applyMiddleware,compose} from "redux";
import ProductsReducer from "./reducers/Product.reducer";
import CartReducer from "./reducers/Cart.reducer";
import thunk from "redux-thunk";
import Reactotron from "../constants/ReactToTron.config";

const RootReducer=combineReducers({
    products:ProductsReducer,
    cart:CartReducer,
});

export default createStore(RootReducer,
    compose(
        applyMiddleware(thunk),
        Reactotron.createEnhancer(),
    ),
);