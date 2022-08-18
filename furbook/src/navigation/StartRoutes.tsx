import React, { memo } from "react";
import { Button, Avatar, ActivityIndicator } from "react-native-paper";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

const Stack = createNativeStackNavigator<StartStackParamList>();
const Tab = createMaterialTopTabNavigator<BottomTabParamList>();

interface AuthProps {
  authenticated: boolean;
}

const StartRoutes = (authenticated: AuthProps) => {

    return (
      <>
        {authenticated.authenticated ? (
          <Tab.Navigator 
            initialRouteName="Home"
            tabBarPosition="bottom"
            backBehavior="history"
            screenOptions={({ route }) => ({
            headerShown: false,
            tabBarInactiveBackgroundColor: "#ae928e",
            tabBarActiveBackgroundColor: "#e0cfc8",
            tabBarInactiveTintColor: "white",
            tabBarActiveTintColor: "white",
            tabBarContentContainerStyle: {},
            tabBarLabelStyle: {},
            tabBarIconStyle: {alignItems: "center", justifyContent: "center"},
            tabBarIndicatorStyle: {backgroundColor: "#fbf3f3"},
            tabBarStyle: {height: 65, backgroundColor: "#ae928e"},
            tabBarAllowFontScaling: true,
            tabBarBadgeStyle: {color: "white", backgroundColor: "brown"},
            tabBarIcon: ({ focused, color }) => {
              var iconName: IconSource = "";
              var size = 50;
              if (route.name === 'Home') {
                iconName = 'home'
              } else if (route.name === 'Settings') {
                iconName = 'dots-horizontal-circle-outline'
              } else if (route.name === 'Pets') {
                iconName = 'dog'
              }
              return (<Avatar.Icon icon={iconName} size={size} color="white" theme={{colors: {primary: 'brown'}}} style={{ backgroundColor: 'rgba(52, 52, 52, 0)'
            }}></Avatar.Icon>)
            },
          })}
          >
            <Tab.Screen name="Pets" component={Pets}/>
            <Tab.Screen name="Home" 
              component={MainRoutes} 
              // options={({ route }) => ({
              //     headerTitle: getFocusedRouteNameFromRoute(route),
              //   })}
              />
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

