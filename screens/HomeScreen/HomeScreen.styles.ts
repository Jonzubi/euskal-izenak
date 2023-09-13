import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'space-between',
    gap: 15,
    padding: 15,
  },
  childContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    borderRadius: 10,
  },
  containerBoy: {
    backgroundColor: Colors.accent,
  },
  containerGirl: {
    backgroundColor: Colors.primary,
  },
  containerAll: {
    backgroundColor: Colors.yellow,
  },
  text: {
    color: Colors.textWhite,
    textShadowColor: Colors.text,
    textShadowRadius: 5,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
