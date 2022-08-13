import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {
  Button,
  TextInput,
  HelperText,
} from 'react-native-paper';

import { emailValidator } from '../../utils/loginValidator';
import { passwordValidator } from '../../utils/loginValidator';
import ErrorMessage from '../../components/ErrorMessage';

const LoginScreen = () => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const handleLogin = () => {
    var emailError = emailValidator(email.value);
    var passwordError = passwordValidator(password.value);

    // If error string is not empty, it evaluates to true
    if (emailError || passwordError) {
      // Reset states
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError})
      return;
    }
  };

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/furbookText.png')}
          style={styles.furbookImage}
        />
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.header}>Login</Text>

        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Email"
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          selectionColor="brown"
          activeOutlineColor="brown"
        />
        <ErrorMessage visible={!!email.error} text={email.error}/>

        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Password"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          selectionColor="brown"
          activeOutlineColor="brown"
          secureTextEntry
        />
        <ErrorMessage visible={!!password.error} text={password.error}/>

        <View style={styles.forgotPassword}>
          <TouchableOpacity>
            <Text>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <Button mode="contained" style={styles.button} onPress={handleLogin}>
          Login
        </Button>

        <View style={styles.signUp}>
          <TouchableOpacity>
            <Text>Dont have an account? Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  furbookImage: {
    flex: 1,
    width: 200,
    resizeMode: 'contain',
  },
  loginContainer: {
    marginTop: '30%',
    margin: '5%',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    margin: '1%',
  },
  textInput: {
    margin: '1%',
    borderColor: '#ae928e',
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  signUp: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#ae928e',
  },
});

export default memo(LoginScreen);
