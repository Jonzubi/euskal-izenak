import { View, Text } from 'react-native'
import React from 'react'
import styles from './Name.styles'
import { type Name as TName } from '../../types/izenak'
import { Ionicons } from '@expo/vector-icons'

interface NameProps {
  objName: TName
}

const Name = ({ objName: { name, gender, origin} }: NameProps) => {
  return (
    <View style={[styles.container, gender === 'Mutila' && styles.backgroundBoy, gender === 'Neska' && styles.backgroundGirl]}>
      <Text style={styles.name}>{name}</Text>
      <Ionicons name={gender === 'Mutila' ? 'male' : 'female'} size={100} color="white" style={{ alignSelf: 'center'}} />
      <View style={[styles.originContainer, gender === 'Mutila' && styles.originContainerBoy, gender === 'Neska' && styles.originContainerGirl]}>
        <Text style={styles.originTitle}>Jatorria:</Text>
        <Text style={styles.origin}>{origin}</Text>
      </View>
    </View>
  )
}

export default Name