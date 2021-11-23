import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from './ShopNavigator';
import CartNavegation from './CartNavegation';

const BottomTabs=createBottomTabNavigator();

const TabNavegator = () => {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen name="ShopTab" component={ShopNavigator}/>
            <BottomTabs.Screen name="CartTab" component={CartNavegation}/>
        </BottomTabs.Navigator>

        
    )
}

export default TabNavegator;
