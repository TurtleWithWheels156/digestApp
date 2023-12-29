import { StyleSheet, View, Text, TextInput, ActivityIndicator, Button, Alert, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, User } from 'firebase/auth';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async() => {
    setLoading(true);
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
    } catch(error: any) {
        console.log(error);
        Alert.alert('Sign in failed: ' + error.message );
    } finally {
        setLoading(false);
    }
  }

  const signUp = async() => {
    setLoading(true);
    try {
        const response = await createUserWithEmailAndPassword(auth, email,password);
        console.log(response);
        Alert.alert('Check your emails!');
    } catch(error: any) {
        console.log(error);
        Alert.alert('Registration failed: ' + error.message );
    } finally {
        setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
            <Text>BINDLE: Trade with haste means less waste</Text>
            <TextInput style={styles.input} value={email} placeholder='email' autoCapitalize='none' onChangeText={(Text) => setEmail(Text)}></TextInput>
            <TextInput style={styles.input} value={password} placeholder='password' secureTextEntry={true} autoCapitalize='none' onChangeText={(Text) => setPassword(Text)}></TextInput>

            { loading ? <ActivityIndicator size="large" color="000fff"/>
            : <>
            <Button title='Login' onPress={signIn} />
            <Button title='Create Account' onPress={signUp} />
            </>

            }
       </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    input: {
        marginVertical : 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
  });