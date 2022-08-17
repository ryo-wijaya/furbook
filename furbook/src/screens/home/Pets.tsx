import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, NativeEventEmitter} from 'react-native';
import {
  Button,
  TextInput,
  HelperText,
  Text as PaperText,
  Avatar, Card, Title, Paragraph
} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/rootStackParameterList';

import auth from '@react-native-firebase/auth';

type navigationProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Pets = ({ route, navigation }: navigationProps) => {
  
  console.log('Entering the Pets Screen')

  const logOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('Logged Out');
        navigation.navigate('Login' as never, {} as never);
      });
  };

  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Avatar.Image size={100} source={require('../../assets/dog.png')} />
          <View style={styles.petDetailsContainer}>
            <View style={styles.petDetails}>
              <Text style={styles.petDetailTextKey}>Name: </Text>
              <Text style={styles.petDetailTextValue}>Eevee</Text>
            </View>
            <View style={styles.petDetails}>
              <Text style={styles.petDetailTextKey}>Gender: </Text>
              <Text style={styles.petDetailTextValue}>Female</Text>
            </View>
            <View style={styles.petDetails}>
              <Text style={styles.petDetailTextKey}>Breed: </Text>
              <Text style={styles.petDetailTextValue}>Cavapoo</Text>
            </View>
            <View style={styles.petDetails}>
              <Text style={styles.petDetailTextKey}>Age: </Text>
              <Text style={styles.petDetailTextValue}>8 Months</Text>
            </View>
          </View>
        </Card.Content>
        <Card.Actions style={styles.buttonsContainer}>
          <Button icon="camera">View Profile</Button>
          <Button>Edit Profile</Button>
          <Button>Delete Pet</Button>
          {/* <Icon name="rocket" size={30} color="#900" /> */}
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content style={styles.plusSignContainer}>
          <Text style={styles.plusSign}>+</Text>
        </Card.Content>
      </Card>
      <Button onPress={logOut}>Sign out</Button>
    </View>
  );
};


const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  card: {
    marginTop: "3%",
    marginBottom: '1%',
    marginLeft: "4%",
    marginRight: "4%",
    backgroundColor: '#e0cfc8',
    borderColor:'#808080',
    elevation: 10,
    borderRadius: 50,
    // maxHeight: "22%",
    // minHeight: "22%",
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  cardContent: {
    marginLeft: "10%",
    flexDirection: 'row',
    alignItems: 'center',
  },
  petDetailsContainer: {
    paddingLeft: "2%"
  },
  petDetails: {
    paddingLeft: "10%",
    flexDirection: 'row',
  },
  petDetailTextKey: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "black",
    fontFamily: "normal",
  },
  petDetailTextValue: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "#3b1605",
    fontFamily: "cursive"
  },
  plusSignContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSign: {
    fontSize: 100,
    color: "#6d453d"
  },
  buttonsContainer: {
    justifyContent: 'flex-end',
  }
});

export default memo(Pets);
