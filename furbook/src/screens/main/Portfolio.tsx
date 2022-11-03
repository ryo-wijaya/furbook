import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, NativeEventEmitter} from 'react-native';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import {
  Button, IconButton,
  TextInput,
  HelperText,
  Text as PaperText,
  Avatar, Card, Title, Paragraph,
  DataTable
} from 'react-native-paper';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StartStackParamList} from '../../navigation/ParameterList';

type navigationProps = NativeStackScreenProps<StartStackParamList, 'Login'>;

const Settings = ({ route, navigation }: navigationProps) => {

  return (
    <View>
      <DataTable style={styles.table}>
        <DataTable.Header>
          <DataTable.Title>Symbol</DataTable.Title>
          <DataTable.Title>Exchange</DataTable.Title>
          <DataTable.Title numeric>Quantity</DataTable.Title>
          <DataTable.Title numeric>Price</DataTable.Title>
          <DataTable.Title numeric>Gains/Loss</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Ericsson</DataTable.Cell>
          <DataTable.Cell>NYSE</DataTable.Cell>
          <DataTable.Cell numeric>200</DataTable.Cell>
          <DataTable.Cell numeric>5.45</DataTable.Cell>
          <DataTable.Cell numeric>+100.20</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>DTE</DataTable.Cell>
          <DataTable.Cell>Xetra</DataTable.Cell>
          <DataTable.Cell numeric>100</DataTable.Cell>
          <DataTable.Cell numeric>19.50</DataTable.Cell>
          <DataTable.Cell numeric>+355.99</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    marginTop: "10%",
  },
});

export default memo(Settings);
