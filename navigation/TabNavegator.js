import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import CartNavegation from './CartNavegation';
import ShopNavigator from './ShopNavigator';
import UserNavigation from './UserNavigation';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const BottomTabs = createBottomTabNavigator();

const TabNavegator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}>
            <BottomTabs.Screen
                name="ShopTab"
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View styles={styles.item}>
                            <AwesomeIcon name="home" color={focused? 'red':'black'}/>
                            <Text>Home</Text>
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen
                name="UserTab"
                component={UserNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View styles={styles.item}>
                            <AwesomeIcon name="bars" color={focused? 'red':'black'}/>
                            <Text>Profile</Text>
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen
                name="CartTab"
                component={CartNavegation}
                options={{
                    tabBarIcon:
                        ({ focused }) => (
                            <View styles={styles.item}>
                                <AwesomeIcon name="shopping-cart" color={focused? 'red':'black'}/>
                                <Text>Cart</Text>
                            </View>
                        )
                }}
            />
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 200,
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5
    },
    item: {
        fontSize:10
    }
});

export default TabNavegator;
