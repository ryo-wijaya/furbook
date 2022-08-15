import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {
    Button,
    TextInput,
    HelperText,
    Text as PaperText
  } from 'react-native-paper';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootStackParameterList';

import auth from '@react-native-firebase/auth';

// type navigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Notes = () => {

    return (
        <>
            <Text>This is the notes screen</Text>
        </>
    );
}

export default memo(Notes);