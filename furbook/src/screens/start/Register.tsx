import React, {memo, useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {
  Button,
  TextInput,
  HelperText,
} from 'react-native-paper';

//Register validators
import { passwordValidator } from '../../utils/registerValidator';
import { emailValidator } from '../../utils/registerValidator';
import { passwordMatchValidator } from '../../utils/registerValidator';
import { nameValidator } from '../../utils/registerValidator';

const Register = () => {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [confirmPassword, setConfirmPassword] = useState({value: '', error: ''});
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);

  const handleRegister = () => {
    var nameError = nameValidator(name.value);
    var emailError = emailValidator(email.value);
    var passwordError = passwordValidator(password.value);
    var confirmPasswordError = passwordMatchValidator(password.value, confirmPassword.value)

    // If error string is not empty, it evaluates to true
    if (nameError || emailError || passwordError || confirmPasswordError) {
      // Reset states
      setName({...name, error: nameError})
      setEmail({...email, error: emailError});
      setPassword({value: '', error: passwordError})
      setConfirmPassword({value: '', error: confirmPasswordError})
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
          label="Name"
          value={name.value}
          onChangeText={text => setName({value: text, error: ''})}
          selectionColor="brown"
          activeOutlineColor="brown"
        />
        <HelperText type="error" visible={!!name.error}>
          {name.error}
        </HelperText>


        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Email"
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          selectionColor="brown"
          activeOutlineColor="brown"
        />
        <HelperText type="error" visible={!!email.error}>
          {email.error}
        </HelperText>

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
        <HelperText type="error" visible={!!password.error}>
          {password.error}
        </HelperText>

        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Confirm Password"
          value={confirmPassword.value}
          onChangeText={text => setConfirmPassword({value: text, error: ''})}
          selectionColor="brown"
          activeOutlineColor="brown"
          secureTextEntry={confirmPasswordVisible}
          right={<TextInput.Icon name={confirmPasswordVisible ? "eye" : "eye-off"} onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} />}
        />
        <HelperText type="error" visible={!!confirmPassword.error}>
          {confirmPassword.error}
        </HelperText>

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
    marginTop: '10%',
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
