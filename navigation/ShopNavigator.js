import React from 'react';
import {NavegationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ItemListContainer from '../components/ItemListContainer';
import HomeScreen from '../screens/HomeScreen';

const Stack=createNativeStackNavigator();


const ShopNavigator = () => (
   <NavegationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Products" component={ItemListContainer}/>
        </Stack.Navigator>
    </NavegationContainer>
);


export default ShopNavigator;

