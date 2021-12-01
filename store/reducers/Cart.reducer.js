import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import { ADD_PRODUCT, DELETE_PRODUCT, CONFIRM_CART } from "../actions/Cart.action"

const InitialState = {
    items: [],
    total: 0
}

const setTotal = (cart) => {
    cart.map(item => item.quantity * item.price)
        .reduce((a, b) => a + b, 0);
}

const CartReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            let updatedCart = [];

            if (state.items.find(item => item.id === action.item.id)) {
                updatedCart = state.items.map(item => {
                    if (item.id === action.item.id) item.quantity++;
                    return item;
                });
            } else {
                const item = { ...action.item, quantity: 1 };
                updatedCart = [...state.items, item];
            }

            return {
                ...state,
                items: updatedCart,
                total: setTotal(updatedCart)
            }

        case CONFIRM_CART:
            return {
                ...state,
                status: action.state
            }

        default:
            return state;
    }
}

export default CartReducer;