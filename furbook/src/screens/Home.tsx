import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {
    Button,
    TextInput,
    HelperText,
    Text as PaperText
  } from 'react-native-paper';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation/rootStackParameterList";

import auth from '@react-native-firebase/auth';

// type navigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = () => {

    console.log("User:", auth().currentUser)

    const logOut = () => {
        auth().signOut().then(() => {
            console.log("Logged Out")
        })
    }

    return (
        <>
            <Text>This is the home screen</Text>
            <PaperText>This is a paper text</PaperText>
            <Button onPress={logOut}>Sign out</Button>
        </>
    );
}

export default memo(Home);