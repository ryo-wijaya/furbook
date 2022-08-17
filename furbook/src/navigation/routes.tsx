import React, { memo } from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackParamList } from "./rootStackParameterList";

// Navigation Screens
import GetStarted from "../screens/start/GetStarted";
import Login from "../screens/start/Login";
import Register from "../screens/start/Register";
import Pets from "../screens/home/Pets";
import Notes from "../screens/notes/Notes";

import { Button } from "react-native-paper";
import { View } from "react-native";

const Drawer = createDrawerNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

interface AuthProps {
  authenticated: boolean;
}

const GoToNotes = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('Notes' as never, {} as never)}>
          Hello there
      </Button>
    </View>
  );
}

const DrawerNavigator = () => {

  console.log("DrawerNavigator Triggered")
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Notes" component={GoToNotes} />
    </Drawer.Navigator>
  );
}

const Routes = (authenticated: AuthProps) => {

    return (
      <Stack.Navigator 
        initialRouteName={authenticated.authenticated ? "Pets" : "GetStarted"}
        screenOptions={{
          headerShown: false,
        }}
      > 
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Pets" component={Pets} />
        <Stack.Screen name="Notes" component={Notes} />
      </Stack.Navigator>
    );
}

export default memo(Routes);

