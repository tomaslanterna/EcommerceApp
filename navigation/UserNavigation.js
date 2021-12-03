import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from '../screens/UserScreen';
import TabUserNavegation from './TabUserNavegation';

const UserStack = createNativeStackNavigator();

const UserNavigation = () => {

    const user = null;

    return (
        <UserStack.Navigator screenOptions={{ headerShown: false }}>
            {user == null ? <UserStack.Screen name="UserNoLogin" component={TabUserNavegation} />
                : <UserStack.Screen name="UserLogin" component={UserScreen} />}
        </UserStack.Navigator>
    )
}

export default UserNavigation
