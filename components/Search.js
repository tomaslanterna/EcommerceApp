import React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';



const Search = () => {
    return (
        <Searchbar
        placeholder="Type here..."
        color={'black'}
        style={styles.searchBar}/>
    )
}

export default Search

const styles= StyleSheet.create({
    searchBar:{
        position:'absolute',
    }
})
