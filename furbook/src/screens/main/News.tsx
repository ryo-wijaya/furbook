import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, ScrollView, Image, NativeEventEmitter} from 'react-native';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import {
  Button, IconButton,
  TextInput,
  HelperText,
  Text as PaperText,
  Avatar, Card, Title, Paragraph
} from 'react-native-paper';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StartStackParamList} from '../../navigation/ParameterList';
import AppBar from '../../components/AppBar';

import auth from '@react-native-firebase/auth'


type navigationProps = NativeStackScreenProps<StartStackParamList, 'Login'>;

const Pets = ({ route, navigation }: navigationProps) => {
  
  console.log('Entering the Pets Screen')

  return (
    <ScrollView>
    <View style={styles.cardContainer}>
      <Card style={styles.headCard}>
          <TouchableOpacity onPress={() => console.log("hi")}>
            <Card.Content style={styles.plusSignContainer}>
              <Text style={styles.plusSign}>Sustainable News Articles</Text>
            </Card.Content>
          </TouchableOpacity>
      </Card>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Avatar.Image size={100} source={require('../../assets/company.png')} />
          <View style={styles.petDetailsContainer}>
            <View style={styles.petDetails}>
              <Text style={styles.petDetailTextKey}>Oil Giant Exon Spill</Text>
            </View>
            <View style={styles.petDetails}>
              <Text>Click to read more</Text>
            </View>
          </View>
        </Card.Content>
        <Card.Actions style={styles.buttonsContainer}>
          <IconButton 
            icon="share"
            color="#6d453d"
            size={25}
            onPress={() => console.log("hi")}
          />
          <IconButton 
            icon="bookmark"
            color="#6d453d"
            size={25}
            onPress={() => console.log("hi")}
          />
          <IconButton 
            icon="heart"
            color="#6d453d"
            size={25}
            onPress={() => console.log("hi")}
          />
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Avatar.Image size={100} source={require('../../assets/company.png')} />
          <View style={styles.petDetailsContainer}>
            <View style={styles.petDetails}>
              <Text style={styles.petDetailTextKey}>Saudi Company Sea Adventures</Text>
            </View>
            <View style={styles.petDetails}>
              <Text>Click to read more</Text>
            </View>
          </View>
        </Card.Content>
        <Card.Actions style={styles.buttonsContainer}>
          <IconButton 
            icon="share"
            color="#6d453d"
            size={25}
            onPress={() => console.log("hi")}
          />
          <IconButton 
            icon="bookmark"
            color="#6d453d"
            size={25}
            onPress={() => console.log("hi")}
          />
          <IconButton 
            icon="heart"
            color="#6d453d"
            size={25}
            onPress={() => console.log("hi")}
          />
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Avatar.Image size={100} source={require('../../assets/company.png')} />
          <View style={styles.petDetailsContainer}>
            <View style={styles.petDetails}>
              <Text style={styles.petDetailTextKey}>Latest on Climate</Text>
            </View>
            <View style={styles.petDetails}>
              <Text>Click to read more</Text>
            </View>
          </View>
        </Card.Content>
        <Card.Actions style={styles.buttonsContainer}>
          <IconButton 
            icon="share"
            color="#6d453d"
            size={25}
            onPress={() => console.log("hi")}
          />
          <IconButton 
            icon="bookmark"
            color="#6d453d"
            size={25}
            onPress={() => console.log("hi")}
          />
          <IconButton 
            icon="heart"
            color="#6d453d"
            size={25}
            onPress={() => console.log("hi")}
          />
        </Card.Actions>
      </Card>

        <Card style={styles.card}>
          <TouchableOpacity onPress={() => console.log("hi")}>
            <Card.Content style={styles.plusSignContainer}>
              <Text style={styles.plusSign}>Placeholder Article</Text>
            </Card.Content>
          </TouchableOpacity>
        </Card>
        <Card style={styles.card}>
          <TouchableOpacity onPress={() => console.log("hi")}>
            <Card.Content style={styles.plusSignContainer}>
              <Text style={styles.plusSign}>Placeholder Article</Text>
            </Card.Content>
          </TouchableOpacity>
        </Card>
        <Card style={styles.card}>
          <TouchableOpacity onPress={() => console.log("hi")}>
            <Card.Content style={styles.plusSignContainer}>
              <Text style={styles.plusSign}>Placeholder Article</Text>
            </Card.Content>
          </TouchableOpacity>
        </Card>
        <Card style={styles.card}>
          <TouchableOpacity onPress={() => console.log("hi")}>
            <Card.Content style={styles.plusSignContainer}>
              <Text style={styles.plusSign}>Placeholder Article</Text>
            </Card.Content>
          </TouchableOpacity>
        </Card>
        <Card style={styles.card}>
          <TouchableOpacity onPress={() => console.log("hi")}>
            <Card.Content style={styles.plusSignContainer}>
              <Text style={styles.plusSign}>Placeholder Article</Text>
            </Card.Content>
          </TouchableOpacity>
        </Card>
    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  headCard: {
    marginTop: "3%",
    marginBottom: '1%',
    marginLeft: "4%",
    marginRight: "4%",
    backgroundColor: '#d3c4bf',
    borderColor:'#808080',
    elevation: 10,
    borderRadius: 1,
    maxHeight: "70%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginTop: "3%",
    marginBottom: '1%',
    marginLeft: "4%",
    marginRight: "4%",
    backgroundColor: '#d3c4bf',
    borderColor:'#808080',
    elevation: 10,
    borderRadius: 50,
    minHeight: "20%",
    maxHeight: "70%",
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  cardContent: {
    marginLeft: "5%",
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
    alignItems: 'center',
    paddingTop: "5%"
  },
  plusSign: {
    fontSize: 25,
    color: "#6d453d"
  },
  buttonsContainer: {
    justifyContent: 'center',
    color: "black"
  }
});

export default memo(Pets);
