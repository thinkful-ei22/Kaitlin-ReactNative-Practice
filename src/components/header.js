// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = () => {
  // use the style inside of the component
  const { textStyle, viewStyle } = styles;
  // apply the style to the tag, pass it in as a prop
  return (
    // wrap the text tag w/ a view. makes positioning easier
    // you can set a height on a viewtag and position the text within it
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  )
}

// new styles object
const styles = {
  // view styles
  viewStyle: {
    backgroundColor: '#f8f8f8',
    // center vertically
    justifyContent: 'center',
    // center horizontally
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    // using shadow instead of border
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    // all camel case instead of dash spacing
    fontSize: 20,
  }
}

// make the component available to other parts of the app
export default Header;