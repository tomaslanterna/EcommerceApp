import { createStore,combineReducers } from "redux";
import ProductsReducer from "./reducers/Product.reducer";

const RootReducer=combineReducers({
    products:ProductsReducer,
});

export default createStore(RootReducer);