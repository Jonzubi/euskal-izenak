import { View, Text } from 'react-native';
import React from 'react';
import styles from './HomeScreen.styles';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.childContainer, styles.containerBoy]}>
        <Text style={styles.text}>Mutil-izenak</Text>
        <Ionicons name="male" size={30} color={'white'} />
      </View>
      <View style={[styles.childContainer, styles.containerGirl]}>
        <Text style={styles.text}>Neska-izenak</Text>
        <Ionicons name="female" size={30} color={'white'} />
      </View>
      <View style={[styles.childContainer, styles.containerAll]}>
        <Text style={styles.text}>Izen denak</Text>
        <Ionicons name="male-female" size={30} color={'white'} />
      </View>
    </View>
  );
};

export default HomeScreen;
