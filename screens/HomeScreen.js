import React from 'react';
import { View, Button, Text, ScrollView } from 'react-native';
import ItemListContainer from '../components/ItemListContainer';
import { StyleSheet } from 'react-native';
import Search from '../components/Search';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View >
                <Search/>
            </View>
            <ScrollView style={styles.list}>
                <ItemListContainer />
            </ScrollView>
        </View>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignContent: "space-between",
    },
    list: {
        marginTop: 30
    }
});