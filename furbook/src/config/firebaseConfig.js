import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const credentials = {
    apiKey: "AIzaSyB3ymHhadHJrGVrHZpJH2gak0CZyHPgFwQ",
    authDomain: "note-app-rn.firebaseapp.com",
    projectId: "note-app-rn",
    storageBucket: "note-app-rn.appspot.com",
    messagingSenderId: ".....",
    appId: "......"
  };

  const config = {
    name: 'SECONDARY_APP',
  };

export const firebaseApp = firebase.initializeApp(credentials, config)
export const database = firebase.firestore();
export const storage = firebase.storage();

