import { View, Text } from 'react-native'
import React from 'react'
import styles from './HomeScreen.styles'
import { useNames } from '../../hooks/useNames'

const HomeScreen = () => {
  const names = useNames()
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      {names.map((name, index) => (
        <Text key={index}>{name.name}</Text>
      ))}
    </View>
  )
}

export default HomeScreen