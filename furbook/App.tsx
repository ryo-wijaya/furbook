import React, {type PropsWithChildren} from 'react';

// Wraps app in a navigation container to allow for navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/navigation/RootStackParamList';

// Navigation Screens
import GetStarted from './src/screens/start/GetStarted'
import Login from './src/screens/start/Login';
import Register from './src/screens/start/Register';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background:'#fff7f4'
  },
};


const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator 
        initialRouteName="GetStarted"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;