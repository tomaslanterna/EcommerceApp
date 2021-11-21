import React from 'react';
import {NavegationContainer} from '@react-navigation/native';
import { createNativeStackNavigator,createMate } from '@react-navigation/native-stack';

import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Stack=createNativeStackNavigator();


const ShopNavigator = () => {
    <NavegationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    </NavegationContainer>
}

export default ShopNavigator
