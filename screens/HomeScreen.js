import React from 'react';
import { View,Button, Text,ScrollView} from 'react-native';
import ItemListContainer from '../components/ItemListContainer';
import { StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <ItemListContainer/>
        </ScrollView>
    );
}

export default HomeScreen;

const styles=StyleSheet.create({
    container:{
        
    }
})