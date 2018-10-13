import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import App from './App';

export function registerScreens(store) {
  Navigation.registerComponentWithRedux('screen.App', () => App, Provider, store);
}