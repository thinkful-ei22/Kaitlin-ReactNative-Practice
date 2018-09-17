/** @format */
// react-native run-ios to start simulator

// Import a library to help create a component
import React from 'react';
// import ReactNative from'react-native';
// must import Text from react-native library
// just want Text property out of that library
import { AppRegistry } from'react-native';
// import the header
import Header from './src/components/header';

// Create a component
// const App = () => {
//   return (
    // we use the Text tags to tell react native that we want to render some text to our device (using jsx)
//     <Text>Some Text</Text>
//   );
// };

// simplify/refactor the code above
const App = () => (
  // nest the header component
  <Header />
);

// Render it to the device
// you have to at least register one component to the application
// name of the string MUST match up with the project name
// 2nd, pass a function to return the FIRST component to render for our application
// must REGISTER at least one component
AppRegistry.registerComponent('albums', () => App);