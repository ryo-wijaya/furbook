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

const Settings = ({ route, navigation }: navigationProps) => {
  
  console.log('Entering the Settings Screen')

  return (
    <View>
      <Text>This is the Settings screen.</Text>
    </View>
  );
};

export default memo(Settings);
