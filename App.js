import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/CarItem/index';
import CarsList from "./components/CarsList/index";
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Header></Header>
      
      {/* Car items */}

      <CarsList />

      {/* <CarItem 
      name = {"Model X"}
      tagline = {"Order Online For"}
      taglineCTA = {"Touchless Delivery"}
      image = {require('./assets/images/ModelX.jpeg')}
      />
 */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
