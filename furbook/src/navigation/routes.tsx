import React, { memo } from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackParamList } from "./rootStackParameterList";

// Navigation Screens
import GetStarted from "../screens/start/GetStarted";
import Login from "../screens/start/Login";
import Register from "../screens/start/Register";
import Home from "../screens/home/Home";
import Pets from "../screens/home/Pets";
import Notes from "../screens/notes/Notes";
import AppBar from "../components/AppBar";

// const Drawer = createDrawerNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

interface AuthProps {
  authenticated: boolean;
}

// const GoToNotes = ({ navigation }: any) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.navigate('Notes' as never, {} as never)}>
//           Hello there
//       </Button>
//     </View>
//   );
// }

// const DrawerNavigator = () => {

//   console.log("DrawerNavigator Triggered")
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Notes" component={GoToNotes} />
//     </Drawer.Navigator>
//   );
// }

const Routes = (authenticated: AuthProps) => {

    return (
      <Stack.Navigator 
        screenOptions={{
          // headerShown: false,
          header: (props) => <AppBar {...props} />,
        }}
      > 
        {authenticated.authenticated ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Pets" component={Pets} />
            <Stack.Screen name="Notes" component={Notes} />
          </>
        ) : (
          <>
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    );
}

export default memo(Routes);

