import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Info from './src/components/Info';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Movies",
              headerStyle: {
                backgroundColor: "#2596be",
              },
              headerTitleStyle: {
                color: "#fff",
              },
            }}
          />
          <Stack.Screen
            name="Information"
            component={Info}
            options={{
              title: "Movies App",
              headerStyle: {
                backgroundColor: "#2596be",
              },
              headerTitleStyle: {
                color: "#fff",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
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
