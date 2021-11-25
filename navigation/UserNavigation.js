import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from '../screens/UserScreen';

const UserStack=createNativeStackNavigator();

const UserNavigation = () => {
    return (
        <UserStack.Navigator>
            <UserStack.Screen name="User" component={UserScreen}/>
        </UserStack.Navigator>
    )
}

export default UserNavigation
