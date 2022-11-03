import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {
  Button,
  TextInput,
  HelperText,
} from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StartStackParamList } from '../../navigation/ParameterList';

import { emailValidator } from '../../utils/loginValidator';
import { passwordValidator } from '../../utils/loginValidator';

//Firebase authentication
import auth, { firebase } from '@react-native-firebase/auth';


type navigationProps = NativeStackScreenProps<StartStackParamList, 'Login'>;


const Login = ({ route, navigation }: navigationProps) => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [passwordVisible, setPasswordVisible] = useState(true)

  console.log('Entering the Login Screen')

  const handleLogin = () => {
    var emailError = emailValidator(email.value);
    var passwordError = passwordValidator(password.value);

    // If error string is not empty, it evaluates to true
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError})
      return;
    }

    auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        setEmail({value: '', error: ''})
        setPassword({value: '', error: ''})
        console.log('User Logged in successfully! Automatically switching navigation stacks.')
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log("Register Error Code:", errorCode)
        console.log("Register Error Message:", error.message)

        // Bring in other error codes in the future if necessary
        if (errorCode === "auth/wrong-password" || errorCode === "auth/user-not-found") {
          setPassword({...password, error: "Invalid email address or password"})
        }
      });
  };

  const handleRegister = () => {
    navigation.navigate("Register" as never, {} as never)
  }

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/ecoable.png')}
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
          outlineColor="#6d453d"
          theme={{colors: {text: 'black', placeholder: 'brown'}}}
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
          outlineColor="#6d453d"
          theme={{colors: {text: 'black', placeholder: 'brown'}}}
          secureTextEntry={passwordVisible}
          right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} color="black" onPress={() => setPasswordVisible(!passwordVisible)} />}
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
    backgroundColor: "#d3c4bf",
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
    marginLeft: '1%',
  },
  registerText: {
    textDecorationLine: 'underline',
  }
});

export default memo(Login);
