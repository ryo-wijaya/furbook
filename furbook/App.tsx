import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';


// Wraps app in a navigation container to allow for navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import StartRoutes from './src/navigation/StartRoutes';

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

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


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



  return (
    <NavigationContainer theme={MyTheme}>
      <StartRoutes authenticated={!!user}/>
    </NavigationContainer>
  );
};

export default App;