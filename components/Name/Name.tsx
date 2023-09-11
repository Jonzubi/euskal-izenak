import { View, Text } from 'react-native'
import React from 'react'
import styles from './Name.styles'
import { type Name as TName } from '../../types/izenak'

interface NameProps {
  objName: TName
}

const Name = ({ objName: { name, gender, origin} }: NameProps) => {
  return (
    <View style={[styles.container, gender === 'Mutila' && styles.backgroundBoy, gender === 'Neska' && styles.backgroundGirl]}>
      <Text>{name}</Text>
    </View>
  )
}

export default Name