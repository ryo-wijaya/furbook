import React, { memo } from "react";
import { Button } from "react-native-paper";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { StartStackParamList } from "./ParameterList";
import { BottomTabParamList } from "./ParameterList";

// Navigation Screens
import GetStarted from "../screens/start/GetStarted";
import Login from "../screens/start/Login";
import Register from "../screens/start/Register";
import MainRoutes from "./MainRoutes";
import Pets from "../screens/main/Pets";
import Settings from "../screens/main/Settings";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createNativeStackNavigator<StartStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

interface AuthProps {
  authenticated: boolean;
}

const StartRoutes = (authenticated: AuthProps) => {

    return (
      <>
        {authenticated.authenticated ? (
          <Tab.Navigator screenOptions={{
            headerShown: false,
            // headerStyle: {
            //   backgroundColor: "#6d453d"
            // },
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            //   color: '#fbf3f3'
            // },
            // headerLeft: ({ navigation }) => (<BackButton navigation={{  }}/>),
          }}
          >
            <Tab.Screen name="MainRoutes" 
              component={MainRoutes} 
              options={({ route }) => ({
                  headerTitle: getFocusedRouteNameFromRoute(route),
                })}
              />
            <Tab.Screen name="Pets" component={Pets} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{
            headerShown: false,
          }}
          >
            <Stack.Screen name="GetStarted" component={GetStarted}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        )}
      </>
    );
}

export default memo(StartRoutes);

