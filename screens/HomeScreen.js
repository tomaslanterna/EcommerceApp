import React from 'react';
import { View,Button, Text,ScrollView} from 'react-native';
import ItemListContainer from '../components/ItemListContainer';
import { StyleSheet } from 'react-native';
import Search from '../components/Search';

const HomeScreen = () => {
    return (
        <>
        <Search/>
        <ScrollView>
            <ItemListContainer/>
        </ScrollView>
        </>
    );
}

export default HomeScreen;
