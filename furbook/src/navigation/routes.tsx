import React, { memo } from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "./rootStackParameterList";

// Navigation Screens
import GetStarted from "../screens/start/GetStarted";
import Login from "../screens/start/Login";
import Register from "../screens/start/Register";
import Home from "../screens/Home";
import Notes from "../screens/notes/Notes";

const Stack = createNativeStackNavigator<RootStackParamList>();

interface AuthProps {
  authenticated: boolean;
}

const Routes = (authenticated: AuthProps) => {

    return (
        <Stack.Navigator 
        initialRouteName={authenticated.authenticated ? "Home" : "GetStarted"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notes" component={Notes} />
      </Stack.Navigator>
    );
}

export default memo(Routes);