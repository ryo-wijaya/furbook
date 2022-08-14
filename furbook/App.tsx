import React, { useState, useEffect } from 'react';

// Wraps app in a navigation container to allow for navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Routes from './src/navigation/routes';

// Firebase authentication
import auth from '@react-native-firebase/auth';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background:'#fff7f4'
  },
};

const App = () => {

  const [authenticated, setAuthenticated] = useState(false);

  auth().onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  console.log("Is the user authenticated?", authenticated)

  return (
    <NavigationContainer theme={MyTheme}>
      <Routes />
    </NavigationContainer>
  );
};

export default App;