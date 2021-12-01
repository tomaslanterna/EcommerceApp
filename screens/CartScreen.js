import React from 'react';
import { View,Text } from 'react-native';
import { useSelector } from 'react-redux';

const CartScreen = () => {
    const items = useSelector(state => state.state.cart.items);
    return (
        <View>
            <Text>Estas en el carrito</Text>
        </View>
    )
}

export default CartScreen;
