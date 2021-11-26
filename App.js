import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import Header from './components/Header';
import MainNavegation from './navigation/MainNavegation';
import store from './store';
import { Provider } from 'react-redux';


export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <MainNavegation />
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
