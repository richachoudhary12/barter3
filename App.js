import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';


import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';

import Switch from './components/Navigate';

export default class App extends React.Component {
  render() {
    return (
      <View>
     
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Home: Home,
  Switch: Switch,
});

const AppContainer = createAppContainer(AppNavigator);
