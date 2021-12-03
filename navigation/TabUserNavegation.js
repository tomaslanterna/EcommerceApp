import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,Text } from 'react-native';

const UserTabs=createMaterialTopTabNavigator();

const TabUserNavegation = () => {
    return (
        <UserTabs.Navigator>
            <UserTabs.Screen
            name="SignUpTab"
            component={}
            options={{
                tabBarIcon:({focused})=>(
                    <View>
                        <Text color={focused? COLORS.resalt:COLORS.primary}>SIGN UP</Text>
                    </View>
                )
            }}/>
            <UserTabs.Screen
            name="LoginTab"
            component={}
            options={{
                tabBarIcon:({focused})=>(
                    <View>
                        <Text color={focused? COLORS.resalt:COLORS.primary}>LOGIN</Text>
                    </View>
                )
            }}/>
        </UserTabs.Navigator>
    )
}

export default TabUserNavegation
