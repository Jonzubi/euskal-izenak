import { View, Text } from 'react-native'
import React from 'react'
import styles from './HomeScreen.styles'
import { getName } from '../../functions/getName'
import TinderCard from 'react-tinder-card'
import Name from '../../components/Name/Name'

const HomeScreen = () => {
  const topLevelName = getName()
  const nextName = getName()

  const onSwipe = (direction: string) => {
  console.log('You swiped: ' + direction)
}

const onCardLeftScreen = (myIdentifier: string) => {
  console.log(myIdentifier + ' left the screen')
}
  return (
    <View style={styles.container}>
      <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')}>
        <Name objName={topLevelName}/>
      </TinderCard>
    </View>
  )
}

export default HomeScreen