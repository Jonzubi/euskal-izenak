import { View } from 'react-native';
import { useState } from 'react';
import styles from './DecisionScreen.styles';
import { getName } from '../../functions/getName';
import TinderCard from 'react-tinder-card';
import Name from '../../components/Name/Name';

const DecisionScreen = () => {
  const [nameStack, setNameStack] = useState([getName(), getName(), getName()]);

  const onSwipe = (direction: string) => {};

  const onCardLeftScreen = (myIdentifier: string) => {
    console.log(myIdentifier + ' left the screen');
  };

  return (
    <View style={styles.container}>
      {nameStack.map((name, index) => (
        <TinderCard
          key={name.name}
          onSwipe={onSwipe}
          preventSwipe={['up', 'down']}
          onCardLeftScreen={onCardLeftScreen}
        >
          <Name objName={name} />
        </TinderCard>
      ))}
    </View>
  );
};

export default DecisionScreen;
