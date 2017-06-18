/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import { AppRegistry, UIManager, } from 'react-native';
import App from './src/app';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent('TechStack', () => App);
