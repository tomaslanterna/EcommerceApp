import React from 'react'
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = () => {
    return (
        <Appbar.Header dark={true}>
            <Appbar.Content title="Ecommerce"/>
            <Appbar.Action/>
        </Appbar.Header>
    )
}

export default Header
