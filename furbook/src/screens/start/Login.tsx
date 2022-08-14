import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {
  Button,
  TextInput,
  HelperText,
} from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/rootStackParameterList';

import { emailValidator } from '../../utils/loginValidator';
import { passwordValidator } from '../../utils/loginValidator';

type navigationProps = NativeStackScreenProps<RootStackParamList, 'Register'>;

const Login = ({ route, navigation }: navigationProps) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [passwordVisible, setPasswordVisible] = useState(true)

  const handleLogin = () => {
    var emailError = emailValidator(email.value);
    var passwordError = passwordValidator(password.value);

    // If error string is not empty, it evaluates to true
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError})
      return;
    }

    // Do login, then navigate
    navigation.navigate('Home' as never, {} as never)
  };

  const handleRegister = () => {
    console.log("pressed")
    navigation.navigate("Register" as never, {} as never)
  }

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

        <View style={styles.forgotPassword}>
          <TouchableOpacity>
            <Text>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <Button mode="contained" style={styles.button} onPress={handleLogin}>
          Login
        </Button>

        <View style={styles.signUp}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.registerText} onPress={handleRegister}>Register now</Text>
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
    marginLeft: '1%',
    borderColor: '#ae928e',
  },
  errorText: {
    height: "80%",
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: "1%",
    paddingRight: "1%"
  },
  signUp: {
    flexDirection: 'row',
    margin: "1%",
  },
  button: {
    backgroundColor: '#ae928e',
    margin: "1%",
  },
  registerText: {
    textDecorationLine: 'underline',
  }
});

export default memo(Login);
