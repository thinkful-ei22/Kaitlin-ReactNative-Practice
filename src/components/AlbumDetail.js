import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'

// solely a presentational component, so this can be a functional component. do not need lifecycle methods or access to state.

const AlbumDetails = (props) => {
  return (
    <Card>
      {/* this is being passed to the card component as a child through props.children */}
      {/* <Text>{props.album.title}</Text> */}
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>

    </Card>
  )
}

export default AlbumDetails;