import React, { useState, useEffect } from 'react';

// Wraps app in a navigation container to allow for navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Routes from './src/navigation/routes';
import { RootStackParamList } from './src/navigation/rootStackParameterList';

// Firebase authentication
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

// Firebase initialization
import { firebaseApp } from './src/config/firebaseConfig';

import GetStarted from './src/screens/start/GetStarted';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background:'#fff7f4'
  },
};

const App = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [initialRouteName, setInitialRouteName] = useState("Home");

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);


  if (initializing) return null;

  // if (!user) {
  //   setInitialRouteName("GetStarted")
  // }

  return (
    <NavigationContainer theme={MyTheme}>
      <Routes authenticated={!!user}/>
    </NavigationContainer>
  );
};

export default App;