import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import { COLORS } from '../constants/colors';

const UserTabs = createMaterialTopTabNavigator();

const TabUserNavegation = () => {
    return (
        <UserTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            }}>
            <UserTabs.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Text color={focused ? COLORS.resalt : COLORS.primary}>SIGN UP</Text>
                        </View>
                    )
                }} />
            <UserTabs.Screen
                name="Login"
                component={SignInScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Text color={focused ? COLORS.resalt : COLORS.primary}>LOGIN</Text>
                        </View>
                    )
                }} />
        </UserTabs.Navigator>
    )
}

export default TabUserNavegation
