import React from 'react';
import { NavegationContainer } from '@react-navigation/native';
import TabNavegator from './TabNavegator';

const MainNavegation = () => {
    return (
        <NavegationContainer>
            <TabNavegator/>
        </NavegationContainer>
    )
}

export default MainNavegation;
