import React, { memo } from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "./rootStackParameterList";

// Navigation Screens
import GetStarted from "../screens/start/GetStarted";
import Login from "../screens/start/Login";
import Register from "../screens/start/Register";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
    return (
        <Stack.Navigator 
        initialRouteName="GetStarted"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
}

export default memo(Routes);