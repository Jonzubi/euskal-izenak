import { View, Text } from 'react-native'
import { useState } from 'react'
import styles from './HomeScreen.styles'
import { getName } from '../../functions/getName'
import TinderCard from 'react-tinder-card'
import Name from '../../components/Name/Name'

const HomeScreen = () => {
  const name = getName()

  const onSwipe = (direction: string) => {
  }

  return (
    <View style={styles.container}>
      <TinderCard onSwipe={onSwipe} preventSwipe={['up', 'down']}>
        <Name objName={name}/>
      </TinderCard>
    </View>
  )
}

export default HomeScreen