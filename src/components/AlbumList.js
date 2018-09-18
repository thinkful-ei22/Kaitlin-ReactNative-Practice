import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// const AlbumList = () => {
class AlbumList extends Component {
  // set initial state as albums as an empty array
  state = { albums: [] }

  componentWillMount() {
    // GET request with axios
    // use HTTPS not HTTP
    // returns a promise, use a promise to chain on a function
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => {
      // console.log(response);
      // set the state with the response
      this.setState({ albums: response.data})
    })
  }

  // rendering albums individually
  renderAlbums() {
    // fat arrow function will be called 5 times, 1 from each album. what it returns will be put into a new array.
    return this.state.albums.map(album => 
      // <Text key={album.title}>{album.title}</Text>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  // all classes need a render
  render() {
    console.log(this.state);
    return (
      <View>
       {this.renderAlbums()}
     </View>
    )
  }
}

export default AlbumList;