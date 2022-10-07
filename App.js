import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import AllTabs from './components/AllTabs';
import Header from './components/Header';

export default function App() {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <Header/>
     <AllTabs/>
    </View>
    
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
