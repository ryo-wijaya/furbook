import React, { useState, useEffect } from 'react';

// Wraps app in a navigation container to allow for navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Routes from './src/navigation/routes';

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
      <Routes />
    </NavigationContainer>
  );
};

export default App;