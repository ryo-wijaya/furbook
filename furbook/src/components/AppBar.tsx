import React, {memo, useState} from 'react';
import {Appbar} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/rootStackParameterList';
import {StyleSheet} from 'react-native';

type navigationProps = NativeStackScreenProps<RootStackParamList>;

const AppBar = ({navigation, back, route}: any) => {

  if (route.name === "GetStarted" ||
      route.name === "Login" ||
      route.name === "Register") {
        return null;
      }

  return (
    <Appbar.Header style={styles.appBar}>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.openDrawer()}
          size={28}
          style={{paddingLeft: 3}}
        />
      )}
      <Appbar.Content title={route.name} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#6d453d',
  },
});

export default memo(AppBar);
