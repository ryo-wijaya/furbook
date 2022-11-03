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
      <View>
        <Text style={styles.welcomeUsername}>Welcome, ryo200024</Text>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.actualImage}>
          <Image
            source={require('../../assets/home1.png')}
          />
        </View>
        <View style={styles.actualImage}>
          <Image
            source={require('../../assets/home2.png')}
          />
        </View>
        <View style={styles.actualImage}> 
          <Image
            source={require('../../assets/home3.png')}
            style={styles.recommendationImagee}
          />
        </View>
        <View style={styles.actualImage}>
          <Image
            source={require('../../assets/home4.png')}
          />
        </View>
        <View style={styles.actualImage}>
          <Image
            source={require('../../assets/home5.png')}
          />
        </View>
      </View>
      <Button onPress={logOut}>Sign out</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeUsername: {
    marginLeft: '5%',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  actualImage: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  recommendationImagee: {
    flexDirection: 'row',
    alignItems: 'center',
    resizeMode: 'contain',
    width: 85,
    height: 100,
  }
});




export default memo(Home);
