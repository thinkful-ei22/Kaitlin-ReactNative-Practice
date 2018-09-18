import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={buttonStyle}
    >
      <Text style={textStyle}>
        Click Me!
      </Text>
    </TouchableOpacity>
  )
}

// align items = tells a container to align its children in a particular fashion

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1, // i want this button to expand to fill as much content as possible
    alignSelf: 'stretch', // property tied to stretch box, want this element to position itself using flexbox rules - stretch to fill the limits of the container
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
}

export default Button;