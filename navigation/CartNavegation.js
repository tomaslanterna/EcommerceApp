import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/CartScreen';


StackCarrito=createNativeStackNavigator();

const CartNavegation=()=>{
    return(
        <StackCarrito.Navigator>
            <StackCarrito.Screen name="Cart" component={CartScreen}/>
        </StackCarrito.Navigator>
    )

}

export default CartNavegation;