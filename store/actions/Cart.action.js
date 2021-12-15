import { URL_API } from "../../constants/database";
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CONFIRM_CART = 'CONFIRM_CART';

export const addProduct = product => ({
    type: ADD_PRODUCT,
    product,
});

export const deleteProduct = productId => ({
    type: DELETE_PRODUCT,
    productId,
});

export const confirmCart = (payload, total) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/ordenes.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    date: Date.now(),
                    items: payload,
                    total,
                }),
            });

            const result = await response.json();
            console.log(result);

            dispatch({
                type: CONFIRM_CART,
                status: 'COMPLETED',
            });
        } catch (error) {
            console.log(error.message);
        }
    }
};