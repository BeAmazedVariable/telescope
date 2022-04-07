import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Posts from '../components/Post/Posts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen = ({ navigation }) => {
  const navigateToContact = () => {
    navigation.navigate('Contact');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Posts />
    </SafeAreaView>
  );
};

export default HomeScreen;
