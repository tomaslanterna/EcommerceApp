import {productos} from '../../Products';
import { SELECT_PRODUCT } from '../actions/Product.action';


const initialState={
    prod:productos,
    selected:null,
}

const ProductsReducer=(state=initialState,action)=>{
    switch(action.type){
        case SELECT_PRODUCT:
            return {
                ...state,
                selected: action.productId,
            };

        default:
            return state;
    }
}

export default ProductsReducer