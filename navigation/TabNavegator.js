import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import CartNavegation from './CartNavegation';
import ShopNavigator from './ShopNavigator';

const BottomTabs=createBottomTabNavigator();

const TabNavegator = () => {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen name="ShopTab" component={CartNavegation}/>
            <BottomTabs.Screen name="CartTab" component={ShopNavigator}/>
        </BottomTabs.Navigator>
    )
}

const styles=StyleSheet.create({
    tabBar:{
        position:'absolute',
        bottom:25,
        left:20,
        right:20,
        borderRadius:15,
        height:90,
        shadowColor:'#7f5df0',
        shadowOffset:{width:0,height:10},
        shadowOpacity:0.25,
        shadowRadius:0.25,
        elevation:5
    }
});

export default TabNavegator;
