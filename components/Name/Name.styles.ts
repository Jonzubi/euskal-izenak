import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    border: 1,
    borderColor: Colors.border,
    borderRadius: 15,
    width: 90 * windowWidth / 100,
    height: 90 * windowHeight / 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundBoy: {
    backgroundColor: Colors.accent,
  },
  backgroundGirl: {
    backgroundColor: Colors.primary,
  },
  name: {
    fontSize: 30,
    color: Colors.textWhite,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gender: {
    flex: 1
  },
  originContainer:{
    padding: 10,
    borderRadius: 15,
    width: '100%',
  },
  originContainerBoy:{
    backgroundColor: Colors.accentBack,
  },
  originContainerGirl:{
    backgroundColor: Colors.primaryBack,
  },
  originTitle:{
    fontSize: 18,
    color: Colors.textWhite,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  origin: {
    fontSize: 18,
    color: Colors.textSecondary,
    fontStyle: 'italic',
  }
});