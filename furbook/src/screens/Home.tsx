import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {
    Button,
    TextInput,
    HelperText,
    Text as PaperText
  } from 'react-native-paper';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation/RootStackParamList";

// type navigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = () => {
    return (
        <>
            <Text>This is the home screen</Text>
            <PaperText>This is a paper text</PaperText>
        </>
    );
}

export default memo(Home);