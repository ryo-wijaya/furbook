import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {
  Button,
  TextInput,
  HelperText,
} from 'react-native-paper';

//Register validators
import ErrorMessage from '../../components/ErrorMessage';
import { passwordValidator } from '../../utils/registerValidator';
import { emailValidator } from '../../utils/registerValidator';

const Register = () => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [passwordVisible, setPasswordVisible] = useState(true)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true)

  const handleRegister = () => {
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

      <View style={styles.registerContainer}>
        <Text style={styles.header}>Register</Text>

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
          secureTextEntry={passwordVisible}
          right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
        />
        <ErrorMessage visible={!!password.error} text={password.error}/>

        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Confirm Password"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          selectionColor="brown"
          activeOutlineColor="brown"
          secureTextEntry={confirmPasswordVisible}
          right={<TextInput.Icon name={confirmPasswordVisible ? "eye" : "eye-off"} onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} />}
        />
        <ErrorMessage visible={!!password.error} text={password.error}/>

        <Button mode="contained" style={styles.button} onPress={handleRegister}>
          Register
        </Button>

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
  registerContainer: {
    marginTop: '30%',
    margin: '5%',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 28,
    margin: '1%',
  },
  textInput: {
    marginLeft: '1%',
    borderColor: '#ae928e',
  },
  button: {
    backgroundColor: '#ae928e',
    margin: "1%",
  },
  registerText: {
    textDecorationLine: 'underline',
  }
});

export default memo(Register);
