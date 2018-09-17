import React, { Component } from 'react';
import { View, Text } from 'react-native';

// const AlbumList = () => {
class AlbumList extends Component {
  componentWillMount() {
    console.log('componentWillMount in AlbumList');
  }
  // all classes need a render
  render() {
    return (
      <View>
       <Text>Album List!!!</Text>
     </View>
    )
  }
}

export default AlbumList;