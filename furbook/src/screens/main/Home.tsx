import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, NativeEventEmitter} from 'react-native';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import {
  Button, IconButton,
  TextInput,
  HelperText,
  Text as PaperText,
  Avatar, Card, Title, Paragraph
} from 'react-native-paper';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StartStackParamList} from '../../navigation/ParameterList';

import auth from '@react-native-firebase/auth'


type navigationProps = NativeStackScreenProps<StartStackParamList, 'Login'>;

const Home = ({ route, navigation }: navigationProps) => {
  
  console.log('Entering the Home Screen')

  const logOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User has logged out. Automatically switching navigation stacks.')
      });
  };

  return (
    <View>
      <Text>This is the home screen. Navigate to the Notes screen below.</Text>
      <Button onPress={() => navigation.navigate("Notes" as never, {} as never)}>Notes Screen</Button>
      <Button onPress={logOut}>Sign out</Button>
    </View>
  );
};




export default memo(Home);
