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
import {RootStackParamList} from '../../navigation/rootStackParameterList';

import auth from '@react-native-firebase/auth'


type navigationProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Home = ({ route, navigation }: navigationProps) => {
  
  console.log('Entering the Home Screen')

  return (
    <View>
      <Text>This is the home screen. Navigate to the Pets screen below.</Text>
      <Button onPress={() => navigation.navigate("Pets" as never, {} as never)}>Pets Screen</Button>

    </View>
  );
};




export default memo(Home);
