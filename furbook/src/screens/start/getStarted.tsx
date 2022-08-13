import React from 'react';
import { StyleSheet, Text, useColorScheme, View, ImageBackground } from 'react-native';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

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
            onPress={() => {
              console.log("button pressed");
              buttonHandler()
            }}
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
    backgroundColor: '#EDA125',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#EFEDDD',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '180%',
  },
});

export default GetStarted;
