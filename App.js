import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from './components/Header';
import MainNavegation from './navigation/MainNavegation';
import store from './store';
import { Provider } from 'react-redux';
import {init} from './db';



export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <MainNavegation />
      <StatusBar style="auto" />
    </Provider>
  );
}

