import React from 'react';
import { StyleSheet, Text, useColorScheme, View, ImageBackground } from 'react-native';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootStackParameterList';

// Background image
const image = require('../../assets/welcome.png');

type navigationProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const GetStarted = ({ route, navigation }: navigationProps) => {

  const buttonHandler = () => {
    navigation.navigate("Login" as never, {} as never)
  }

  return (
    <View>
      <ImageBackground source={image} style={styles.backgroundImage}>
        <View style={styles.buttonContainer}>
          <Button 
            mode="contained" 
            style={styles.button}
            labelStyle={styles.buttonText}
            onPress={buttonHandler}
          >
            GET STARTED
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  button: {
    width: '70%',
    backgroundColor: '#ae928e',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#EFEDDD',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '160%',
  },
});

export default GetStarted;
