import React, { memo } from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigation Screens
import Home from "../screens/home/Home";
import Notes from "../screens/notes/Notes";
import AppBar from "../components/AppBar";

import { HomeStackParamList } from "./ParameterList";

const Stack = createNativeStackNavigator<HomeStackParamList>();


const HomeRoutes = () => {

    return (
      <Stack.Navigator 
        screenOptions={{
          header: (props) => <AppBar {...props} />,
          // headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notes" component={Notes}/>
      </Stack.Navigator>
    );
}

export default memo(HomeRoutes);