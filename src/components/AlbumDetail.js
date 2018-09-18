import React from 'react';
// import Image from RN
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'

// solely a presentational component, so this can be a functional component. do not need lifecycle methods or access to state.

// destructure album item out of props
const AlbumDetails = ({ album }) => {
  // destructure props further
  const { title, artist, thumbnail_image } = album;

  return (
    <Card>
      {/* this is being passed to the card component as a child through props.children */}
      {/* <Text>{props.album.title}</Text> */}
      <CardSection>
        <View>
          <Image 
            style={styles.thumbnailStyle} 
            source={{uri: thumbnail_image}} 
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

    </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
}

export default AlbumDetails;