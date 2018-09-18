import React from 'react';
import { View, Text } from 'react-native';

// solely a presentational component, so this can be a functional component. do not need lifecycle methods or access to state.

const AlbumDetails = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  )
}

export default AlbumDetails;