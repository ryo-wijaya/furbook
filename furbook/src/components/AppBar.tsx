import React, {memo, useState} from 'react';
import {Appbar} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StartStackParamList} from '../navigation/ParameterList';
import {StyleSheet} from 'react-native';

type navigationProps = NativeStackScreenProps<StartStackParamList>;

const AppBar = ({navigation, back, route}: any) => {

  return (
    <Appbar.Header style={styles.appBar}>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : null}
      <Appbar.Content title={route.name === "HomePage" ? "Home" : route.name} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#6d453d',
    height: 60,
  },
});

export default memo(AppBar);
