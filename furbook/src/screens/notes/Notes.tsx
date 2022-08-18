import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {
    Button,
    TextInput,
    HelperText,
    Text as PaperText
  } from 'react-native-paper';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StartStackParamList } from '../../navigation/ParameterList';

import auth from '@react-native-firebase/auth';

// type navigationProps = NativeStackScreenProps<StartStackParamList, 'Home'>;

const Notes = () => {

    console.log("This is the notes screen")

    return (
        <>
            <Text>This is the notes screen</Text>
        </>
    );
}

export default memo(Notes);