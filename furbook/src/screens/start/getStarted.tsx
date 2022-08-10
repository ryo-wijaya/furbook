import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const image = require('../../assets/welcome.png')

const GetStarted = () => {
  return (
    <View>
      <ImageBackground source={image} style={styles.backgroundImage}>
        <Button style={styles.button}>Click Me</Button>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: "100%",
  },
  button: {
    position: 'relative',
    height: 1500,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default GetStarted;
