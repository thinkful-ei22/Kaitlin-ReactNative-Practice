// sole purpose is just to make some nice styling that looks like a card

import React from 'react';
import { View } from 'react-native';

const Card = () => {
  return (
    <View style={styles.containerStyle}></View>
  )
}

const styles = {
  // names are arbitrary, they can be anything
  containerStyle: {
    // borders
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // elevation
    elevation: 1,
    // margins
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
}

export default Card;