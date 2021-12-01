import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import {COLOR} from '../constants/colors';


const Header = () => {
    return (
        <Appbar.Header style={styles.col}>
            <Appbar.Content title="Ecommerce"/>
        </Appbar.Header>
    )
}

export default Header

const styles=StyleSheet.create({
    col:{
        backgroundColor:COLOR.primary
    }
})