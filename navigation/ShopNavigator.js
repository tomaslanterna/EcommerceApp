import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ItemDetails from '../components/ItemDetails';

const Stack = createNativeStackNavigator();


const ShopNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProductDetails" component={ItemDetails}/>
        </Stack.Navigator>
    )
}


export default ShopNavigator;

